---
emoji: 🐻
title: Swift Protocol
date: '2021-12-22'
author: woo0dev
tags: iOS Swift Protocol 프로토콜
categories: iOS
---

# 프로토콜이란?
특정 역할을 하기 위한 메서드, 프로퍼티, 기타 요구사항 등의 청사진

### 사용법
protocol 이름 {
}

### 예시
```swift
protocol SomeProtocol {
    
}
protocol SomeProtocol2 {
    
}
struct SomeStructrue: SomeProtocol, SomeProtocol2 {
    
}
```
protocol을 채택해 만든 struct이다. class에도 같은 방법으로 프로토콜을 채택할 수 있지만 class가 상속받는 SuperClass가 있다면 SuperClass를 맨 앞에 써야한다.

```swift
protocol FirstProtocol {
    var name: Int { get set }
    var age: Int { get }
}
```
프로토콜에서 변수를 선언할 때는 항상 var(변수)로 선언해야 하며 읽기,쓰기 전용인지 읽기 전용인지 정의할 수 있다.

```swift
protocol AnotherProtocol {
    static var someTypeProperty: Int { get set }
}
```
프로토콜에서 타입 프로퍼티를 요구하려면 항상 static 키워드를 사용해야 한다.

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
위와 같이 함수를 사용할 수 있다.

```swift
protocol SomeProtocol5 {
    init()
}
class SomeClass: SomeProtocol5 {
    required init() {
        
    }
}
```
class에서 프로토콜의 생성자 요구사항을 준수하려면 required 식별자가 꼭 필요하다. (만약 class 자체가 상속받을 수 없는 finalClass라면 required 식별자가 필요없다.)
(구조체에서는 필요없다.)