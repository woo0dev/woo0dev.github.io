---
emoji: 🐻
title: Swift ContentViewController?
date: '2022-12-10'
author: woo0dev
tags: iOS Swift UIKit
categories: iOS
---

### Content View Controller

- 화면을 구성하는 뷰를 직접 구현하고 관련된 이벤트를 처리하는 View Controller

### Container View Controller

- 하나 이상의 Child View Controller를 가지고 있다.
- 하나 이상의 Child View Controller를 관리하고 레이아웃과 화면 전환을 담당한다.
- 화면 구성과 이벤트 관리는 Child View Controller에서 한다.
- Container View Controller는 대표적으로 Navigation Controller와 TabBar Controller가 있다.

### UINavigationController

- 계층구조로 구성된 content를 순차적으로 보여주는 Container View Controller
- Navigation Stack은 기본적으로 First In Last Out 구조를 가지고 있다.

화면 전환 방법

- View Controller의 View 위에 다른 View를 가져와 바꾸기
    - 메모리 누수 위험이 있기 때문에 지양하는 것이 좋음.
- View Controller에서 다른 View Controller를 호출하여 전환하기
- Navigation Controller를 사용하여 화면 전환하기
- 화면 전환용 객체 세그웨이(Segueway)를 사용하여 화면 전환하기