---
emoji: 🐻
title: Swift 옵셔널 체이닝
date: '2021-12-30'
author: woo0dev
tags: iOS Swift 옵셔널 체이닝
categories: iOS
---

# 옵셔널 체이닝이란?
옵셔널에 속해 있는 nil 일지도 모르는 프로퍼티, 메서드, 서브스크립션 등을 가져오거나 호출할 때 사용할 수 있는 일련의 과정

### 예시
```swift
struct Developer {
    let name: String
}
struct Company {
    let name: String
    var developer: Developer?
}
var developer = Developer(name: "han")
var company = Company(name: "woo", developer: developer)
print(company.developer)
print(company.developer.name) // error
print(company.developer?.name) // Optional("han")
print(company.developer!.name) // han
```
Company 구조체 안에 nil이 할당될 수 있는 Developer타입 옵셔널 변수 developer를 선언하고 해당 값을 꺼내올 때는 항상 옵셔널 바인딩을 해야한다. 옵셔널 체이닝을 할 때 ?를 쓰면 값이 nil일 수도 있기 때문에 옵셔널에 감싼채로 출력이 되고, !를 쓰면 옵셔널을 강제로 해제하여 출력된다. (강제 해제 방법은 되도록 쓰지 않는 것이 좋다. nil일 때 에러 발생.)