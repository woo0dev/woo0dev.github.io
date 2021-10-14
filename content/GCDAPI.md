---
emoji: 🐻
title: GCD API의 동작 방식과 필요성
date: '2021-10-14'
author: woo0dev
tags: iOS GCD API
categories: iOS
---

# GCD(Grand Central Dispatch)란?
Background에서 Thread를 관리하면서 동시적으로 작업을 실행시키는 낮은 수준의 API를 제공하는 라이브러리이며,멀티 코어 프로세서 시스템에 대한 응용 프로그램 지원을 최적화하기 위해 Apple에서 개발한 기술이다.

### GCD의 동작 방식
작업단위는 Block(Swift에서는 Closure)이라 불리며, DispatchQueue가 이 Block들을 관리한다.
GDC는 각 어플리케이션에서 생성된 DispatchQueue를 읽는 멀티코어 실행엔진을 가지고 있으며, 이것이 Queue에 등록된 각 작업을 꺼내 Thread에 할당하고 개발자는 내부 동작을 자세히 알 필요 없이 Queue에 작업을 넘기기만 하면 되서, Thread를 직접 생성하고 관리하는 것에 비해 관리 용이성과, 이식성, 성능 증가하게 되었습니다.
Apple 공식 문서에서도 Thread 대신 GCD를 권장한다.  

### DispatchQueue
- GCD는 App이 Block 객체 형태로 작업을 전송할 수 있는 FIFO Queue를 제공하고 관리한다.
- Queue에 전달된 작업은 시스템이 전적으로 관리하는 Thread pool에서 실행된다.
- DispatchQueue는 2개의 Type(Serial / Concurrent)으로 구분되며 둘 모두 FIFO 순서로 처리된다.
- App을 실행하면 시스템이 자동으로 MainThread 위에서 작동하는 Serial Queue를 만들어서 작업을 수행하고, 그 외에 추가적으로 여러 개의 Concurrent Queue를 만들어서 Queue를 관리한다.
- 각 작업은 동기(sync) 방식과 비동기(async) 방식으로 실행 가능하지만 Serial Queue에서는 async만 사용 가능하다.  

#### Serial Queue
- Serial Queue는 Queue에 추가된 순서대로 한번에 하나의 task를 실행한다.  

#### Concurren Queue
- Concurrent Queue는 동시에 하나 이상의 task를 실행하지만 Queue에 추가됐을 때에 추가된 순서대로 작업을 계속 진행한다.