---
emoji: 🐻
title: Swift closure(클로저)
date: '2022-01-02'
author: woo0dev
tags: iOS Swift closure 클로저
categories: iOS
---

# closure(클로저)란?
코드에서 전달 및 사용할 수 있는 독립 기능 블록이며, 일급 객체의 열할을 할 수 있음

### 일급객체란?
전달 인자로 보낼 수 있고, 변수/상수 등으로 저장하거나 전달할 수 있으며, 함수의 반환 값이 될 수 있다.

### 클로저 표현식
```swift
{ (매개 변수) -> 리턴 타입 in // 클로저 헤드
	실행 구문 // 클로저 바디
}
```
클로저 헤드와 클로저 바디를 구분하기 위해 in 키워드를 사용한다

### 매개 변수와 리턴이 없는 클로저 예시
```swift
let hello = { () -> () in
    print("hello")
}

hello()
```
매개 변수와 리턴이 없다면 공백으로 두고 print를 호출하는 클로저이다. 호출하는 방법은 함수와 동일하게 변수뒤에 소괄호를 붙여 호출할 수 있다.

### 매개 변수와 리턴이 있는 클로저 예시
```swift
let hello2 = { (name: String) -> String in
    return "Hello, \(name)"
}

hello2("woo")
```
클로저를 호출할 때는 파라미터 이름을 적지 않아야한다.

### 클로저를 함수의 매개 변수로 전달하는 예시
```swift
func doSomething(closure: () -> ()) {
    closure()
}

doSomething ( closure: { () -> () in
    print("hello")
})
```
함수의 매개 변수를 클로저로 받도록 하고 함수를 호출할 때 매개 변수에 클로저를 작성하면 된다.

### 클로저를 반환하는 함수 예시
```swift
func doSomething2() -> () -> () {
    return { () -> () in
        print("hello4")
    }
}

doSomething2()()
```

## 후행 클로저
클로저를 여러개 사용하거나 보기 불편할 정도로 길어질 때 후행 클로저를 사용하여 코드를 더 짧게 작성할 수 있다.

### 예시
```swift
doSomething ( closure: { () -> () in
    print("hello")
})

doSomething() {
    print("hello2")
}

doSomething {
    print("hello3")
}
```
보통 두번째 방법으로 사용하지만 매개 변수가 하나인 경우에는 세번째 방법처럼 소괄호도 생략 가능하다. 매개 변수가 여러개인 함수를 호출할 때는 마지막 매개 변수의 클로저만 후행 클로저가 가능하다.

### 문법 경량화
```swift
func doSomething3(closure: (Int, Int, Int) -> Int) {
    closure(1,2,3)
}

doSomething3(closure: { (a, b, c) in
    return a+b+c
})

doSomething3(closure: {
    return $0+$1+$2
})

doSomething3(closure: {
    $0+$1+$2
})

doSomething3() {
    $0+$1+$2
}

doSomething3 {
    $0+$1+$2
}
```
위와 같이 다양한 경량 문법을 사용할 수 있지만 너무 짧게만 코드를 작성하다보면 다른 사람이 이해하기 어려울 수 있으니 주의해서 사용해야겠다.