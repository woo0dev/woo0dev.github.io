---
emoji: 🐻
title: Swift 반복문
date: '2021-12-04'
author: woo0dev
tags: iOS Swift 반복문
categories: iOS
---

# 반복문이란?
반복적으로 코드가 실행되게 만드는 구문.

반복문 구문
- for-in
사용 방법
for 루프상수 in 순회대상 {
    실행구문
}
루프상수는 반복문 내에서만 사용가능하다.

범위 연산자를 사용한 예시)
```Swift
for i in 1...4 {
    print(i)
}
```

배열을 사용한 예시)
```Swift
let array = [1,2,3,4,5]
for i in array {
    print(i)
}
```

- while
사용 방법
while 조건식 {
    실행구문
}

예시)
```Swift
var number = 5
while number < 10 {
    number+=1
}
```
5가 들어있었던 변수 number가 10보다 작을 때만 1을 더하는 while문이다.

- repeat-while (다른 언어의 do-while)
조건을 충족하지 못하더라도 무조건 한 번이상 실행되는 반복문.
사용 방법
repeat {
    실행구문
} while 조건식

예시)
```Swift
var x = 6
repeat {
    x+=2
} while x < 6
print(x)
```
x는 6이고 조건은 6보다 작을 때 실행되도록 하였지만 repeat-while문은 무조건 한 번은 실행되기 때문에 8이 출력되는 것을 확인할 수 있다.