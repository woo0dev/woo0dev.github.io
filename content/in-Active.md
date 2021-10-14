---
emoji: 🐻
title: 앱이 In-Active 상태가 되는 시나리오
date: '2021-10-12'
author: woo0dev
tags: iOS In-Active
categories: iOSgit
---

# 앱이 In-Active 상태가 되는 시나리오를 설명하시오.

## Foreground
In-Active와 Active를 합쳐서 Foreground라고 한다.

## In-Activeg
App이 실행 중이지만 이벤트를 받지 않는 상태

## 시나리오
- 사용자가 앱을 실행했을 때
    * Not Running -> In-Active -> Active
- 앱 실행 도중 홈 버튼을 눌렀을 때
    * Active -> In-Active -> Background
- 앱을 다시 켰을 때
    * Background -> Active
- 앱이 백그라운드에 있다가 Suspended 상태로 전이
    * Active -> In-Active -> Background -> Suspended