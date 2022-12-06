---
emoji: 🐻
title: SwiftUI @State, @Binding, @ObservedObject
date: '2021-11-24'
author: woo0dev
tags: iOS State Binding, ObserverdObject
categories: iOS
---

## 프로퍼티 래퍼(Property Wrapper)란 무엇인가?
프로퍼티 래퍼는 Swift5.1부터 추가된 어노테이션으로 사용자가 별도의 코딩 없이 어노테이션만 선언해도 뷰에서 수정이나 읽기가 가능하도록 캡슐화를 대신해준다. 변수 앞에 $를 붙이면 프로퍼티 래퍼 자체를 받기 때문에 WrapperValue 자체를 변경할 수 있다.

## @State란 무엇인가?
@State 변수에 변화가 일어나면 View를 다시 그려준다. 하지만 private하기 때문에 View의 body안에서만 접근해야한다. 따라서 현재 화면에서 잠깐 사용할 목적으로 사용하는 것이 적합하다.
@State 변수는 Heap에 할당되고 View에는 포인터만 있는 방식으로 되어있다. 그렇기 때문에 변화가 감지되면 새로운 View로 포인터를 옯기는 방식으로 View의 상태를 저장하고 변경한다.

## @Binding이란 무엇인가?
@State 변수에 $를 붙여서 사용할 수 있다. 위에서 말했듯이 WrapperValue 자체를 변경한다.
예를들면 @State 변수를 만들고 다른 View에 @Binding 변수를 만들고 @State변수에 $를 붙여 @Binding 변수와 연결되어있는 상태에서 @Binding 변수의 값을 바꾸면 @State 변수의 값도 같이 변하는 방식이다. 즉 @Binding은 다른 어딘가에 연결되어있는 값을 말한다.

## @ObservedObject란 무엇인가?
대부분 ViewModel을 선언할 때 사용하는 프로퍼티래퍼이다.
ObservableObject 프로토콜을 준수하는 타입에 사용할 수 있다.
ObservableObject 프로토콜을 준수하면 objectWillChange.send() 라는 함수가 생기는데 이 함수를 호출하면 View를 다시 그려준다.
@Published를 사용하면 선언된 변수가 변경되면 자동으로 뷰를 다시 그리도록 사용할 수 있다. 쉽게 말해 ViewModel에서 변경사항이 생기면 View를 다시 그려주도록 사용이 가능하다.

## @StateObject
ObservedObject의 단점을 보완한 iOS14에서 추가된 기능
차이점은 ObservedObject는 View의 LifeCycle에 의존하여 View가 새로 그려질 때 새로 생성될 수 있지만 StateObject는 View가 새로 그려질 때 State처럼 새로 그려지지 않고 참조를 가지고 있어서 새로 생성되지 않는다.(View의 LifeCycledp 의존하지 않는다.)
새로 생성될 때 데이터가 유실될 수 있고, ViewModel이 생성될 때 작업이 많다면 성능이 비효율적이다.