---
emoji: 🐻
title: Swift 옵셔널과 옵셔널 바인딩
date: '2021-12-15'
author: woo0dev
tags: iOS Swift 옵셔널 바인딩
categories: iOS
---

# 옵셔널이란?
값이 있을 수도 있고 없을 수도 있다.

예시)
```swift
var name: String = ""
```
```swift
var name: String? = nil
```
이 두 코드는 얼핏 보기엔 '값이 없는 건 똑같은 거 아니야?'라고 생각할 수 있지만 첫번째 코드는 빈 문자열이 들어있고 두번째 코드는 값이 없는 상태로 둘은 엄연히 다른 코드이다. (nil은 다른 언어에서의 null과 같다.)

```Swift
var name: String?

var optionalName: String? = "Woo"
```
nil을 할당할 수 있는 것을 바로 옵셔널이라고 하는데 위 코드처럼 타입 뒤에 ?를 붙여 사용하면 된다. 옵셔널로 선언된 변수의 초기값을 선언하지 않으면 기본값은 nil이 들어간다. 물론 타입에 맞는 값으로 초기화하여 선언할 수 있다.

주의할 점은 아래와 같이 옵셔널이 아닌 변수에 옵셔널을 할당하려고 하면 에러가 발생한다. 옵셔널 변수에 nil이 아닌 값이 할당되어있는 상태여도 마찬가지이다. 이유는 옵셔널 변수에는 지금 값이 있더라도 언제든지 nil이 할당될 수 있기 때문이다. 옵셔널이 아닌 변수에 nil이 들어가면 에러가 생기는데 그런 상황을 미연에 방지하기 위해서이다.
```Swift
var requireName: String = optionalName // 에러
```

# 옵셔널 바인딩이란?
옵셔널을 해제하는 것

옵셔널 해제 방법
- 명시적 해제
1. 강제 해제 - !
2. 비강제 해제(옵셔널 바인딩) - if let, guard let
예시)
```Swift
var number: Int? = 3
print(number) // Optional(3)
```
```Swift
if let result = number {
    print(result) // 3
}
```
```Swift
print(result!) // 3
```

옵셔널 변수인 number를 일반 변수처럼 출력하면 Optional(3)처럼 옵셔널에 감싸져있는 상태로 출력되는 것을 확인할 수 있고, 옵셔널 바인딩을 사용해 비강제 해제하여 출력된 값과 강제 해제하여 출력된 값을 확인할 수 있다. 여기서 주의할 점은 강제 해제를 시도했을 때 해당 옵셔널 변수가 nil이라면 에러를 발생시키며 프로그램이 강제종료되므로 주의하여 사용해야 한다.  
if let 방식을 사용하여 옵셔널 바인딩 할 때에는 else 구문을 추가해 사용할 수 있다. (else 구문은 옵셔널 변수가 nil일 때 실행된다.)  
또 다른 옵셔널 바인딩에는 guard let 방식이 있다. 아래 코드는 nil이 아닐 때만 guard 구문을 실행하고 nil이면 else문을 실행한 뒤 리턴시키는 함수이다. (guard 구문은 true일 때만 구문을 실행하고 false면 else 구문을 실행한다. guard 구문에 대해서는 추후에 자세히 포스팅 할 예정이다.)

```Swift
func test() {
    let number: Int? = 5
    guard let result = number else { return }
    print(result)
}
test()
```

- 묵시적 해제
1. 컴파일러에 의한 자동 해제
```Swift
let value: Int? = 6
if value == 6 {
        print("value가 6입니다.") // 출력
} else {
        print("value가 6이 아닙니다.")
}
```
위처럼 연산자를 통해 비교를 할 때에는 컴파일러가 옵셔널을 해제한 후에 비교를 한다.

2. 옵셔널의 묵시적 해제
```Swift
let string = "12"
var stringToInt: Int! = Int(string)
stringToInt + 1
```
위 처럼 옵셔널 변수를 선언할 때 !를 붙여 선언하게 되면 해당 변수를 사용할 때 묵시적으로 옵셔널을 해제해준다.