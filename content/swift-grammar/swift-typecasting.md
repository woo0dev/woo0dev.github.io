---
emoji: 🐻
title: Swift 타입캐스팅
date: '2021-12-23'
author: woo0dev
tags: iOS Swift 타입캐스팅
categories: iOS
---

# 타입 캐스팅이란?
인스턴스의 타입을 확인하거나 어떠한 클래스의 인스턴스를 해당 클래스 계층 구조의 슈퍼 클래스나 서브 클래스로 취급하는 방법

타입 캐스팅 연산자
is - 값의 타입을 확인할 때 사용한다.
as - 값의 타입을 다른 타입으로 지정할 때 사용한다.

자세한 건 예시를 보며 알아보자
is, as를 사용하기에 앞서 먼저 클래스들을 생성한다.
```Swift
class MediaItem {
    var name: String
    init(name: String) {
        self.name = name
    }
}

class Movie: MediaItem {
    var director: String
    init(name: String, director: String) {
        self.director = director
        super.init(name: name)
    }
}

class Song: MediaItem {
    var artist: String
    init(name: String, artist: String) {
        self.artist = artist
        super.init(name: name)
    }
}
```
위 코드는 MediaItem Class를 상속받는 Movie Class와 Song Class를 만들어주었다.

다음은 MediaItem을 담는 배열을 만들었다.
```swift
let library = [
    Movie(name: "기생충", director: "봉준호"),
    Song(name: "Butter", artist: "BTS"),
    Movie(name: "올드보이", director: "박찬욱"),
    Song(name: "Wonderwall", artist: "Oasis"),
    Song(name: "Rain", artist: "이적")
]
```
원래라면 같은 타입만 하나의 배열에 저장할 수 있지만 현재는 Movie Class와 Song Class 모두 MediaItem을 상속받고 있기 때문에 MediaItem 타입의 매열을 만들어 줄 수 있다.

### is 예시
```swift
var movieCount = 0
var songCount = 0
for item in library {
    if item is Movie {
        movieCount += 1
    } else if item is Song {
        songCount += 1
    }
}
print("Media library contains \(movieCount) movies and \(songCount) songs")
```
library 배열 안에 있는 값의 타입을 확인하고 개수를 세는 코드이다.
if문을 보면 item is Movie 라고 되어있는데 이것은 현재 item이 Movie냐? 라고 묻는 것이고 리턴은 Bool형식이므로 타입을 확인할 수 있다.

### as 예시
```swift
for item in library {
    if let movie = item as? Movie {
        print("Movie: \(movie.name), dir: \(movie.director)")
    } else if let song = item as? Song {
        print("Song: \(song.name), by: \(song.artist)")
    }
}
```
위 코드는 as 연산자로 다운캐스팅을 하는 코드이다. library는 MediaItem 타입의 배열이며 따라서 item 또한 MediaItem 타입이다. 하지만 그 안에는 Movie 또는 Song 타입의 클래스가 존재한다. 위 코드에서는 item을 다운캐스팅하여 하위클래스인 Movie로 활용한다. 하지만 다운캐스팅은 실패할 수도 있기 때문에 as 뒤에 ?를 붙여 사용하는 것이 좋다. 이유는 as!를 사용하게 되면 다운캐스팅이 실패했을 때 런타임 에러가 발생할 수 있기 때문이다. 자세한 건 옵셔널 포스팅 글을 확인해보자.