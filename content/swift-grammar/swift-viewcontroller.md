---
emoji: 🐻
title: Swift ViewController
date: '2022-01-16'
author: woo0dev
tags: iOS Swift ViewController
categories: iOS
---

# ViewController

# UIView?
애플 문서에는 화면의 직사각형 영역에 대한 내용을 관리하는 개체라고 명시되어 있다. 화면을 구성하는 요소의 기본 클래스라고 생각하면 된다.  
UIView는 위치와 크기를 갖는 사각형으로 배경색을 가지고있고, 문자나 이미지 등의 컨텐츠를 갖는 것이 가능하다.

## ViewController
앱의 근간을 이루는 객체로 모든 앱은 최소한 하나 이상의 뷰 컨트롤러를 가지고 있다.  
사용자가 화면을 보는 것에 대한 관리 기능을 제공한다.

### ViewController의 주요 역할
- 데이터 변화에 따라서 view 컨텐츠를 업데이트
- view들과 함께 사용자 상용작용에 응답
- view를 리사이징하고 전체적인 인터페이스의 레이아웃 관리
- 다른 뷰 컨트롤러들과 함께 앱을 구성한다.