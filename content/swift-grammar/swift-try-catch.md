---
emoji: π»
title: Swift try-catch μλ¬μ²λ¦¬
date: '2022-01-01'
author: woo0dev
tags: iOS Swift μλ¬μ²λ¦¬ try catch
categories: iOS
---

# μλ¬ μ²λ¦¬λ?
νλ‘κ·Έλ¨ λ΄μμ μλ¬κ° λ°μν μν©μ λν΄ λμνκ³  μ΄λ₯Ό λ³΅κ΅¬νλ κ³Όμ 

### Swift μλ¬ μ²λ¦¬
- λ°μ(throwing)
- κ°μ§(catching)
- μ ν(propagating)
- μ‘°μ(manipulating)

μλ¬ λ°μμν€λ λ°©λ² throw
```swift
enum PhoneError: Error {
    case unknown
    case batteryLow(batteryLevel: Int)
}

throw PhoneError.batteryLow(batteryLevel: 20)
```
throw ν€μλλ₯Ό μ¬μ©νλ©΄ μλ¬λ₯Ό λ°μμμΌ μλ¬λ₯Ό νμΈν  μ μλ€.

### μμ
```swift
func checkPhoneBatteryStatus(batteryLevel: Int) throws -> String {
    guard batteryLevel != -1 else { throw PhoneError.unknown }
    guard batteryLevel > 20 else { throw PhoneError.batteryLow(batteryLevel: batteryLevel) }
    return "λ°°ν°λ¦¬ μνκ° μ μμλλ€."
}
```
νΈλν°μ λ°°ν°λ¦¬ μνλ₯Ό λ¦¬ν΄νλ ν¨μμ΄λ€.
μ ν¨μμ do-catch, try?, try!λ₯Ό μ¬μ©νμ¬ μλ¬λ₯Ό μ²λ¦¬ν  μ μλ€.

### do-catch
μ¬μ©λ²
```swift
do {
	try μ€λ₯ λ°μ κ°λ₯ μ½λ
} catch μ€λ₯ ν¨ν΄ {
	μ²λ¦¬ μ½λ
}
```

μμ
```swift
do {
    try checkPhoneBatteryStatus(batteryLevel: 20)
} catch PhoneError.unknown {
    print("μ μ μλ μλ¬μλλ€.")
} catch PhoneError.batteryLow(let batteryLevel) {
    print("λ°°ν°λ¦¬ μ μ λΆμ‘± λ¨μ λ°°ν°λ¦¬ : \(batteryLevel)%") // λ°°ν°λ¦¬ μ μ λΆμ‘± λ¨μ λ°°ν°λ¦¬ : 20% μΆλ ₯
} catch {
    print("κ·Έ μΈ μ€λ₯ λ°μ : \(error)")
}
```

### try?
μμ
```swift
let status = try? checkPhoneBatteryStatus(batteryLevel: -1)
print(status) // nil
let status = try? checkPhoneBatteryStatus(batteryLevel: 30)
print(status) // Optional("λ°°ν°λ¦¬ μνκ° μ μμλλ€.")
```
μ μ½λμ κ°μ΄ try?λ₯Ό μ¬μ©νμ¬ μλ¬ μ²λ¦¬λ₯Ό ν  μ μλλ° μλ¬κ° λ°μνλ€λ©΄ nilμ ν λΉνκ³  μλ¬κ° λ°μνμ§ μμλ€λ©΄ μ΅μλμ κ°μΈμ Έ μΆλ ₯λκ² λλ€.

### try!
```swift
let status2 = try! checkPhoneBatteryStatus(batteryLevel: 30)
print(status2) // λ°°ν°λ¦¬ μνκ° μ μμλλ€.
```
try!λ₯Ό μ¬μ©ν  λ μλ¬κ° μ λ λ°μνμ§ μμ λλ§ μ¬μ©ν΄μΌ νλ€. λ§μ½ try!λ₯Ό μΌμ λ μλ¬κ° λ°μνλ€λ©΄ λ°νμμλ¬κ° λ°μνλ©° νλ‘κ·Έλ¨μ΄ μ’λ£λλ€.