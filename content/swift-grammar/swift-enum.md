---
emoji: π»
title: Swift μ΄κ±°ν
date: '2021-12-29'
author: woo0dev
tags: iOS Swift μ΄κ±°ν enum
categories: iOS
---

# μ΄κ±°νμ΄λ?
μ°κ΄μ±μ΄ μλ κ°μ λͺ¨μ λμ κ²μ λ§νλ€.

### μμ
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
μμ κ°μ΄ μ°κ΄λ ν­λͺ©λ€μ μ μΈν  μ μλ€. λλ²μ§Έ μ΄κ±°νκ³Ό κ°μ΄ ν μ€λ‘ μμ±ν΄λ λλ€. κ° ν­λͺ©μ κ·Έ μμ²΄κ° κ³ μ κ°μ΄ λλ€.
μ΄κ±°νμ ν­λͺ©μ κ°μ§ λ³μλ₯Ό μ μΈν  μ μκ³  κ° λ³κ²½λ κ°λ₯νλ€.

switch νμ© μμ
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
μ΄κ±°νμ κ° ν­λͺ©λ€μ κ·Έ μμ²΄λ‘ κ³ μ ν κ°μΌλ‘ μΈ μ μμ§λ§ μμκ°μ κ°μ§κ² ν  μ μλ€. μ΄ λ§μ νΉμ  νμμΌλ‘ μ§μ λ κ°μ κ°μ§ μ μλ€λ λ§μ΄λ€.

μμ
```swift
enum CompassPoint: String {
    case north = "λΆ"
    case south = "λ¨"
    case east = "λ"
    case west = "μ"
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
    print(direction.rawValue) // "μ" μΆλ ₯
}
```
μμ κ°μ΄ μ΄κ±°νμ νμμ μ§μ ν΄μ£Όκ³  κ° ν­λͺ©μ μμκ°μ ν λΉνλ©΄ switch κ΅¬λ¬Έκ³Ό κ°μ΄ rawValueλ₯Ό ν΅ν΄ μμκ°μ κ°μ Έμ¬ μ μλ€.
λ°λλ‘ μμκ°μ μ΄μ©ν΄ λ³μλ₯Ό μ μΈν  μλ μλ€.

μμ
```swift
let direction2 = CompassPoint(rawValue: "λ¨") // south
```
CompassPointμ λ§€κ°λ³μλ‘ rawValueλ₯Ό λκ²¨μ£Όκ²λλ©΄ ν΄λΉ μμκ°μ κ°μ§ ν­λͺ©μΌλ‘ λ³μλ₯Ό μ μΈν  μ μλ€.
μ΄κ±°νμ μ°κ΄κ°λ κ°μ§ μ μλ€.

μμ
```swift
enum PhoneError {
    case unknown
    case batteryLow(String)
}
let error = PhoneError.batteryLow("λ°°ν°λ¦¬κ° κ³§ λ°©μ λ©λλ€.")
switch error {
case .batteryLow(let message):
    print(message)
case .unknown:
    print("μ μ μλ μλ¬μλλ€.")
}
```
μ°κ΄κ°μ μ£Όλ €λ©΄ ν­λͺ© μμ μκ΄νΈ()λ₯Ό λΆμ¬μ£Όλ©΄ λλ€. μ΄κ±°νμ ν­λͺ©μ΄ μ°κ΄κ°μ κ°μ§λ€κ³  λͺ¨λ  ν­λͺ©μ΄ μ°κ΄κ°μ κ°μ§ νμλ μλ€.
switchλ₯Ό νμ©ν΄ μ°κ΄κ°μ μΆλ ₯ν  μ μλ€.