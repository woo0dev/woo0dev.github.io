---
emoji: ๐ป
title: Swift Inheritance(์์)
date: '2021-12-22'
author: woo0dev
tags: iOS Swift ์์ Inheritance
categories: iOS
---

# ์์(Inheritance)์ด๋?
๋ถ๋ชจ๊ฐ ์์์๊ฒ ์ฌ์ฐ์ ๋ฌผ๋ ค์ฃผ๋ ํ์
๋ณดํต ๋ถ๋ชจํด๋์ค๊ฐ ์์ํด๋์ค์๊ฒ ๊ธฐ๋ฅ์ ๋ฌผ๋ ค์ฃผ๋ ํ์๋ผ๊ณ  ๋ณด๋ฉด ๋๋ค.

### ํด๋์ค ์ข๋ฅ
- ๋ถ๋ชจํด๋์ค(SuperClass)
- ์์ํด๋์ค(SubClass)
- ๊ธฐ๋ณธํด๋์ค(BasicClass)
์์์์ด ํ์์ ์ฐ๋ ํด๋์ค๋ค์ BasicClass๋ผ๊ณ  ๋ณผ ์ ์๋ค.

### ์ฌ์ฉ๋ฒ
class ํด๋์ค ์ด๋ฆ: ๋ถ๋ชจํด๋์ค ์ด๋ฆ {
    ํ์ํด๋์ค ์ ์
}

### ์์
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
์์ ๊ฐ์ด VehicleClass๋ฅผ ์์๋ฐ์ BicycleClass ์ธ์คํด์ค๋ VehicleClass์ ํ๋กํผํฐ์ ์ ๊ทผํ์ฌ ๊ฐ์ ํ์ธ ๋ฐ ๋ณ๊ฒฝ์ด ๊ฐ๋ฅํ ๊ฒ์ ๋ณผ ์ ์๋ค.

## ์ค๋ฒ๋ผ์ด๋ฉ
์์๋ฐ๋ ๋ถ๋ชจํด๋์ค์ ์๋ ํจ์์ ๊ฐ์ ์ด๋ฆ์ ํจ์๋ฅผ ๋ง๋ค ๋ ์ฌ์ฉํ๋ค.

### ์์
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
์์ ๊ฐ์ด SuperClass์ ์๋ makeNoiseํจ์์ ์ด๋ฆ์ด ๊ฐ์ ํจ์๋ฅผ Train์์ ์ ์ํ  ๋ override ํค์๋๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ์ ์ด๋ฆ์ ํจ์๋ฅผ ๋ง๋ค ์ ์๋ค. ๋ง์ฝ ์ค๋ฒ๋ผ์ด๋ฉ์ ํ ํ์ SubClass์์ SuperClass์ ์ ์๋์ด ์๋ ํจ์๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ๋ค๋ฉด ์๋ ์ฝ๋์ ๊ฐ์ด super ํค์๋๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.
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

#### ํ๋กํผํฐ ์ค๋ฒ๋ผ์ด๋ฉ
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
์์ ๊ฐ์ด ํ๋กํผํฐ์๋ override ํค์๋๋ฅผ ์ฌ์ฉํ๋ฉด ๊ฐ์ ์ด๋ฆ์ ํ๋กํผํฐ๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
์ค๋ฒ๋ผ์ด๋ฉ๋ ํ๋กํผํฐ์ ํ๋กํผํฐ ์ต์ ๋ฒ ์ถ๊ฐํ๊ธฐ

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
์์ ๊ฐ์ด ์ค๋ฒ๋ผ์ด๋ฉ๋ ํ๋กํผํฐ ์์ ํ๋กํผํฐ ์ต์ ๋ฒ๋ฅผ ์ถ๊ฐํ์ฌ ์ฌ์ฉํ  ์ ์๋ค. ํ์ง๋ง ์์ ํ๋กํผํฐ๋ read only ํ๋กํผํฐ์๋ ํ๋กํผํฐ ์ต์ ๋ฒ๋ฅผ ์ถ๊ฐํ  ์ ์๋ค. ๊ทธ ์ด์ ๋ ์์ ํ๋กํผํฐ๋ read only ํ๋กํผํฐ๋ ๊ฐ์ ๋ณ๊ฒฝํ  ์ ์๊ธฐ ๋๋ฌธ์ด๋ค.
ํ๋กํผํฐ๋ ํจ์๋ฅผ ์ ์ํ  ๋ final ํค์๋๋ฅผ ์ฌ์ฉํ๋ฉด ํด๋น ํ๋กํผํฐ๋ ํจ์๋ฅผ ์ค๋ฒ๋ผ์ด๋ฉํ  ์ ์๋ค.