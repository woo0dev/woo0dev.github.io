---
emoji: π»
title: Swift ν¨μλ?
date: '2021-12-01'
author: woo0dev
tags: iOS Swift ν¨μ
categories: iOS
---

# ν¨μλ?
ν¨μλ μμμ κ°μ₯ μμ λ¨μμ΄μ μ½λμ μ§ν©μ΄λ€.

ν¨μ μ¬μ© λ°©λ²
```Swift
func ν¨μλͺ(νλΌλ―Έν° μ΄λ¦: λ°μ΄ν° νμ) β λ°ννμ {
	return λ°ν κ°
}
```

ν¨μ μ¬μ© μμ
```Swift
func sum(a: Int, b: Int) -> Int {
    return a+b
}
sum(a: 5, b: 3)
```

λ§€κ°λ³μκ° μλ ν¨μ
```Swift
func hello() -> String {
    return "hello"
}
hello()
```

λ°ν κ°μ΄ μλ ν¨μ
```Swift
func printName() -> Void {

}
```

λ§€κ°λ³μμ κΈ°λ³Έκ°μ΄ μ£Όμ΄μ§λ ν¨μ
```Swift
func greeting(friend: String, me: String = "Woo") {
    print("Hello, \(friend)! I'm \(me)")
}
greeting(friend: "Albert")
```

μ λ¬μΈμ λ μ΄λΈμ μ¬μ©νλ ν¨μ
```Swift
func sendMessage(from myName: String, to name: String) -> String {
    return "Hello \(name)! I'm \(myName)"
}
sendMessage(from: "Woo", to: "Json")
```
μ λ¬μΈμ λ μ΄λΈμ μ¬μ©νλ©΄ μ¬μ©μ μμ₯μμ λ§€κ°λ³μμ μ­ν μ μ‘°κΈ λ λͺννκ² ν΄μ€ μ μλ€.

```Swift
func sendMessage(_ name: String) -> String {
    return "Hello \(name)"
}
sendMessage("woo")
```
μ λ¬μΈμ λ μ΄λΈμ μ¬μ©νμ§ μκΈ° μν΄μλ μμ²λΌ νλΌλ―Έν° μ΄λ¦ μμ μΈλλ°λ₯Ό λΆμ¬μ£Όλ©΄ ν¨μλ₯Ό μ¬μ©ν  λ νλΌλ―Έν° μ΄λ¦μ μ°μ§ μμλ λλ€.

κ°λ³ λ§€κ°λ³μ μ¬μ© ν¨μ
```Swift
func sendMessage(me: String, friends: String...) -> String {
    return "Hello \(friends)! I'm \(me)"
}
sendMessage(me: "Woo", friends: "Json", "Albert", "Stella")
```
μμ²λΌ κ°λ³ λ§€κ°λ³μλ₯Ό μ¬μ©ν  λ§€κ°λ³μ νμ λ€μ ...μ λΆμ΄λ©΄ ν΄λΉ λ§€κ°λ³μλ κ°λ³ λ§€κ°λ³μκ° λλ€.
κ°λ³ λ§€κ°λ³μλ‘ μ λ¬λ°μ κ°μ λ°°μ΄μ ννλ‘ λμ΄μ€λ κ²μ νμΈν  μ μλ€.
μ£Όμν  μ μ κ°λ³ λ§€κ°λ³μλ ν¨μ λΉ νλλ§ μ μΈμ΄ κ°λ₯νλ€.

μ°Έκ³ 
https://fastcampus.co.kr/dev_online_iosappfinal