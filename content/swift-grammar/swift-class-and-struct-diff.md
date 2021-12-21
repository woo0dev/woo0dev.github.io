---
emoji: 🐻
title: Swift 클래스와 구조체의 차이
date: '2021-12-21'
author: woo0dev
tags: iOS Swift 클래스 구조체
categories: iOS
---

# 클래스와 구조체의 차이

## 클래스와 구조체의 공통점
- 값을 저장할 프로퍼티를 선언할 수 있습니다.
- 함수적 기능을 하는 메서드 선언 할 수 있습니다.
- 내부 값에 .을 사용하여 접근할 수 있습니다.
- 생성자를 사용해 초기 상태를 설정할 수 있습니다.
- extension을 사용하여 기능을 확장할 수 있습니다.
- Protocol을 채택하여 기능을 설정할 수 있습니다.

## 클래스와 구조체의 차이점

### 클래스
- 참조 타입
- ARC로 메모리를 관리
- 상속이 가능
- 타입 캐스팅을 통해 런타임에서 클래스 인스턴스의 타입을 확인할 수 있음
- deinit을 사용하여 클래스 인스턴스의 메모리 할당을 해제할 수 있음
- 같은 클래스 인스턴스를 여러 개의 변수에 할당한 뒤 값을 변경 시키면 모든 변수에 영향을 줌(메모리가 복사 됨)

### 구조체
- 값 타입
- 구조체 변수를 새로운 변수에 할당할 때마다 새로운 구조체가 할당됩니다.
- 즉 같은 구조체를 여러 개의 변수에 할당한 뒤 값을 변경시키더라도 다른 변수에 영향을 주지 않음(값 자체를 복사)

### 값타입과 참조타입의 예시

클래스(참조 타입)
```swift
class SomeClass {
    var count: Int = 0
}
var class1 = SomeClass()
var class2 = class1
var class3 = class1
class3.count = 2
class1.count // 2
```
위 코드와 같이 클래스는 참조 타입이기 때문에 class1으로 선언된 class3의 count 값을 변경하면 class1의 count 값이 같이 변경되는 것을 확인할 수 있다.

구조체(값 타입)
```swift
struct SomeStruct {
    var count: Int = 0
}
var struct1 = SomeStruct()
var struct2 = struct1
var sturct3 = struct1
struct2.count = 3
sturct3.count = 4
struct1.count // 0
```
구조체는 값 타입이기 때문에 struct1으로 선언된 인스턴스의 프로퍼티 값을 변경해도 원본은 변경되지 않는 것을 확인할 수 있다.