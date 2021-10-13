---
emoji: 🐻
title: NSOperationQueue와 GCD Queue의 차이점
date: '2021-10-13'
author: woo0dev
tags: iOS NSOperationQueue GCD Queue
categories: iOS
---

# NSOperationQueue와 GCD Queue의 차이점

## iOS의 멀티스레딩 방법
- NSOperationQueue : Obj-c 기반의 high-level API
- GCD Queue : C 기반의 row-level API

## NSOperationQueue
- NSOperation 객체의 우선순위 및 준비 상태에 따라 대기열에 있는 객체를 실행한다. Operation Queue에 추가된 작업은 작업이 완료될 때까지 대기열에 남아 있다. 작업이 추가된 후에는 대기열에서 직접 제거할 수 없다.
- 모든 작업이 끝나지 않은 상태에서 Opertion queue를 중지시키면 메모리 릭이 발생할 수 있다.
- GCD에서는 할 수 없는 기능들(재개, 취소, 중지)을 제공하지만 구현이 복잡하고 무겁다.
- NSOperations, NSOperationQueue를 사용할 때 오버헤드가 발생한다.
- KVO(Key-Value Observing) 사용이 가능하다. (GCD는 불가)
    * operations(read only) : 현재 큐에 있는 작업들
    * operationCount(read only) : 현재 큐에 있는 작업의 개수
    * maxConcurrentOperationCount(readable and writable) : 큐에서 동시에 실행할 수 있는 작업의 최대 개수
    * suspended(readable and writable) : 실행 작업을 적극적으로 스케줄링하고 있는지 여부에 대한 Boolean 값
    * name(readable and writable) : operationQueue의 이름
- 작업 간의 의존성
    * 어떤 작업을 다른 작업이 성공적으로 수행된 후에 실행할 수 있게 하는 작업의 계층을 만들 수 있다.  


## GCD(Grand Central Dispatch) Queue (Dispatch Queue)
- 동시성 모델을 매우 간단하게 사용할 수 잇는 low-level C 기반 API
- 앱의 메인 스레드 또는 백그라운드 스레드에서 작업의 실행을 직렬 또는 동시에 관리하는 객체이다.
- 작업 항목을 동기 또는 비동기적으로 예약한다.
    * 동기적 : 여러가지 작업을 순서대로 실행한다.
    * 비동기적 : 모든 동기 작업이 완료되기 전에 추가 스레드의 작업을 비동기로 실행해서 작업을 병렬적으로 수행하는 방식이다.
- 메인 큐에서 작업 항목을 동기적으로 실행하면 교착 상태가 발생할 수 있다.