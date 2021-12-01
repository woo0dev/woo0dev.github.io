---
emoji: 🐻
title: Swift Collection Type
date: '2021-12-01'
author: woo0dev
tags: iOS Swift Collection
categories: iOS
---

# 컬렉션 타입(Collection Type)이란?
컬렉션 타입은 데이터들의 집합 묶음이다.
Swift에는 3개의 컬렉션 타입이 존재하는데 Array, Dictionary, Set이다.

### Array
데이터 타입의 값들을 순서대로 저장하는 리스트

빈 Array 선언 방법
```Swift
var numbers: Array<Int> = Array<Int>()
var numbers: [Int] = []
var numbers = [Int]()
```

값 추가
```Swift
numbers.append(1)
numbers.append(2)
numbers.append(3)
```

특정 인덱스에 값 추가
```Swift
numbers.insert(4, at: 2)
```

특정 인덱스의 값 삭제
```Swift
numbers.remove(at: 0)
```

특정 인덱스 값 확인
```Swift
numbers[0]
```

### Dictionary
순서없이 키(Key)와 값(Value) 한 쌍으로 데이터를 저장하는 컬렉션 타입

빈 Dictionary 선언 방법
```Swift
var dic: Dictionary<String, Int> = Dictionary<String, Int>()
var dic: [String:Int] = [:]
```

키와 값 추가
```Swift
dic["김철수"] = 3
dic["김민지"] = 5
```

이미 존재하는 키의 값 변경
```Swift
dic["김민지"] = 6
```

특정 키 삭제
```Swift
dic.removeValue(forKey: "김민지")
```

### Set
같은 데이터 타입의 값을 순서없이 저장하는 리스트
(중복 데이터를 허용하지 않음)

빈 Set 선언 방법 (축약 문법을 허용하지 않음)
```Swift
var set: Set = Set<Int>()
```

값 추가
```Swift
set.insert(10)
set.insert(20)
set.insert(30)
set.insert(30)
set.insert(30)
```
중복 값을 허용하지 않기 때문에 같은 값을 여러번 추가해도 하나만 존재하는 것을 확인할 수 있다.

값 삭제
```Swift
set.remove(20)
```