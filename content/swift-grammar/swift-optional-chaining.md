---
emoji: ๐ป
title: Swift ์ต์๋ ์ฒด์ด๋
date: '2021-12-30'
author: woo0dev
tags: iOS Swift ์ต์๋ ์ฒด์ด๋
categories: iOS
---

# ์ต์๋ ์ฒด์ด๋์ด๋?
์ต์๋์ ์ํด ์๋ nil ์ผ์ง๋ ๋ชจ๋ฅด๋ ํ๋กํผํฐ, ๋ฉ์๋, ์๋ธ์คํฌ๋ฆฝ์ ๋ฑ์ ๊ฐ์ ธ์ค๊ฑฐ๋ ํธ์ถํ  ๋ ์ฌ์ฉํ  ์ ์๋ ์ผ๋ จ์ ๊ณผ์ 

### ์์
```swift
struct Developer {
    let name: String
}
struct Company {
    let name: String
    var developer: Developer?
}
var developer = Developer(name: "han")
var company = Company(name: "woo", developer: developer)
print(company.developer)
print(company.developer.name) // error
print(company.developer?.name) // Optional("han")
print(company.developer!.name) // han
```
Company ๊ตฌ์กฐ์ฒด ์์ nil์ด ํ ๋น๋  ์ ์๋ Developerํ์ ์ต์๋ ๋ณ์ developer๋ฅผ ์ ์ธํ๊ณ  ํด๋น ๊ฐ์ ๊บผ๋ด์ฌ ๋๋ ํญ์ ์ต์๋ ๋ฐ์ธ๋ฉ์ ํด์ผํ๋ค. ์ต์๋ ์ฒด์ด๋์ ํ  ๋ ?๋ฅผ ์ฐ๋ฉด ๊ฐ์ด nil์ผ ์๋ ์๊ธฐ ๋๋ฌธ์ ์ต์๋์ ๊ฐ์ผ์ฑ๋ก ์ถ๋ ฅ์ด ๋๊ณ , !๋ฅผ ์ฐ๋ฉด ์ต์๋์ ๊ฐ์ ๋ก ํด์ ํ์ฌ ์ถ๋ ฅ๋๋ค. (๊ฐ์  ํด์  ๋ฐฉ๋ฒ์ ๋๋๋ก ์ฐ์ง ์๋ ๊ฒ์ด ์ข๋ค. nil์ผ ๋ ์๋ฌ ๋ฐ์.)