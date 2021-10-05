---
emoji: 🐻
title: iOS App 상황별 Delegate Method
date: '2021-10-05'
author: woo0dev
tags: iOS Delegate
categories: iOS
---

### 애플리케이션이 실행된 직후 사용자의 화면에 보여지기 직전에 호출
```Swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool
```

### 애플리케이션이 최초 실행될 때 호출되는 메소드
```Swift
func application(_ application: UIApplication, willFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool
```

### 애플리케이션이 InActive 상태로 전환되기 직전에 호출  task 일시정지, 타이머 비활성화, 일시정지(게임)
```Swift
func applicationWillResignActive(_ application: UIApplication)
```

### 애플리케이션이 백그라운드 상태로 전환된 직후 호출
```Swift
func applicationDidEnterBackground(_ application: UIApplication)
```

### 애플리케이션이 Active 상태가 되기 직전, 화면에 보여지기 직전에 호출
```Swift
func applicationWillEnterForeground(_ application: UIApplication)
```

### 애플리케이션이 Active 상태로 전환된 직후 호출
```Swift
func applicationDidBecomeActive(_ application: UIApplication)
```

### 애플리케이션이 종료되기 직전에 호출
```Swift
func applicationWillTerminate(_ application: UIApplication)
```