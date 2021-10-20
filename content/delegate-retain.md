---
emoji: 🐻
title: Delegate란 무언인가 설명하고, retain 되는지 안되는지 그 이유를 함께 설명하시오.
date: '2021-10-20'
author: woo0dev
tags: iOS delegate retain
categories: iOS
---

# Delegate란?
Delegate 란 하나의 객체가 모든 일을 처리하는 것이 아니라 처리해야 할 일 중 일부를 다른 객체에게 위임하는 것이다.
객체의 행동을 단순화 시키고 객체간 결합성을 최소화하는 장점이 있다.

# Retain
Retain cycle은 메모리가 해제되지 않고 유지되어 누수가 생기는 현상을 말하며 두 객체간의 참조가 강한 순환참조가 생겨 메모리에서 해제되지 않는 현상이다.
따라서 Delegate 또한 객체간의 참조가 이루어 지기 때문에 retain cycle 현상이 발생할 수 있다.