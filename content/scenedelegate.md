---
emoji: ๐ป
title: SceneDelegate๋?
date: '2021-10-09'
author: woo0dev
tags: iOS SceneDelegate
categories: iOS
---

# SceneDelegate๋?

SceneDelegate๋ Xcode11๋ถํฐ iOS App ํฌํ๋ฆฟ ์์ฑ ์ ์๋์ผ๋ก ์ถ๊ฐ๋๋ค. iOS13 ์ด์๋ถํฐ๋ SceneDelegate๊ฐ AppDelegate์ ์ผ๋ถ ์ญํ ์ ๋ด๋นํ๋ค. ์ฌ๊ธฐ์ ์ค์ํ ์ ์ window์ ๊ฐ๋์ด Scene ๊ฐ๋์ผ๋ก ๋์ฒด๋๋ค๋ ๊ฒ์ด๋ค. ์ฑ์ ๋ ์ด์์ Scene์ด ์์ ์ ์์ผ๋ฉฐ, ์ฑ์ ์ฌ์ฉ์ ์ธํฐํ์ด์ค ๋ฐ ์ฝํ์ธ ์ ๋ฐฐ๊ฒฝ์ผ๋ก ์ฌ์ฉ๋๋ค. Scene์ด ์๋ ํ๋์ ์ฑ์ ๊ฐ๋ ๊ฐ๋์ iOS ๋ฐ iPadOS์์ ๋ค์ค ์ฐฝ์ฑ์ ๋น๋ํ  ์ ์์ต๋๋ค.  

์๋์ผ๋ก ์์ฑ๋๋ SceneDelegate์๋ active, resign and disconnect์ ๊ฐ์ ์น์ํ ๋ผ์ดํ์ฌ์ดํด์ด๋ฒคํธ๊ฐ ์์ต๋๋ค.
SceneDelegate๋ delegate๋ฅผ ์ฌ์ฉํ๋ฉฐ ์ผ๋ฐ์ ์ผ๋ก ๋ชจ๋  ์ฅ๋ฉด์ ์๋ตํ๋ค๋ ์ ์ ์ ์ํด์ผํฉ๋๋ค. ํ๋์ Delegate๋ฅผ ์ ์ํ์ฌ ์ฑ์ ๋ชจ๋  Scene์์ ์ฌ์ฉํฉ๋๋ค.  

## SceneDelegate์ ์๋ ํจ์๋ค
```Swift
scene(_: willConnectTo : options :)
```
SceneDelegate์์ ๊ฐ์ฅ ์ค์ํ ํจ์์ด๋ค. iOS 12์ application (_ : didFinishLaunchingWithOptions :) ํจ์์ ์ ์ฌํ๋ค. scene์ด ์ฑ์ ์ถ๊ฐ๋  ๋ ํธ์ถ๋๋ค.

```Swift
sceneDidDisconnect(_:)
```
scene์ ์ฐ๊ฒฐ์ด ํด์ ๋  ๋ ํธ์ถ๋๋ค. ์ฐ๊ฒฐ์ ๋ค์ ์ฐ๊ฒฐ๋  ์๋ ์๋ค.

```Swift
sceneDidBecomeActive(_:)
```
app switcher์์ ์ ํ๋๋ ๋ฑ scene๊ณผ ์ํธ์์ฉ์ด ์์๋  ๋ ํธ์ถ๋๋ค.

```Swift
sceneWillResignActive(_:)
```
์ฌ์ฉ์๊ฐ scene๊ณผ์ ์ํธ์์ฉ์ ์ค์งํ  ๋ ํธ์ถ๋๋ค.

```Swift
sceneWillEnterForeground(_:)
```
scene์ด ํฌ๊ทธ๋ผ์ด๋๋ก ์ง์ํ  ๋ ํธ์ถ๋๋ค.

```Swift
sceneDidEnterBackground(_:)
```
scene์ด ๋ฐฑ๊ทธ๋ผ์ด๋๋ก ์ง์ํ ๋ ํธ์ถ๋๋ค.  


