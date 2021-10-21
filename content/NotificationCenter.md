---
emoji: 🐻
title: NotificationCenter 동작 방식과 활용 방안
date: '2021-10-21'
author: woo0dev
tags: iOS NotificationCenter
categories: iOS
---

# Notification
Notification Center를 통해 등록된 모든 Observer에게 정보를 브로드캐스트하는 컨테이너.

# NotificationCenter 동작 방식
특정 객체가 NotificationCenter에 등록된 Event를 발생시키면 해당 Event를 처리할 것이라고 등록된 Observer들이 Event에 대한 행동을 취하는 것이 NotificationCenter가 동작하는 방식이다. 이렇게 특정 객체가 Event를 발생시키는 것을 Post라고 한다.

- Listener (observer) : notifications를 감지
- Sender : 필요할 때 notifications 를 보내주는 역할
- itself : notification center 그 자체.

Observer가 관찰 시작 → 작업이 발생하면 Sender가 Post → Observer selector 실행