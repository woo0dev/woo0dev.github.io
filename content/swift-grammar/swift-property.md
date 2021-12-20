---
emoji: 🐻
title: Swift 프로퍼티(Property)
date: '2021-12-20'
author: woo0dev
tags: iOS Swift 프로퍼티
categories: iOS
---

# Property(프로퍼티)  

## 프로퍼티의 종류
- 저장 프로퍼티
- 연산 프로퍼티
- 타입 프로퍼티

#### 저장 프로퍼티
저번에 클래스의 인스턴스는 참조타입이고 구조체의 인스턴스는 값타입이라고 했었는데 때문에 클래스는 클래스의 인스턴스가 상수로 선언되어도 클래스 내의 프로퍼티가 변수로 선언되었다면 값을 변경할 수 있지만, 구조체는 구조체의 인스턴스가 상수로 선언되면 구조체의 인스턴스 내의 프로퍼티가 변수로 선언되어도 값을 변경할 수 없다.  

구조체 예시
```swift
struct Dog {
    var name: String // 저장 프로퍼티
    let gender: String
}
var dog = Dog(name: "Woo", gender: "Male")
print(dog)
dog.name = "Dooboo"
let dog2 = Dog(name: "Woo", gender: "Female")
dog2.name = "Dooboo" // 에러
```

클래스 예시
```swift
class Cat {
    var name: String
    let gender: String
    init(name: String, gender: String) {
        self.name = name
        self.gender = gender
    }
}
let cat = Cat(name: "json", gender: "Male")
cat.name = "Woo"
print(cat.name)
```

연산 프로퍼티
저장 프로퍼티는 클래스나 구조체에서만 사용 가능했지만 연산 프로퍼티는 클래스, 구조체, 열거형에서 사용 가능하다. 연산 프로퍼티는 값을 직접적으로 저장하지 않는 대신에 getter와 setter를 사용해서 다른 프로퍼티와 값들에 직접적으로 접근할 수 있다. (getter만 쓰고 setter를 쓰지 않으면 읽기 전용 프로퍼티로 사용할 수 있다.)

```swift
struct Stock {
    var averagePrice: Int
    var quantity: Int
    var purchasePrice: Int {
        get {
            return averagePrice * quantity
        }
        set(newPrice) { // 매개변수 이름을 쓰지 않으면 default로 설정되어 있는 매개변수 이름인 newValue로 사용할 수 있다.
            averagePrice = newPrice / quantity
        }
    }
}
var stock = Stock(averagePrice: 2300, quantity: 3)
print(stock)
stock.purchasePrice // 6900
stock.purchasePrice = 3000
stock.averagePrice // 1000 purchasePrice의 변경으로 averagePrice가 변경됨
```

프로퍼티 옵저버
프로퍼티 옵저버는 프로퍼티 값의 변화를 감지하고 반영한다.
새로운 값이 기존 값과 같아도 프로퍼티 옵저버는 호출된다.
프로퍼티 옵저버는 세가지 경우에만 사용 가능하다.
1. 저장 프로퍼티
2. 오버라이딩된 저장, 연산 프로퍼티

프로퍼티 옵저버 사용 예시
```swift
class Account {
    var credit: Int = 0 {
        // 소괄호 이름 지정
        willSet {
            print("잔액이 \(credit)원에서 \(newValue)원으로 변경될 예정입니다.")
        }
        didSet {
            print("잔액이 \(oldValue)원에서 \(credit)원으로 변경되었습니다.")
        }
    }
}
var account = Account()
account.credit = 1000
```
willSet은 값이 변경되기 직전에 실행되는 코드를 작성할 수 있고 didSet은 값이 변경된 후에 실행되는 코드를 작성할 수 있다.

타입 프로퍼티
```swift
struct SomeStructure {
    static var storedTypeProperty = "Some value." // 스토어
    static var computedTypeProperty: Int { //컴퓨티드
        return 1
    }
}
SomeStructure.storedTypeProperty
SomeStructure.computedTypeProperty
```
타입 프로퍼티는 위와 같이 저장 프로퍼티와 연산 프로퍼티에서 사용 가능하며 static 키워드를 사용합니다. 타입 프로퍼티는 인스턴스를 생성하지 않아도 프로퍼티에 접근하여 사용할 수 있다. 변경도 가능하다.