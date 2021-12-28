---
emoji: 🐻
title: Swift Extension
date: '2021-12-28'
author: woo0dev
tags: iOS Swift Extension
categories: iOS
---

# Extension(익스텐션)이란?
기존의 클래스, 구조체, 열거형, 프로토콜애 새로운 기능을 추가하는 기능 (기존의 있는 기능을 오버라이딩할 순 없다.)

### 익스텐션이 타입에 추가할 수 있는 기능
- 연산 타입 프로퍼티 / 연산 인스턴스 프로퍼티
- 타입 메서드 / 인스턴스 메서드
- 이니셜라이저
- 서브스크립트
- 중첩 타입
- 특정 프로토콜을 준수할 수 있도록 기능 추가

### 사용법
```swift
extension SomeType {
	// 추가 기능
}
```

### 예시
```swift
extension Int {
    var isEven: Bool {
        return self % 2 == 0
    }
    
    var isOdd: Bool {
        return self % 2 == 1
    }
}
var number: Int = 3
number.isEven // false
number.isOdd // true
```
짝수, 홀수를 판별하는 기능을 추가한 extension이다.
참고로 extension은 연산프로퍼티는 추가할 수 있지만, 저장프로퍼티는 추가할 수 없다. 또 타입에 정의되어 있는 기존의 프로퍼티에 프로퍼티 감시자를 추가할 수 없다.