---
emoji: 🐻
title: Swift AutoLayout과 StoryBoard
date: '2022-01-23'
author: woo0dev
tags: iOS Swift AutoLayout StoryBoard
categories: iOS
---

# Auto Layout & StoryBoard

## Auto Layout이란?
제약 조건(Constraints)을 이용해서 뷰의 위치를 지정하는 것  
여러 해상도에서 같은 화면을 제공하기 위해 사용한다.

## Outlet
Outlet 변수는 Storyboard에 등록한 UIObject에 접근하여 컨트롤하기 위해 변수에 바인딩한 UIObject 변수이다.  
Outlet 변수를 생성할 때 Storage를 설정하는데 Strong은 다른 곳에서 참조하고 있으면 삭제가 불가능하고 Week는 다른 곳에서 참조하고 있어도 임의적으로 삭제가 가능하다.  Strong은 메모리 누수가 발생할 수 있다.

## Action
Action 함수는 동작을 정의하는 함수로 어떤 동작을 할 수 있도록 정의하고 연결시켜주는 역할을 한다. 예를 들어 버튼.