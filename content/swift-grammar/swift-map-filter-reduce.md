---
emoji: 🐻
title: Swift 고차함수(map, filter, reduce)
date: '2022-01-07'
author: woo0dev
tags: iOS Swift 고차함수 map filter reduce
categories: iOS
---

# 고차함수란?
다른 함수를 전달 인자로 받거나 함수 실행의 결과를 함수로 반환하는 함수

### 스위프트에서 제공하는 고차함수
- map
- filter
- reduce

## map
### 예시
```swift
let numbers = [0,1,2,3]
let mapArray = numbers.map { (number) -> Int in
    return number * 2
}
print("map \(mapArray)")
```
기존 배열을 이용해 새로운 배열을 만든다.

## filter
### 예시
```swift
let intArray = [10,5,20,13,4]
let filterArray = intArray.filter { $0 > 5 }
print("filter \(filterArray)")
```
기존 배열에 조건에 맞지 않는 값을 삭제해 새로운 배열을 만든다.

## reduce
### 예시
```swift
let someArray = [1,2,3,4,5]
let reduceResult = someArray.reduce(0) {
    (result: Int, element: Int) -> Int in
    print("\(result) + \(element)")
    return result + element
}
```
배열의 모든 값을 더하는 코드이다. result는 누적 값을 뜻하고 element는 배열 요소를 뜻한다.
reduceResult에는 배열 요소를 모두 더한 값인 15가 저장된다.