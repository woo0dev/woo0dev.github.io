---
emoji: 🐻
title: Swift UIStackView
date: '2022-09-19'
author: woo0dev
tags: iOS Swift UIStackView
categories: iOS
---

## UIStackView란?
열 또는 행에 View 들의 묶음을 배치할 수 있는 간소화된 인터페이스  
AutoLayout을 사용하면 복잡한 제약조건들을 지정해야하는 반면 UIStackView를 활용하면 간단하게 인터페이스를 배치할 수 있다.  
UIStackView Attribute
- Axis : 인터페이스 정렬 방향(Vertical - 세로, Horizontal - 가로)
- Alignment : StackView의 subView들을 어떤식으로 정렬할지 결정하는 속성(Fill, Leading, Top, First Baseline, Center, Triling, Bottom, Last BaseLine)
- Distribution : StackView 안에 들어가는 뷰들의 사이즈를 어떻게 분배할지 설정하는 속성(Fill, Fill Equally, Fill Proportionally, Equal Spacing, Equal Centering)
- Spacing : StackView 안에 들어가는 View들의 간격을 조정하는 속성