---
emoji: 🐻
title: SceneDelegate란?
date: '2021-10-09'
author: woo0dev
tags: iOS SceneDelegate
categories: iOS
---

# SceneDelegate란?

SceneDelegate는 Xcode11부터 iOS App 탬플릿 생성 시 자동으로 추가된다. iOS13 이상부터는 SceneDelegate가 AppDelegate의 일부 역할을 담당한다. 여기서 중요한 점은 window의 개념이 Scene 개념으로 대체된다는 것이다. 앱에 둘 이상의 Scene이 있을 수 있으며, 앱의 사용자 인터페이스 및 콘텐츠의 배경으로 사용된다. Scene이 있는 하나의 앱을 갖는 개념은 iOS 및 iPadOS에서 다중 창앱을 빌드할 수 있습니다.  

자동으로 생성되는 SceneDelegate에는 active, resign and disconnect와 같은 친숙한 라이프사이클이벤트가 있습니다.
SceneDelegate는 delegate를 사용하며 일반적으로 모든 장면에 응답한다는 점에 유의해야합니다. 하나의 Delegate를 정의하여 앱의 모든 Scene에서 사용합니다.  

## SceneDelegate에 있는 함수들
```Swift
scene(_: willConnectTo : options :)
```
SceneDelegate에서 가장 중요한 함수이다. iOS 12의 application (_ : didFinishLaunchingWithOptions :) 함수와 유사하다. scene이 앱에 추가될 때 호출된다.

```Swift
sceneDidDisconnect(_:)
```
scene의 연결이 해제될 때 호출된다. 연결은 다시 연결될 수도 있다.

```Swift
sceneDidBecomeActive(_:)
```
app switcher에서 선택되는 등 scene과 상호작용이 시작될 때 호출된다.

```Swift
sceneWillResignActive(_:)
```
사용자가 scene과의 상호작용을 중지할 때 호출된다.

```Swift
sceneWillEnterForeground(_:)
```
scene이 포그라운드로 진입할 때 호출된다.

```Swift
sceneDidEnterBackground(_:)
```
scene이 백그라운드로 진입할때 호출된다.  


