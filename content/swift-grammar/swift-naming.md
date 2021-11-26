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
값의 타입이 명확하다면 타입은 생략이 가능하다.
추후에 var로 선언된 변수의 값을 바꿀 수 있다.

### 상수 let
```Swift
let name: String = "Hong"
```
값이 할당된 후에는 변경이 불가능하다. 하지만 선언할 때 값을 할당하지 않고 따로 값을 할당해줄 수 있다.

### 데이터 타입
* Character - 유니코드를 사용하여 한글자만 할당 가능한 타입 (ex> 'a', '가', '😀' 등)
* String - 문자열
* Int - 양수 및 음수
* UInt - 양수
* Float - 소수점
* Bool - True, False (다른 언어와 달리 0, 1같은 표현방식은 허용하지 않음.)