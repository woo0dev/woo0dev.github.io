---
emoji: 🐻
title: Swift SwiftUI란?
date: '2022-09-25'
author: woo0dev
tags: iOS Swift SwiftUI
categories: iOS
---

# SwiftUI
### UIKit과 SwiftUI의 차이점
UIKit - 명령형
SwiftUI - 선언형

SwiftUI의 View
State가 Input으로 들어가고 함수 과정을 거쳐 View가 출력되는 형식

### @State, @ObservableObject
| @State | @ObsevableObject |
| --- | --- |
| View-local | External |
| Value Type | Reference Type |
| Framework Managed | Developer Managed |

### SwiftUI의 Data Flow
User Interaction을 통해 어떠한 Action이 발생하면 이러한 Action의 변화는 @State (상태)를 변화시키고 그에 대한 Update가 이루어지고 View에 반영되고 나면 Render 과정을 통해 User에게 보여진다.

### Container View
Stack : View를 배치할 때 사용한다.
- VStack : 수직
- HStack : 수평
- ZStack : 3차원
- LazyStack
    - LazyVStack
    - LazyHStack
Grid
List
Form