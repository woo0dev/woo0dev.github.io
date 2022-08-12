---
emoji: 🐻
title: Swift Apple MusicKit 활용하기
date: '2022-08-12'
author: woo0dev
tags: iOS Swift Apple AppleMusic 애플 뮤직 MusicKit
categories: iOS
---

이번에는 Apple MusicKit을 사용할 일이 있어서 사용방법을 공유해보려고 한다.

먼저 [developer.apple.com](http://developer.apple.com)에서 developer program을 가입해야 한다.

### 준비 과정

1. Xcode프로젝트 생성
2. MusicKit을 사용하기 위해 [developer.apple.com](http://developer.apple.com)에서 Key에 들어가 MusicKit Key와 Identiffiers를 생성한다. (Key는 한 번만 다운로드 받을 수 있으니 꼭 잘 관리해야 한다.)
3. 다운로드 받은 Key 파일을 열어 private Key 값과 developer에 있는 KeyId, developer teamId를 활용해 JWT를 발급 받아야 한다. (JWT란 웹사이트에서 인증 권한을 처리하기 위한 Json형태의 Token이라고 생각하면 될 것 같다.)
4. JWT을 발급 받는 방법은 다양한데 [jwt.io](http://jwt.io) 사이트를 활용하는 것도 있지만 저는 https://github.com/pelauimagineering/apple-music-token-generator를 참고해 발급 받았다. 이 방법으로 발급 받는다면 토큰 유효기간을 설정할 수 있으니 참고하면 좋을 것 같다.
5. JWT를 발급 받았다면 준비는 끝!

---

간단하게 저는 AppleMusic의 플레이리스트와 그 안에 노래 목록을 가져오겠습니다.

먼저 프로젝트를 외부에 공개(깃허브 등) 할 예정이라면 JWT를 안전한 방법으로 프로젝트에서 쓸 수 있게 준비해야 합니다.

저는 github에 public으로 올릴 생각이기에 property list를 만들고 gitignore 처리를 했습니다. 다른 방법도 많으니 본인에게 맞는 방법으로 진행하면 됩니다.

JWT를 프로젝트에서 사용할 수 있도록 준비를 마쳤다면 가장 먼저 앱에서 AppleMusic에 대한 권한을 허용해야 하는 과정이 필요합니다.

저는 StoreKit을 활용해 아래의 방법으로 권한을 체크했습니다.

```swift
SKCloudServiceController.requestAuthorization { (status) in
		if status == .authorized {
		// API 실행
	}
}
```

AppleMusic에 대한 접근 권한을 얻었다면 JWT토큰을 활용해 UserToken을 받아야 합니다.

위에서 권한을 얻은 방법과 같이 StoreKit의 SKCloudServiceController의 requestUserToken 메서드로 UserToken을 받을 수 있습니다.

```swift
func fetchUserToken() async throws -> String {
	return try await SKCloudServiceController().requestUserToken(forDeveloperToken: developerToken)
}
```

이제 정말 사전 준비는 끝났으니 실제 API를 사용하는 방법을 알아보겠습니다.

---

먼저 Playlist를 가져오겠습니다.

API URL은 공식문서를 참고하면 됩니다. 지금은 Playlist를 요청하는 URL을 가진 변수를 선언하고 API를 요청하기 위해 필요한 정보들을 담을 수 있도록 URLRequest로 만들어 요청 방식과 JWT, UserToken을 Request에 담아 API를 요청하면 된다.

반환 값이 Json 형태가 아니기 때문에 JSONDecoder를 활용해 미리 만들어둔 Model로 변환하여 사용하며 된다.

여기서 조금 고생했던 부분이 AppleMusic Playlist에 대표이미지가 설정되어 있는 경우와 아닌 경우에 속성이 달라서 두가지가 섞여서 반환되면 제대로 Model 변환이 이루어지지 않는 문제가 있었다… 그래서 해당 속성들을 옵셔널로 선언하여 해결했다.

```swift
func fetchPlaylists(userToken: String) async throws -> [Playlist] {
	guard let musicURL = URL(string: "https://api.music.apple.com/v1/me/library/playlists") else { throw NetworkError.invalidURL }
	var musicRequest = URLRequest(url: musicURL)
	musicRequest.httpMethod = "GET"
	musicRequest.addValue("Bearer \(developerToken)", forHTTPHeaderField: "Authorization")
	musicRequest.addValue(userToken, forHTTPHeaderField: "Music-User-Token")
		
	let (data, _) = try await URLSession.shared.data(for: musicRequest)
	let playlists = try JSONDecoder().decode(PlaylistDatum.self, from: data)
	return playlists.data
}
```

```swift
// PlaylistModel.swift
struct PlaylistDatum: Codable {
    let data: [Playlist]
    let meta: Meta?
}

struct Playlist: Codable {
    let id, type, href: String
    let attributes: Attributes
}

struct Attributes: Codable {
    let playParams: PlayParams
		let artwork: PlaylistArtwork?
		let description: PlaylistDescription?
    let hasCatalog, canEdit, isPublic: Bool
    let name, dateAdded: String
}

struct PlaylistArtwork: Codable {
		let width, height: JSONNull?
		let url: String
}

struct PlaylistDescription: Codable {
		let standard: String
}

struct PlayParams: Codable {
    let id, kind: String
    let isLibrary: Bool
}

struct Meta: Codable {
    let total: Int
}
```

---

플레이리스트를 성공적으로 가져왔다면 이제 해당 플레이리스트의 id를 활용해 노래 목록을 가져오는 방법을 알아보겠습니다.

위와 마찬가지로 userToken과 위의 플레이리스트의 id를 매개변수로 받아 API를 호출해주시고 같은 방법으로 미리 선언해둔 Model로 변환하여 활용하시면 됩니다!

```swift
func fetchSongs(userToken: String, id: String) async throws -> [Song] {
		guard let musicURL = URL(string: "https://api.music.apple.com/v1/me/library/playlists/\(id)/tracks") else { throw NetworkError.invalidURL }
		var musicRequest = URLRequest(url: musicURL)
		musicRequest.httpMethod = "GET"
		musicRequest.addValue("Bearer \(developerToken)", forHTTPHeaderField: "Authorization")
		musicRequest.addValue(userToken, forHTTPHeaderField: "Music-User-Token")
		
		let (data, _) = try await URLSession.shared.data(for: musicRequest)
		let songs = try JSONDecoder().decode(SongDatum.self, from: data)
		return songs.data
	}
```

```swift
// SongMdoel.swift
struct SongDatum: Codable {
	let data: [Song]
	let meta: SongMeta
}

struct Song: Codable {
	let id: String
	let type: TypeEnum
	let attributes: SongAttributes
	let href: String
}

struct SongAttributes: Codable {
	let name, albumName: String
	let genreNames: [String]
	let artwork: Artwork
	let hasLyrics: Bool
	let artistName: String
	let durationInMillis, discNumber: Int
	let playParams: SongPlayParams
	let trackNumber: Int
	let releaseDate: String
	let contentRating: String?
}

struct Artwork: Codable {
	let url: String
	let height, width: Int
}

struct SongPlayParams: Codable {
	let reportingID: String?
	let catalogID, id: String
	let kind: Kind
	let reporting, isLibrary: Bool

	enum CodingKeys: String, CodingKey {
		case reportingID = "reportingId"
		case catalogID = "catalogId"
		case id, kind, reporting, isLibrary
	}
}

enum Kind: String, Codable {
	case song = "song"
}

enum TypeEnum: String, Codable {
	case librarySongs = "library-songs"
}

struct SongMeta: Codable {
	let total: Int
}
```

---

생각보다 관련 자료가 많지 않고 JWT를 처음 사용하면서 조금 어려웠던 부분들이 있었지만 그래서 더욱 재밌었고 꼭 해내겠다는 오기가 생기기도 한 것 같습니다..ㅎ

API를 요청하고 반환 값을 확인하는 방법은 이것으로 끝이고 실제로 프로젝트에서 활용하기 위해 ViewModel과 Combine을 사용했습니다. 관련 내용은 다음에 자세하게 포스팅 하도록 하겠습니다!

참고 사이트

[https://developer.apple.com/documentation/applemusicapi](https://developer.apple.com/documentation/applemusicapi)