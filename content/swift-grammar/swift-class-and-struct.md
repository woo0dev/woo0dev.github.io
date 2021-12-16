---
emoji: 🐻
title: Swift 클래스와 구조체
date: '2021-12-16'
author: woo0dev
tags: iOS Swift 클래스 구조체
categories: iOS
---

# 클래스와 구조체
프로그래머가 데이터를 용도에 맞게 표현하고자 할 때 용이하다. 프로퍼티와 메서드를 사용해서 구조화된 데이터와 기능을 가질 수 있어 하나의 새로운 사용자 정의 데이터타입을 만들어 준다. 사용법은 거의 같다. 하지만 다른 점이 있다. 구조체의 인스턴스는 값타입이고 클래스의 인스턴스는 참조타입이다.

구조체 정의
struct 구조체 이름 {
    프로퍼티와 메서드
}

## 구조체

예시
```swift
struct User {
    var nickname: String
    var age: Int
}
var user = User(nickname: "Woo", age: 25)
user.nickname
user.age
```

프로퍼티 값 변경
```swift
user.nickname = "albert"
user.nickname
```

함수 사용
```swift
struct User {
    var nickname: String
    var age: Int
    
    func information() {
        print("\(nickname) \(age)")
    }
}
user.information()
```

## 클래스
클래스 정의
class 클래스 이름 {
    프로퍼티와 메서드
}

예시
```swift
class Dog {
    var name: String = ""
    var age: Int = 0

    init() { 
		// 인스턴스가 생성되면 호출
		// 클래스에서는 생성자를 정의해야한다. 인스턴스를 생성하고 초기화하고자 할 때 기본적인 생성자를 사용한다.
    }

    func introduce() {
        print("name \(name) age \(age)")
    }
}
var dog = Dog()
dog.name = "CoCo"
dog.age = 3
dog.name // CoCo
dog.age // 3
dog.introduce() // name CoCo age 3
```

### 초기화(Initialization)란?
클래스 구조체 또는 열거형의 인스턴스를 사용하기 위한 준비 과정
```swift
init(매개변수: 타입, ...) {
    // 프로퍼티 초기화
    // 인스턴스 생성시 필요한 설정을 해주는 코드 작성
}
```

예시
```swift
class User {
    var nickname: String
    var age: Int
    
    init(nickname: String, age: Int) {
        self.nickname = nickname
        self.age = age
    }
    
    init(age: Int) {
        self.nickname = "albert"
        self.age = age
    }
}
var user = User(nickname: "Woo", age: 25)
user.nickname // Woo
user.age // 25
var user2 = User(age: 25)
user2.nickname // albert
user2.age // 25
```

### 초기화 해제(Deinitialization)
이니셜라이저와 반대 역할을 한다.
인스턴스가 메모리에서 해제되기 직전에 호출된다.
클래스 인스턴스와 관련하여 원하는 정리 작업을 구현할 수 있다. 
클래스 인스턴스에만 구현할 수 있다.
예시
```swift
deinit {
    print("deinit user")
}
var user3: User? = User(age: 23)
user3 = nil // deinit user 출력
```
인스턴스에 nil이 들어가면 deinit가 호출된다.