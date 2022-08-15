---
emoji: 🐻
title: Swift NavigationViewController로 화면 전환하기
date: '2022-08-15'
author: woo0dev
tags: iOS Swift NavigationViewContriller 화면 전환
categories: iOS
---

# NavigationViewController를 사용하여 화면 전환하기
## 방법
- Segue로 Push
- Segue로 Present
- 코드로 Push
- 코드로 Present

## Segue로 Push
1. NavigationViewController를 생성하고 RootViewController와 연결한다.
2. Navigation Controller의 Inspector에서 Is Initial View Controller를 선택해 Navigation Controller를 시작하는 Controller로 지정한다.
3. 화면 전환할 새로운 ViewController를 만들고 코드를 작성할 새로운 ViewController파일을 생성하고 연결한다.
4. 화면 전환을 실행할 임의의 버튼을 만들고 해당 버튼에서 새로운 ViewController로 우클릭 드래그한 후에 Segue Action에서 Show를 선택한다.

이 과정을 거치면 버튼을 눌렀을 때 새로운 화면으로 전환되는 것을 확인할 수 있다.  
만약 새로운 화면에서 기본적으로 생성된 버튼을 제외한 임의의 버튼을 이용해 이전 화면으로 이동하고 싶다면 Button Action을 추가하고 아래 메서드를 사용하면 해당 버튼을 눌렀을 때 이전 화면으로 전환할 수 있다.

```swift
self.navigationController?.popViewController(animated: true)
```

만약 여러개의 화면이 push되어 있는 상태에서 맨 처음 화면으로 전환하고 싶다면 아래 메서드를 사용하면 된다.

```swift
self.navigationController?.popToRootViewController(animated: true)
```

## Segue로 Present

1. NavigationViewController를 생성하고 RootViewController와 연결한다.
2. Navigation Controller의 Inspector에서 Is Initial View Controller를 선택해 Navigation Controller를 시작하는 Controller로 지정한다.
3. 화면 전환할 새로운 ViewController를 만들고 코드를 작성할 새로운 ViewController파일을 생성하고 연결한다.
4. 화면 전환을 실행할 임의의 버튼을 만들고 해당 버튼에서 새로운 ViewController로 우클릭 드래그한 후에 Segue Action에서 Present Modality를 선택한다.

이 과정을 거치면 버튼을 눌렀을 때 새로운 화면이 기존 화면 위에 덮이는 걸 확인할 수 있다. 기본적으로 Modal 형태이기 때문에 FullScreen을 원한다면 SegueObject를 선택하고 오른쪽 Inpector에서 Presentation을 Full Screen으로 변경하면 된다. 새로운 화면에서 Back Button을 구현하기 위해서는 마찬가지로 Button과 Button Action을 생성하고 아래 메서드를 사용하면 된다.

```swift
self.presentingViewController?.dismiss(animated: true, completion: nil)
```