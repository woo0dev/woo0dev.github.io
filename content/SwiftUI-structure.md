---
emoji: 🐻
title: SwiftUI 시작하기
date: '2021-11-24'
author: woo0dev
tags: iOS Swift SwiftUI
categories: iOS
---

# SwiftUI란?
공식사이트에서는 "SwiftUI는 최소한의 코드만으로 Swift의 성능을 사용하여 모든 Apple 플랫폼에서 사용할 수 있는 앱을 개발 가능하다" 라고 나오지만 어떤 것인지 더 자세히 공부하기 위해 포스팅을 해보려고 한다.

먼저 SwiftUI는 UIKit 위에서 빌드되는 프레임워크로 선언형 방식의 구조를 가지고 있다.
SwiftUI 프로젝트를 생성하면 SceneDelegate.swift, ContentView.swift, Preview Content라는 폴터가 생기는데 이것들은 무엇일까.

SceneDelegate는 멀티 윈도우 같은 기능을 지원하기 위해 Delegate이다. AppDelegate와는 달리 각 화면의 인스턴스 단위로 작동시킬 수 있다.

ContentView는 제일 먼저 출력되는 View로 SceneDelegate에 Scene 메서드에 선언되어 있다.

Preview Content는 Xcode에서 Simulator 없이 미리보기 화면을 제공하는 Canvas기능에서 사용되는 데이터들을 위한 Assets이다.

```Swift
import SwiftUI

struct ContentView: View {
    
    var body: some View {
        
    }
}
```
프로젝트 생성시 자동으로 생성되는 ContentView의 모습이다.
SwiftUI가 선언되어 있고 ContentView라는 구조체가 선언되어 있는 모습을 확인할 수 있다. 이 구조체는 View를 상속받아 View의 역할을 한다는 것을 알 수 있다.
조금 특이한 것은 some이라는 키워드인데 특정한 조건을 만족하는 제네릭 타입의 View라고 한다.
SwiftUI의 View에는 반드시 body 변수가 있어야하며 최상위 View 역할을 한다.
