---
emoji: 🐻
title: iOS App 상태별 제약사항
date: '2021-10-02'
author: woo0dev
tags: iOS Foreground Background
categories: iOS
---

# iOS App 상태별 제약사항에 대해 알아보자

1. not Running : 앱이 실행되지 않은 상태  

2. Foreground : App이 실행되어 클라이언트에게 보여지고 있는 상태
    - Inactive : 앱이 실행중이지만 아직 아무런 이벤트를 받지 않은 상태  
(Foreground 상태에서 전화가 왔을 때, 잠금상태, 멀티태스킹 스크린에서는 Inactive 상태를 가진다.)
    - Active : 앱이 실행중이며 현재 이벤트를 받고 있고 발생한 상태

3. Background : 앱이 백그라운드에 있는 상태지만 여전히 실행중인 상태

4. Suspened : 앱이 백그라운드에 있고 실행되는 코드가 없는 상태  
(App은 여전히 메모리에 존재하며 Suspened 상태가 될 당시의 상태를 저장하고 있지만, CPU나 배터리를 소모하지 않습니다. 언제든지 메모리 부족등의 이유로 종료됨.)

## 앱의 상태별 제약사항

___Foreground mode___는 메모리 및 기타 시스템 리소스에 높은 우선순위를 가지며 시스템은 이러한 리소스를 사용할 수 있도록 필요에 따라 background 앱을 종료합니다.  

___Background mode___는 가능한 적은 메모리공간을 사용해야하며 사용자 이벤트를 받기 어렵고 공유 시스템 리소스를 해제하고 이미지 객체 참조 등 메모리 제한한다.  
(가능한 적은 메모리공간 사용은 시스템 리소스 해제, 메모리에서 해제 후 데이터를 디스크에 작성을 말한다.)