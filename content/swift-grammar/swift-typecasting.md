---
emoji: π»
title: Swift νμμΊμ€ν
date: '2021-12-23'
author: woo0dev
tags: iOS Swift νμμΊμ€ν
categories: iOS
---

# νμ μΊμ€νμ΄λ?
μΈμ€ν΄μ€μ νμμ νμΈνκ±°λ μ΄λ ν ν΄λμ€μ μΈμ€ν΄μ€λ₯Ό ν΄λΉ ν΄λμ€ κ³μΈ΅ κ΅¬μ‘°μ μνΌ ν΄λμ€λ μλΈ ν΄λμ€λ‘ μ·¨κΈνλ λ°©λ²

νμ μΊμ€ν μ°μ°μ
is - κ°μ νμμ νμΈν  λ μ¬μ©νλ€.
as - κ°μ νμμ λ€λ₯Έ νμμΌλ‘ μ§μ ν  λ μ¬μ©νλ€.

μμΈν κ±΄ μμλ₯Ό λ³΄λ©° μμλ³΄μ
is, asλ₯Ό μ¬μ©νκΈ°μ μμ λ¨Όμ  ν΄λμ€λ€μ μμ±νλ€.
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
μ μ½λλ MediaItem Classλ₯Ό μμλ°λ Movie Classμ Song Classλ₯Ό λ§λ€μ΄μ£Όμλ€.

λ€μμ MediaItemμ λ΄λ λ°°μ΄μ λ§λ€μλ€.
```swift
let library = [
    Movie(name: "κΈ°μμΆ©", director: "λ΄μ€νΈ"),
    Song(name: "Butter", artist: "BTS"),
    Movie(name: "μ¬λλ³΄μ΄", director: "λ°μ°¬μ±"),
    Song(name: "Wonderwall", artist: "Oasis"),
    Song(name: "Rain", artist: "μ΄μ ")
]
```
μλλΌλ©΄ κ°μ νμλ§ νλμ λ°°μ΄μ μ μ₯ν  μ μμ§λ§ νμ¬λ Movie Classμ Song Class λͺ¨λ MediaItemμ μμλ°κ³  μκΈ° λλ¬Έμ MediaItem νμμ λ§€μ΄μ λ§λ€μ΄ μ€ μ μλ€.

### is μμ
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
library λ°°μ΄ μμ μλ κ°μ νμμ νμΈνκ³  κ°μλ₯Ό μΈλ μ½λμ΄λ€.
ifλ¬Έμ λ³΄λ©΄ item is Movie λΌκ³  λμ΄μλλ° μ΄κ²μ νμ¬ itemμ΄ Movieλ? λΌκ³  λ¬»λ κ²μ΄κ³  λ¦¬ν΄μ Boolνμμ΄λ―λ‘ νμμ νμΈν  μ μλ€.

### as μμ
```swift
for item in library {
    if let movie = item as? Movie {
        print("Movie: \(movie.name), dir: \(movie.director)")
    } else if let song = item as? Song {
        print("Song: \(song.name), by: \(song.artist)")
    }
}
```
μ μ½λλ as μ°μ°μλ‘ λ€μ΄μΊμ€νμ νλ μ½λμ΄λ€. libraryλ MediaItem νμμ λ°°μ΄μ΄λ©° λ°λΌμ item λν MediaItem νμμ΄λ€. νμ§λ§ κ·Έ μμλ Movie λλ Song νμμ ν΄λμ€κ° μ‘΄μ¬νλ€. μ μ½λμμλ itemμ λ€μ΄μΊμ€ννμ¬ νμν΄λμ€μΈ Movieλ‘ νμ©νλ€. νμ§λ§ λ€μ΄μΊμ€νμ μ€ν¨ν  μλ μκΈ° λλ¬Έμ as λ€μ ?λ₯Ό λΆμ¬ μ¬μ©νλ κ²μ΄ μ’λ€. μ΄μ λ as!λ₯Ό μ¬μ©νκ² λλ©΄ λ€μ΄μΊμ€νμ΄ μ€ν¨νμ λ λ°νμ μλ¬κ° λ°μν  μ μκΈ° λλ¬Έμ΄λ€. μμΈν κ±΄ μ΅μλ ν¬μ€ν κΈμ νμΈν΄λ³΄μ.