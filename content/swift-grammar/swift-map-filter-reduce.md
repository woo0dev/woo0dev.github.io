---
emoji: ๐ป
title: Swift ๊ณ ์ฐจํจ์(map, filter, reduce)
date: '2022-01-07'
author: woo0dev
tags: iOS Swift ๊ณ ์ฐจํจ์ map filter reduce
categories: iOS
---

# ๊ณ ์ฐจํจ์๋?
๋ค๋ฅธ ํจ์๋ฅผ ์ ๋ฌ ์ธ์๋ก ๋ฐ๊ฑฐ๋ ํจ์ ์คํ์ ๊ฒฐ๊ณผ๋ฅผ ํจ์๋ก ๋ฐํํ๋ ํจ์

### ์ค์ํํธ์์ ์ ๊ณตํ๋ ๊ณ ์ฐจํจ์
- map
- filter
- reduce

## map
### ์์
```swift
let numbers = [0,1,2,3]
let mapArray = numbers.map { (number) -> Int in
    return number * 2
}
print("map \(mapArray)")
```
๊ธฐ์กด ๋ฐฐ์ด์ ์ด์ฉํด ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ ๋ค.

## filter
### ์์
```swift
let intArray = [10,5,20,13,4]
let filterArray = intArray.filter { $0 > 5 }
print("filter \(filterArray)")
```
๊ธฐ์กด ๋ฐฐ์ด์ ์กฐ๊ฑด์ ๋ง์ง ์๋ ๊ฐ์ ์ญ์ ํด ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ ๋ค.

## reduce
### ์์
```swift
let someArray = [1,2,3,4,5]
let reduceResult = someArray.reduce(0) {
    (result: Int, element: Int) -> Int in
    print("\(result) + \(element)")
    return result + element
}
```
๋ฐฐ์ด์ ๋ชจ๋  ๊ฐ์ ๋ํ๋ ์ฝ๋์ด๋ค. result๋ ๋์  ๊ฐ์ ๋ปํ๊ณ  element๋ ๋ฐฐ์ด ์์๋ฅผ ๋ปํ๋ค.
reduceResult์๋ ๋ฐฐ์ด ์์๋ฅผ ๋ชจ๋ ๋ํ ๊ฐ์ธ 15๊ฐ ์ ์ฅ๋๋ค.