---
emoji: 🐻
title: iOS 앱을 만들고, User Interface를 구성하는 데 필수적인 프레임워크 이름은 무엇인가?
date: '2021-10-15'
author: woo0dev
tags: iOS App UI UserInterface Framework
categories: iOS
---

# UIKit
UI(User Interface) Kit Framework는 사용자 인터페이스를 관리하고, 이벤트를 처리하는게 주 목적인 Framework이다.
macOS에서는 Application Kit(AppKit) Framework를 사용했었지만 iOS로 넘어오면서 UIKit으로 대체되었다.
UIKit에서 주로 처리하는 사용자 이벤트로는 제스처 처리, 애니메이션, 그림 그리기, 이미지 처리, 텍스트 처리 등이 있다.
또한 테이블뷰, 슬라이더, 버튼, 텍스트 필트, Alert 창 등 Application의 화면을 구성하는 요소도 포함된다.
UIViewController, UIView, UIAlertController 등 앞에 UI가 붙는 클래스들을 사용하려면 반드시 UIKit을 상속해야한다.