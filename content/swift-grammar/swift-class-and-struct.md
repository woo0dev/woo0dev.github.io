---
emoji: π»
title: Swift ν΄λμ€μ κ΅¬μ‘°μ²΄
date: '2021-12-16'
author: woo0dev
tags: iOS Swift ν΄λμ€ κ΅¬μ‘°μ²΄
categories: iOS
---

# ν΄λμ€μ κ΅¬μ‘°μ²΄
νλ‘κ·Έλλ¨Έκ° λ°μ΄ν°λ₯Ό μ©λμ λ§κ² νννκ³ μ ν  λ μ©μ΄νλ€. νλ‘νΌν°μ λ©μλλ₯Ό μ¬μ©ν΄μ κ΅¬μ‘°νλ λ°μ΄ν°μ κΈ°λ₯μ κ°μ§ μ μμ΄ νλμ μλ‘μ΄ μ¬μ©μ μ μ λ°μ΄ν°νμμ λ§λ€μ΄ μ€λ€. μ¬μ©λ²μ κ±°μ κ°λ€. νμ§λ§ λ€λ₯Έ μ μ΄ μλ€. κ΅¬μ‘°μ²΄μ μΈμ€ν΄μ€λ κ°νμμ΄κ³  ν΄λμ€μ μΈμ€ν΄μ€λ μ°Έμ‘°νμμ΄λ€.

κ΅¬μ‘°μ²΄ μ μ
struct κ΅¬μ‘°μ²΄ μ΄λ¦ {
    νλ‘νΌν°μ λ©μλ
}

## κ΅¬μ‘°μ²΄

μμ
```swift
struct User {
    var nickname: String
    var age: Int
}
var user = User(nickname: "Woo", age: 25)
user.nickname
user.age
```

νλ‘νΌν° κ° λ³κ²½
```swift
user.nickname = "albert"
user.nickname
```

ν¨μ μ¬μ©
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

## ν΄λμ€
ν΄λμ€ μ μ
class ν΄λμ€ μ΄λ¦ {
    νλ‘νΌν°μ λ©μλ
}

μμ
```swift
class Dog {
    var name: String = ""
    var age: Int = 0

    init() { 
		// μΈμ€ν΄μ€κ° μμ±λλ©΄ νΈμΆ
		// ν΄λμ€μμλ μμ±μλ₯Ό μ μν΄μΌνλ€. μΈμ€ν΄μ€λ₯Ό μμ±νκ³  μ΄κΈ°ννκ³ μ ν  λ κΈ°λ³Έμ μΈ μμ±μλ₯Ό μ¬μ©νλ€.
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

### μ΄κΈ°ν(Initialization)λ?
ν΄λμ€ κ΅¬μ‘°μ²΄ λλ μ΄κ±°νμ μΈμ€ν΄μ€λ₯Ό μ¬μ©νκΈ° μν μ€λΉ κ³Όμ 
```swift
init(λ§€κ°λ³μ: νμ, ...) {
    // νλ‘νΌν° μ΄κΈ°ν
    // μΈμ€ν΄μ€ μμ±μ νμν μ€μ μ ν΄μ£Όλ μ½λ μμ±
}
```

μμ
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

### μ΄κΈ°ν ν΄μ (Deinitialization)
μ΄λμλΌμ΄μ μ λ°λ μ­ν μ νλ€.
μΈμ€ν΄μ€κ° λ©λͺ¨λ¦¬μμ ν΄μ λκΈ° μ§μ μ νΈμΆλλ€.
ν΄λμ€ μΈμ€ν΄μ€μ κ΄λ ¨νμ¬ μνλ μ λ¦¬ μμμ κ΅¬νν  μ μλ€. 
ν΄λμ€ μΈμ€ν΄μ€μλ§ κ΅¬νν  μ μλ€.
μμ
```swift
deinit {
    print("deinit user")
}
var user3: User? = User(age: 23)
user3 = nil // deinit user μΆλ ₯
```
μΈμ€ν΄μ€μ nilμ΄ λ€μ΄κ°λ©΄ deinitκ° νΈμΆλλ€.