---
emoji: ๐ป
title: Swift Protocol
date: '2021-12-22'
author: woo0dev
tags: iOS Swift Protocol ํ๋กํ ์ฝ
categories: iOS
---

# ํ๋กํ ์ฝ์ด๋?
ํน์  ์ญํ ์ ํ๊ธฐ ์ํ ๋ฉ์๋, ํ๋กํผํฐ, ๊ธฐํ ์๊ตฌ์ฌํญ ๋ฑ์ ์ฒญ์ฌ์ง

### ์ฌ์ฉ๋ฒ
protocol ์ด๋ฆ {
}

### ์์
```swift
protocol SomeProtocol {
    
}
protocol SomeProtocol2 {
    
}
struct SomeStructrue: SomeProtocol, SomeProtocol2 {
    
}
```
protocol์ ์ฑํํด ๋ง๋  struct์ด๋ค. class์๋ ๊ฐ์ ๋ฐฉ๋ฒ์ผ๋ก ํ๋กํ ์ฝ์ ์ฑํํ  ์ ์์ง๋ง class๊ฐ ์์๋ฐ๋ SuperClass๊ฐ ์๋ค๋ฉด SuperClass๋ฅผ ๋งจ ์์ ์จ์ผํ๋ค.

```swift
protocol FirstProtocol {
    var name: Int { get set }
    var age: Int { get }
}
```
ํ๋กํ ์ฝ์์ ๋ณ์๋ฅผ ์ ์ธํ  ๋๋ ํญ์ var(๋ณ์)๋ก ์ ์ธํด์ผ ํ๋ฉฐ ์ฝ๊ธฐ,์ฐ๊ธฐ ์ ์ฉ์ธ์ง ์ฝ๊ธฐ ์ ์ฉ์ธ์ง ์ ์ํ  ์ ์๋ค.

```swift
protocol AnotherProtocol {
    static var someTypeProperty: Int { get set }
}
```
ํ๋กํ ์ฝ์์ ํ์ ํ๋กํผํฐ๋ฅผ ์๊ตฌํ๋ ค๋ฉด ํญ์ static ํค์๋๋ฅผ ์ฌ์ฉํด์ผ ํ๋ค.

```swift
protocol FullyNames {
    var fullName: String { get set }
    func printFullName()
}
struct Person: FullyNames {
    var fullName: String
    func printFullName() {
        print(fullName)
    }
}
```
์์ ๊ฐ์ด ํจ์๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

```swift
protocol SomeProtocol5 {
    init()
}
class SomeClass: SomeProtocol5 {
    required init() {
        
    }
}
```
class์์ ํ๋กํ ์ฝ์ ์์ฑ์ ์๊ตฌ์ฌํญ์ ์ค์ํ๋ ค๋ฉด required ์๋ณ์๊ฐ ๊ผญ ํ์ํ๋ค. (๋ง์ฝ class ์์ฒด๊ฐ ์์๋ฐ์ ์ ์๋ finalClass๋ผ๋ฉด required ์๋ณ์๊ฐ ํ์์๋ค.)
(๊ตฌ์กฐ์ฒด์์๋ ํ์์๋ค.)