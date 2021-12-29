---
emoji: 🐻
title: Swift 열거형
date: '2021-12-29'
author: woo0dev
tags: iOS Swift 열거형 enum
categories: iOS
---

# 열거형이란?
연관성이 있는 값을 모아 놓은 것을 말한다.

### 예시
```swift
enum CompassPoint {
    case north
    case south
    case east
    case west
}
enum CompassPoint {
    case north, south, east, west
}
var direction = CompassPoint.east
direction = .west
```
위와 같이 연관된 항목들을 선언할 수 있다. 두번째 열거형과 같이 한 줄로 작성해도 된다. 각 항목은 그 자체가 고유값이 된다.
열거형의 항목을 가진 변수를 선언할 수 있고 값 변경도 가능하다.

switch 활용 예시
```swift
switch direction {
case .north:
    print("north")
case .south:
    print("south")
case .east:
    print("east")
case .west:
    print("west")
}
```
열거형의 각 항목들은 그 자체로 고유한 값으로 쓸 수 있지만 원시값을 가지게 할 수 있다. 이 말은 특정 타입으로 지정된 값을 가질 수 있다는 말이다.

예시
```swift
enum CompassPoint: String {
    case north = "북"
    case south = "남"
    case east = "동"
    case west = "서"
}
var direction = CompassPoint.east
direction = .west
switch direction {
case .north:
    print(direction.rawValue)
case .south:
    print(direction.rawValue)
case .east:
    print(direction.rawValue)
case .west:
    print(direction.rawValue) // "서" 출력
}
```
위와 같이 열거형에 타입을 지정해주고 각 항목에 원시값을 할당하면 switch 구문과 같이 rawValue를 통해 원시값을 가져올 수 있다.
반대로 원시값을 이용해 변수를 선언할 수도 있다.

예시
```swift
let direction2 = CompassPoint(rawValue: "남") // south
```
CompassPoint의 매개변수로 rawValue를 넘겨주게되면 해당 원시값을 가진 항목으로 변수를 선언할 수 있다.
열거형은 연관값도 가질 수 있다.

예시
```swift
enum PhoneError {
    case unknown
    case batteryLow(String)
}
let error = PhoneError.batteryLow("배터리가 곧 방전됩니다.")
switch error {
case .batteryLow(let message):
    print(message)
case .unknown:
    print("알 수 없는 에러입니다.")
}
```
연관값을 주려면 항목 옆에 소괄호()를 붙여주면 된다. 열거형의 항목이 연관값을 가진다고 모든 항목이 연관값을 가질 필요는 없다.
switch를 활용해 연관값을 출력할 수 있다.