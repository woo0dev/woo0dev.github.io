---
emoji: 🐻
title: Swift 조건문
date: '2021-12-03'
author: woo0dev
tags: iOS Swift 조건문
categories: iOS
---

# 조건문이란?
주어진 조건에 따라서 어플리케이션을 다르게 동작하도록 하는 것을 말한다.

조건문 구문
- if
사용법
if 조건문1 {
    실행구문
} else if 조건문2 {
    실행구문
} else {
    실행구문
}
예시
```Swift
let animal = "cat"
if animal == "dog" {
    print("강아지")
} else if animal == "cat" {
    print("고양이")
} else {
    print("모름")
}
```
if 구문은 위처럼 사용하게 되는데 조건이 많다면 if-else if-else 방식으로 여러 조건을 사용할 수 있다. 필요하지 않다면 else-if, else는 생략해도 된다.

- switch
사용법
switch 조건대상 {
case 조건1:
    실행구문
case 조건2:
    실행구문
default:
    실행구문
}
case는 조건을 검사하기 위함이고 default는 모든 조건에 해당하지 않았을 때 실행된다.
예시
```Swift
let color = "green"
switch color {
case "red":
    print("빨강")
case "blue":
    print("파랑")
case "green":
    print("초록")
default:
    print("모름")
}
```
switch 구문은 위처럼 사용하게 되는데 여러가지 조건을 검사하기 위해 사용된다.

```Swift
let temperature = 30
switch temperature {
case -20...9:
    print("겨울")
case 10...14:
    print("가을")
case 15...25:
    print("봄")
case 26...35:
    print("여름")
default:
    print("이상기온")
}
```
switch 구문에서 범위 연산자를 사용한 예시.