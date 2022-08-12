---
emoji: 🐻
title: Set vertical hugging priority to 252 에러
date: '2022-07-15'
author: woo0dev
tags: iOS Swift Error Resolution
categories: iOS
---

# Set vertical hugging priority to 252 에러

### Set vertical hugging priority to 252 에러 - Auto Layout을 활용하여 Constraints를 설정할 때 생기는 에러
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-1.png">
UIFramework에서 제공되는 일부 View에는 컨텐츠 고유 사이즈라는 개념이 있다.

예를 들어 UILabel, UIButton 등 텍스트나 이미지에 따라 크기가 결정되는 View들은 다른 View들과 걸린 제약에 의해서 본래 컨텐츠 고유 사이즈보다 더 늘어나거나 줄어들게 되는데 이 때 더 늘어나게 되는 것에 대해 저항하는 제약을 Content Hugging이라고 하고 더 줄어들게 되는 것에 저항하는 제약을 Content Compression Resistance라고 한다.

컨텐츠 고유 사이즈 변경에 대한 제약에도 우선순위가 있는데 이 우선순위에 따라 컨텐츠 고유 사이즈보다 더 늘어나게 되었을 때 사이즈를 늘어나게 할 건지 줄어들게 할 건지 정할 수 있다.

위 에러가 발생했을 때는 hugging priority를 설정하는 것으로 에러를 해결할 수 있다.

hugging priority는 우선순위가 높으면 내 크기를 유지하고 우선순위가 낮으면 크기가 늘어난다.
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-2.png">

여기서는 위에 라벨의 크기가 늘어나도록 하기 위해 위에 라벨을 선택하여 vertical hugging prioriry를 250으로 낮춰서 에러를 해결했다.
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-3.png">

vartical hugging priority를 낮췄기 때문에 세로 크기가 변한 것을 확인할 수 있다.

참고로 priority 값은 1부터 1000까지의 값을 가질 수 있는데 보통 250, 500, 750, 1000과 같이 설정하여 사용하는 경우가 많다.

### Set vertical compression resistance priority to 749 에러
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-4.png">
compression resistance priority 에러를 일부러 발생시켜 보았다.

라벨에 엄청 긴 텍스트를 넣었더니 에러가 발생했다. 위에 에러와 같이 Content Compression Resistance prioriry를 변경해주면 해결된다. 지금은 아래 라벨 크기를 고정하기 위해 아래 라벨의 compression resistance vertical을 1000으로 설정해 해결했다.
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-5.png">
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-6.png">