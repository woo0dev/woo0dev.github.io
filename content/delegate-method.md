---
emoji: π»
title: iOS App μν©λ³ Delegate Method
date: '2021-10-05'
author: woo0dev
tags: iOS Delegate
categories: iOS
---

### μ νλ¦¬μΌμ΄μμ΄ μ€νλ μ§ν μ¬μ©μμ νλ©΄μ λ³΄μ¬μ§κΈ° μ§μ μ νΈμΆ
```Swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool
```

### μ νλ¦¬μΌμ΄μμ΄ μ΅μ΄ μ€νλ  λ νΈμΆλλ λ©μλ
```Swift
func application(_ application: UIApplication, willFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool
```

### μ νλ¦¬μΌμ΄μμ΄ InActive μνλ‘ μ νλκΈ° μ§μ μ νΈμΆ  task μΌμμ μ§, νμ΄λ¨Έ λΉνμ±ν, μΌμμ μ§(κ²μ)
```Swift
func applicationWillResignActive(_ application: UIApplication)
```

### μ νλ¦¬μΌμ΄μμ΄ λ°±κ·ΈλΌμ΄λ μνλ‘ μ νλ μ§ν νΈμΆ
```Swift
func applicationDidEnterBackground(_ application: UIApplication)
```

### μ νλ¦¬μΌμ΄μμ΄ Active μνκ° λκΈ° μ§μ , νλ©΄μ λ³΄μ¬μ§κΈ° μ§μ μ νΈμΆ
```Swift
func applicationWillEnterForeground(_ application: UIApplication)
```

### μ νλ¦¬μΌμ΄μμ΄ Active μνλ‘ μ νλ μ§ν νΈμΆ
```Swift
func applicationDidBecomeActive(_ application: UIApplication)
```

### μ νλ¦¬μΌμ΄μμ΄ μ’λ£λκΈ° μ§μ μ νΈμΆ
```Swift
func applicationWillTerminate(_ application: UIApplication)
```