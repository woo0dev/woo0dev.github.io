---
emoji: 🐻
title: Swift UIKit
date: '2022-01-15'
author: woo0dev
tags: iOS Swift UIKit
categories: iOS
---

# UIKit
## 코코아 터치 프레임워크(Cocoa touch Framework)란?
iOS 개발환경을 구축하기 위한 최상위 프레임워크이다. 일반적으로 objectC, Swift에서 상속하여 사용하는 UIKit, Foundation 등을 포함한 대부분의 클래스 객체들이 코코아 터치 프레임워크에 속한다.

### Foundation
가장 기본적인 데이터 타입부터 자료구조, 각종 구조체, 타이머, 네트워크통신, 파일관리 등 기본적인 프로그램의 중심을 담당한다.

### UIKit
UIKit Framework는 사용자의 인터페이스를 관리하고 이벤트를 처리하는게 주 목적인 프레임워크이다. UIKit에서 주로 처리하는 사용자 이벤트로는 제스처 처리, 애니메이션, 그림그리기, 이미지 처리, 텍스트 처리 등이 있다. 또 테이블 뷰, 슬라이더, 버튼, 텍스트필드 등 어플리케이션의 화면을 구성하는 요소도 포함하고 있다.

UIKit App의 구조는 기본적으로 MVC 디자인 패턴을 사용한다.
- Model - 앱의 데이터와 비지니스 로직
- View - UI
- Controller - Model과 View의 중간다리 역할, View에게 사용자 액션을 전달받아 Model에게 어떤 작업을 해야 하는지 알려주거나 Model의 데이터 변화를 View에게 전달하여 View를 어떻게 업데이트 해야 하는지 알려준다.  


Apple의 MVC 디자인 패턴에서는 View와 Controller가 강하게 연결되어 있어 ViewController가 거의 모든 일을 담당하고 View의 LifeCycle에도 관여하고 있어 이 둘을 분리하기가 어렵다. 그래서 프로젝트 규모가 커질 수록 Controller의 크기가 비대해지고 내부 구조는 복잡하게 되어 유지보수가 힘들어진다. 이런 단점을 보완하기 위해 MVVM이나 Viper 패턴 등 다양한 디자인 패턴을 이용한다.