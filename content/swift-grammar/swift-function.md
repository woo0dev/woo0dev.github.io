---
emoji: 🐻
title: Swift 함수란?
date: '2021-12-01'
author: woo0dev
tags: iOS Swift 함수
categories: iOS
---

# 함수란?
함수는 작업의 가장 작은 단위이자 코드의 집합이다.

함수 사용 방법
```Swift
func 함수명(파라미터 이름: 데이터 타입) → 반환타입 {
	return 반환 값
}
```

함수 사용 예시
```Swift
func sum(a: Int, b: Int) -> Int {
    return a+b
}
sum(a: 5, b: 3)
```

매개변수가 없는 함수
```Swift
func hello() -> String {
    return "hello"
}
hello()
```

반환 값이 없는 함수
```Swift
func printName() -> Void {

}
```

매개변수에 기본값이 주어지는 함수
```Swift
func greeting(friend: String, me: String = "Woo") {
    print("Hello, \(friend)! I'm \(me)")
}
greeting(friend: "Albert")
```

전달인자 레이블을 사용하는 함수
```Swift
func sendMessage(from myName: String, to name: String) -> String {
    return "Hello \(name)! I'm \(myName)"
}
sendMessage(from: "Woo", to: "Json")
```
전달인자 레이블을 사용하면 사용자 입장에서 매개변수의 역할을 조금 더 명확하게 해줄 수 있다.

```Swift
func sendMessage(_ name: String) -> String {
    return "Hello \(name)"
}
sendMessage("woo")
```
전달인자 레이블을 사용하지 않기 위해서는 위처럼 파라미터 이름 앞에 언더바를 붙여주면 함수를 사용할 때 파라미터 이름을 쓰지 않아도 된다.

가변 매개변수 사용 함수
```Swift
func sendMessage(me: String, friends: String...) -> String {
    return "Hello \(friends)! I'm \(me)"
}
sendMessage(me: "Woo", friends: "Json", "Albert", "Stella")
```
위처럼 가변 매개변수를 사용할 매개변수 타입 뒤에 ...을 붙이면 해당 매개변수는 가변 매개변수가 된다.
가변 매개변수로 전달받은 값은 배열의 형태로 넘어오는 것을 확인할 수 있다.
주의할 점은 가변 매개변수는 함수 당 하나만 선언이 가능하다.

참고
https://fastcampus.co.kr/dev_online_iosappfinal