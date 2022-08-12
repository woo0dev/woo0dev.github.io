---
emoji: 🐻
title: Swift(UIKit)의 화면 전환 개념
date: '2022-07-25'
author: woo0dev
tags: iOS Swift 화면전환 뷰전환
categories: iOS
---

# Swift(UIKit)의 화면 전환 개념
## Content View Controller

화면을 구성하는 뷰를 직접 구현하고 관련된 이벤트를 처리하는 뷰 컨트롤러

## Container view Controller

- 하나 이상의 Child View Controller를 가지고 있다.
- 하나 이상의 Child View Controller를 관리하고 레이아웃과 화면 전환을 담당한다.
- 화면 구성과 이벤트 관리는 Child View Controller에서 한다.
- Container View Controller는 대표적으로 Navigation Controller와 TabBar Controller가 있다.

### UINavigationController란?

계층구조로 구성된 Content를 순차적으로 보여주는 Container View Controller

### Navigation Stack

기본적으로 LIFO(Last Input First Output)구조를 가지고 있다.

# 화면 전환 방법

## 화면 전환 방법

- 소스코드를 통해 전환하는 방식
- Storyboard를 통해 전환하는 방식

## 세분화된 화면 전환 방법

- View Controller의 View 위에 다른 View를 가져와 바꿔치기
- View Controller에서 다른 View Controller를 호출하여 전환하기
- Navigation Controller를 사용하여 화면 전환하기
- 화면 전환용 객체 세그웨이(Segueway)를 사용하여 화면 전환하기

View Controller의 View 위에 다른 View를 가져와 바꿔치기하는 방법은 메모리 누수가 발생할 확률이 크기 때문에 되도록이면 사용하지 않는 것이 좋다.

### View Controller에서 다른 View Controoler를 호출하여 전환하기

```swift
func present(_ viewControllerToPresent: UIViewController, 
    animated flag: Bool, 
  completion: (() -> Void)? = nil)
```

사용 방법은 다음과 같다. 첫번째 파라미터에는 전환할 화면의 ViewController 인스턴스를 넣어주고 두번째 파라미터에는 화면을 전환할 때 애니메이션 효과를 줄 건지를 Bool 값으로 넣어주면 된다. 세번째 파라미터에는 completion이라는 클로저를 전달 받고 있는데 여기서 클로저를 작성해주면 화면이 전환되는 시점에 맞춰 해당 클로저가 호출된다. 화면 전환은 비동기 방식으로 처리되기 때문에 화면 전환이 완료된 이후에 코드로 처리해야 하는 로직이 있다면 completion에 클로저를 작성하여 활용하면 된다.

present방식을 사용하면 화면 전환 후 전 화면으로 이동하는 버튼이 따로 없기 때문에 아래 함수를 사용하여 처리해주어야 한다.

```swift
func dismiss(animated flag: Bool, 
  completion: (() -> Void)? = nil)
```

dismiss 함수는 이전 화면으로 이동하는 함수이기 때문에 별도로 ViewController를 명시하지 않아도 되고, 나머지 파라미터는 present와 같은 방식으로 사용하면 된다.

### Navigation Controller를 사용하여 화면 전환하기

```swift
func pushViewController(_ viewController: UIViewController, 
               animated: Bool) // 화면 전환 함수
																// viewController : 전환할 화면의 ViewController 인스턴스
																// animatied : 화면 전환 시 애니메이션 사용 여부
func popViewController(animated: Bool) -> UIViewController? // 이전 화면으로 돌아가는 함수
																														// animated : 이전 화면으로 돌아갈 때 애니메이션 사용 여부
```

Navigation Controller는 ViewController의 화면 전환을 직접 컨트롤하고 App의 Navigation 정보를 표시하는 역할을 할 뿐만 아니라 Navigation Stack으로 자식 ViewController를 관리한다. Navigation Stack은 FILO 방식으로 나중에 들어온 화면이 제일 먼저 나가는 방식이다.

pushViewcontroller를 사용해 Navigation Stack을 추가하고 popViewController를 사용하여 Navigation Stack에 있는 화면을 제거한다.

### 화면 전환용 객체 세그웨이(Segueway)를 사용하여 화면 전환하기

Storyboard에서 출발지와 목적지를 직접 지정하는 방식을 Segueway를 이용한 화면 전환이라고 한다. Segueway를 사용하면 따로 코드를 작성하지 않고 Storyboard만으로 화면을 전환할 수 있는게 특징이다.

세그웨이의 종류에는 Action Segueway와 Manual Segueway가 있다. 출발지가 ViewController 자체인 경우를 Menual Segueway라고 하며 출발지가 버튼, 셀 등인 경우 Action Segueway라고 한다. Action Segueway는 버튼 터치와 같은 트리거 이벤트가 Segueway로 바로 연결된다. 그래서 소스코드를 추가하지 않아도 화면 전환 기능을 구현할 수 있다. Menual Segueway는 적절한 시점에 performSegue라는 메서드를 호출하면서 Segueway가 실행되어 화면 전환이 일어난다.

### Action Segueway 종류

- Show : 가장 일반적인 Segueway로 NavigationController를 사용하면 화면 전환시 ViewController가 Navigation Stack에 쌓이게 되고 만약 NavigationController를 사용하지 않는 경우에는 ViewController가 present된다.
- Show Detail : SplitView에서 사용되는 Segueway로 아이폰에서 사용하면 Show Segueway Action과 똑같이 동작하지만 아이패드에서 사용하게 되면 Split 구조에 masterslave 구조가 돼서 보이게 된다.
- Present Modally : 이전 ViewController를 덮으면서 새로운 화면이 나타나게 된다. present 방식과 유사하게 동작한다.
- Present As Popover : 아이패드에서 사용되는 것으로 팝업창을 띄울 때 사용한다. 아이폰에서 사용되지 않는 Action Segueway이다.
- Custom : Segueway를 사용자가 원하는 방식으로 지정하여 사용한다.