---
emoji: π»
title: Swift Collection Type
date: '2021-12-02'
author: woo0dev
tags: iOS Swift Collection
categories: iOS
---

# μ»¬λ μ νμ(Collection Type)μ΄λ?
μ»¬λ μ νμμ λ°μ΄ν°λ€μ μ§ν© λ¬Άμμ΄λ€.
Swiftμλ 3κ°μ μ»¬λ μ νμμ΄ μ‘΄μ¬νλλ° Array, Dictionary, Setμ΄λ€.

### Array
λ°μ΄ν° νμμ κ°λ€μ μμλλ‘ μ μ₯νλ λ¦¬μ€νΈ

λΉ Array μ μΈ λ°©λ²
```Swift
var numbers: Array<Int> = Array<Int>()
var numbers: [Int] = []
var numbers = [Int]()
```

κ° μΆκ°
```Swift
numbers.append(1)
numbers.append(2)
numbers.append(3)
```

νΉμ  μΈλ±μ€μ κ° μΆκ°
```Swift
numbers.insert(4, at: 2)
```

νΉμ  μΈλ±μ€μ κ° μ­μ 
```Swift
numbers.remove(at: 0)
```

νΉμ  μΈλ±μ€ κ° νμΈ
```Swift
numbers[0]
```

### Dictionary
μμμμ΄ ν€(Key)μ κ°(Value) ν μμΌλ‘ λ°μ΄ν°λ₯Ό μ μ₯νλ μ»¬λ μ νμ

λΉ Dictionary μ μΈ λ°©λ²
```Swift
var dic: Dictionary<String, Int> = Dictionary<String, Int>()
var dic: [String:Int] = [:]
```

ν€μ κ° μΆκ°
```Swift
dic["κΉμ² μ"] = 3
dic["κΉλ―Όμ§"] = 5
```

μ΄λ―Έ μ‘΄μ¬νλ ν€μ κ° λ³κ²½
```Swift
dic["κΉλ―Όμ§"] = 6
```

νΉμ  ν€ μ­μ 
```Swift
dic.removeValue(forKey: "κΉλ―Όμ§")
```

### Set
κ°μ λ°μ΄ν° νμμ κ°μ μμμμ΄ μ μ₯νλ λ¦¬μ€νΈ
(μ€λ³΅ λ°μ΄ν°λ₯Ό νμ©νμ§ μμ)

λΉ Set μ μΈ λ°©λ² (μΆμ½ λ¬Έλ²μ νμ©νμ§ μμ)
```Swift
var set: Set = Set<Int>()
```

κ° μΆκ°
```Swift
set.insert(10)
set.insert(20)
set.insert(30)
set.insert(30)
set.insert(30)
```
μ€λ³΅ κ°μ νμ©νμ§ μκΈ° λλ¬Έμ κ°μ κ°μ μ¬λ¬λ² μΆκ°ν΄λ νλλ§ μ‘΄μ¬νλ κ²μ νμΈν  μ μλ€.

κ° μ­μ 
```Swift
set.remove(20)
```