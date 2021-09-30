---
emoji: 🐻
title: Bounds와 Frame의 차이
date: '2021-09-30'
author: woo0dev
tags: iOS Bounds Frame
categories: 블로그
---

# Bounds와 Frame

Bounds와 Frame의 차이를 공부하기 전에 먼저 Bounds와 Frame이 뭔지 알아보자

Bounds와 Frame은 UIView의 instance property다.

Bounds와 Frame 둘 다 CGRect Type이기 때문에 origin과 size를 가진 사각형으로 그려진다.

### Frame
- SuperView(상위뷰)의 좌표시스템 안에서 View의 origin과 size를 나타낸다.  
여기서 상위뷰란 한단계 상위뷰를 의미한다.

예를 들어 Frame으로 정의된 View의 origin이나 size를 출력하면 해당 View의 상위뷰 origin과 size가 출력된다. 또한 origin과 size를 수정했을 때도 마찬가지로 상위뷰의 origin과 size가 수정된다.

### Bounds
- View의 위치와 크기를 자기 자신의 좌표시스템안에서 origin와 size를 나타낸다.

예를 들어 Bounds로 정의된 View의 origin이나 size를 출력하면 해당 View의 origin과 size가 출력된다. 여기서 origin의 defualt 값은 (0,0)이다.  
그렇기 때문에 origin이나 size를 수정했을 때 해당 View의 origin을 상위뷰 기준이 아닌 자기 자신을 기준으로 수정되기 때문에 해당 View 안에 다른 View가 있다면 마치 Scroll View처럼 보이게 된다. 실제로 Scroll View의 핵심이다.