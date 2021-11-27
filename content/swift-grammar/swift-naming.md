---
emoji: 🐻
title: Swift 네이밍 규칙 및 기본데이터 타입
date: '2021-11-26'
author: woo0dev
tags: iOS Swift naming data type
categories: iOS
---

# Swift의 네이밍 규칙
네이밍 규칙에는 크게 Lower Camel Case와 Upper Camel Case 두가지가 있는데 언제 어떤 방식을 사용하는지 알아보자

### Lower Camel Case
* function
* method
* variable
* constent

### Upper Camel Case
* class
* struct
* enum
* extension

# 변수 및 상수 선언 방법과 데이터 타입

### 변수 var
```Swift
var name: String = "Hong"
```
추후에 var로 선언된 변수의 값을 바꿀 수 있다.

### 타입 추론
```Swift
var number = 10
var name = "hong"
```
값의 타입이 명확하다면 타입은 생략이 가능하다.

### 상수 let
```Swift
let name: String = "Hong"
```
값이 할당된 후에는 변경이 불가능하다. 하지만 선언할 때 값을 할당하지 않고 따로 값을 할당해줄 수 있다.

### 데이터 타입
* Character - 유니코드를 사용하여 한글자만 할당 가능한 타입 (ex> 'a', '가', '😀' 등)
```Swift
var someCharacter: Character = "가"
someCharacter = "A"
someCharacter = "😀"
```
* String - 문자열
```Swift
var someString: String = "안녕하세요"
```
* Int - 64bit 정수형
```Swift
var someInt: Int = -100
someInt = 100
```
* UInt - 부호가 없는 64bit 정수형
```Swift
var someUInt: UInt = 200
```
* Float - 32bit 부동 소수점
```Swift
var someFloat: Float = 1.1
someFloat = 1
```
* Double - 64bit 부동 소수점
```Swift
var someDouble: Double = 1.1
someDouble = 1
```
* Bool - true, false (다른 언어와 달리 0, 1같은 표현방식은 허용하지 않음.)
```Swift
var someBool: Bool = true
someBool = false
```

* Any - Swift의 모든 타입을 지칭하는 키워드 (nil은 불가능)
* AnyObject - 모든 클래스 타입을 지칭하는 키워드 (nil은 불가능)
* nil - 없음을 의미하는 키워드