---
emoji: π»
title: Swift λ€μ΄λ° κ·μΉ λ° κΈ°λ³Έλ°μ΄ν° νμ
date: '2021-11-26'
author: woo0dev
tags: iOS Swift naming data type
categories: iOS
---

# Swiftμ λ€μ΄λ° κ·μΉ
λ€μ΄λ° κ·μΉμλ ν¬κ² Lower Camel Caseμ Upper Camel Case λκ°μ§κ° μλλ° μΈμ  μ΄λ€ λ°©μμ μ¬μ©νλμ§ μμλ³΄μ

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

# λ³μ λ° μμ μ μΈ λ°©λ²κ³Ό λ°μ΄ν° νμ

### λ³μ var
```Swift
var name: String = "Hong"
```
μΆνμ varλ‘ μ μΈλ λ³μμ κ°μ λ°κΏ μ μλ€.

### νμ μΆλ‘ 
```Swift
var number = 10
var name = "hong"
```
κ°μ νμμ΄ λͺννλ€λ©΄ νμμ μλ΅μ΄ κ°λ₯νλ€.

### μμ let
```Swift
let name: String = "Hong"
```
κ°μ΄ ν λΉλ νμλ λ³κ²½μ΄ λΆκ°λ₯νλ€. νμ§λ§ μ μΈν  λ κ°μ ν λΉνμ§ μκ³  λ°λ‘ κ°μ ν λΉν΄μ€ μ μλ€.

### λ°μ΄ν° νμ
* Character - μ λμ½λλ₯Ό μ¬μ©νμ¬ νκΈμλ§ ν λΉ κ°λ₯ν νμ (ex> 'a', 'κ°', 'π' λ±)
```Swift
var someCharacter: Character = "κ°"
someCharacter = "A"
someCharacter = "π"
```
* String - λ¬Έμμ΄
```Swift
var someString: String = "μλνμΈμ"
```
* Int - 64bit μ μν
```Swift
var someInt: Int = -100
someInt = 100
```
* UInt - λΆνΈκ° μλ 64bit μ μν
```Swift
var someUInt: UInt = 200
```
* Float - 32bit λΆλ μμμ 
```Swift
var someFloat: Float = 1.1
someFloat = 1
```
* Double - 64bit λΆλ μμμ 
```Swift
var someDouble: Double = 1.1
someDouble = 1
```
* Bool - true, false (λ€λ₯Έ μΈμ΄μ λ¬λ¦¬ 0, 1κ°μ ννλ°©μμ νμ©νμ§ μμ.)
```Swift
var someBool: Bool = true
someBool = false
```

* Any - Swiftμ λͺ¨λ  νμμ μ§μΉ­νλ ν€μλ (nilμ λΆκ°λ₯)
* AnyObject - λͺ¨λ  ν΄λμ€ νμμ μ§μΉ­νλ ν€μλ (nilμ λΆκ°λ₯)
* nil - μμμ μλ―Ένλ ν€μλ