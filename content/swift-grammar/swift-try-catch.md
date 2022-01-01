---
emoji: 🐻
title: Swift try-catch 에러처리
date: '2022-01-01'
author: woo0dev
tags: iOS Swift 에러처리 try catch
categories: iOS
---

# 에러 처리란?
프로그램 내에서 에러가 발생한 상황에 대해 대응하고 이를 복구하는 과정

### Swift 에러 처리
- 발생(throwing)
- 감지(catching)
- 전파(propagating)
- 조작(manipulating)

에러 발생시키는 방법 throw
```swift
enum PhoneError: Error {
    case unknown
    case batteryLow(batteryLevel: Int)
}

throw PhoneError.batteryLow(batteryLevel: 20)
```
throw 키워드를 사용하면 에러를 발생시켜 에러를 확인할 수 있다.

### 예시
```swift
func checkPhoneBatteryStatus(batteryLevel: Int) throws -> String {
    guard batteryLevel != -1 else { throw PhoneError.unknown }
    guard batteryLevel > 20 else { throw PhoneError.batteryLow(batteryLevel: batteryLevel) }
    return "배터리 상태가 정상입니다."
}
```
핸드폰의 배터리 상태를 리턴하는 함수이다.
위 함수와 do-catch, try?, try!를 사용하여 에러를 처리할 수 있다.

### do-catch
사용법
```swift
do {
	try 오류 발생 가능 코드
} catch 오류 패턴 {
	처리 코드
}
```

예시
```swift
do {
    try checkPhoneBatteryStatus(batteryLevel: 20)
} catch PhoneError.unknown {
    print("알 수 없는 에러입니다.")
} catch PhoneError.batteryLow(let batteryLevel) {
    print("배터리 전원 부족 남은 배터리 : \(batteryLevel)%") // 배터리 전원 부족 남은 배터리 : 20% 출력
} catch {
    print("그 외 오류 발생 : \(error)")
}
```

### try?
예시
```swift
let status = try? checkPhoneBatteryStatus(batteryLevel: -1)
print(status) // nil
let status = try? checkPhoneBatteryStatus(batteryLevel: 30)
print(status) // Optional("배터리 상태가 정상입니다.")
```
위 코드와 같이 try?를 사용하여 에러 처리를 할 수 있는데 에러가 발생했다면 nil을 할당하고 에러가 발생하지 않았다면 옵셔널에 감싸져 출력되게 된다.

### try!
```swift
let status2 = try! checkPhoneBatteryStatus(batteryLevel: 30)
print(status2) // 배터리 상태가 정상입니다.
```
try!를 사용할 땐 에러가 절대 발생하지 않을 때만 사용해야 한다. 만약 try!를 썼을 때 에러가 발생한다면 런타임에러가 발생하며 프로그램이 종료된다.