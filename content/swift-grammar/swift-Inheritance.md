---
emoji: 🐻
title: Swift Inheritance(상속)
date: '2021-12-22'
author: woo0dev
tags: iOS Swift 상속 Inheritance
categories: iOS
---

# 상속(Inheritance)이란?
부모가 자식에게 재산을 물려주는 행위
보통 부모클래스가 자식클래스에게 기능을 물려주는 행위라고 보면 된다.

### 클래스 종류
- 부모클래스(SuperClass)
- 자식클래스(SubClass)
- 기본클래스(BasicClass)
상속없이 평소에 쓰던 클래스들을 BasicClass라고 볼 수 있다.

### 사용법
class 클래스 이름: 부모클래스 이름 {
    하위클래스 정의
}

### 예시
```swift
class Vehicle {
    var currentSpeed = 0.0
}
class Bicycle: Vehicle {
    var hasBasket = false
}
var bicycle = Bicycle()
bicycle.currentSpeed = 15.0
bicycle.currentSpeed // 15
```
위와 같이 VehicleClass를 상속받은 BicycleClass 인스턴스는 VehicleClass의 프로퍼티에 접근하여 값을 확인 및 변경이 가능한 것을 볼 수 있다.

## 오버라이딩
상속받는 부모클래스에 있는 함수와 같은 이름의 함수를 만들 때 사용한다.

### 예시
```swift
class Vehicle {
    var currentSpeed = 0.0
    var description: String {
        return "traveling at \(currentSpeed) miles per hour"
    }
    func makeNoise() {
        
    }
}
class Train: Vehicle {
    override func makeNoise() {
        print("choo choo")
    }
}
let train = Train()
train.makeNoise() // choo choo
```
위와 같이 SuperClass에 있는 makeNoise함수와 이름이 같은 함수를 Train에서 정의할 때 override 키워드를 사용하여 같은 이름의 함수를 만들 수 있다. 만약 오버라이딩을 한 후에 SubClass에서 SuperClass에 정의되어 있는 함수를 사용하고 싶다면 아래 코드와 같이 super 키워드를 사용하면 된다.
```Swift
class Vehicle {
    var currentSpeed = 0.0
    var description: String {
        return "traveling at \(currentSpeed) miles per hour"
    }
    func makeNoise() {
        print("speaker on")
    }
}
class Train: Vehicle {
    override func makeNoise() {
        super.makeNoise()
        print("choo choo")
    }
}
let train = Train()
train.makeNoise() // speaker on
				// choo choo
```

#### 프로퍼티 오버라이딩
```swift
class Vehicle {
    var currentSpeed = 0.0
    var description: String {
        return "traveling at \(currentSpeed) miles per hour"
    }
    func makeNoise() {
        print("speaker on")
    }
}
class Car: Vehicle {
    var gear = 1
    override var description: String {
        return super.description + " in gear \(gear)"
    }
}

let car = Car()
car.currentSpeed = 30.0
car.gear = 2
print(car.description) // traveling at 30.0 miles per hour in gear 2
```
위와 같이 프로퍼티에도 override 키워드를 사용하면 같은 이름의 프로퍼티를 사용할 수 있다.
오버라이딩된 프로퍼티에 프로퍼티 옵저버 추가하기

```swift
class AutomaticCar: Car {
    override var currentSpeed: Double {
        didSet {
            gear = Int(currentSpeed / 10) + 1
        }
    }
}

let automatic = AutomaticCar()
automatic.currentSpeed = 35.0
print("AutomaticCar: \(automatic.description)") // AutomaticCar: traveling at 35.0 miles per hour in gear 4
```
위와 같이 오버라이딩된 프로퍼티 안에 프로퍼티 옵저버를 추가하여 사용할 수 있다. 하지만 상수 프로퍼티나 read only 프로퍼티에는 프로퍼티 옵저버를 추가할 수 없다. 그 이유는 상수 프로퍼티나 read only 프로퍼티는 값을 변경할 수 없기 때문이다.
프로퍼티나 함수를 정의할 때 final 키워드를 사용하면 해당 프로퍼티나 함수를 오버라이딩할 수 없다.