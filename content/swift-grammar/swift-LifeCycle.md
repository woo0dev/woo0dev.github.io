---
emoji: 🐻
title: Swift ViewController Life Cycle
date: '2022-09-17'
author: woo0dev
tags: iOS Swift ViewController Life Cycle
categories: iOS
---

### Life Cycle
- Appearing
뷰가 화면에 나타나는 중
- Appeard
뷰가 화면에 나타나는게 완료된 상태
- Disappearing
뷰가 화면에서 사라지는 중
- Disappeared
뷰가 화면에서 사라진 상태

### viewDidLoad()
- 뷰 컨트롤러의 모든 뷰들이 메모리에 로드됐을 때 호출
- 메모리에 처음 로드될 때 한 번만 호출
- 보통 딱 한번 호출될 행위들을 이 메소드 안에 정의 함
- 뷰와 관련된 추가적인 초기화 작업, 네트워크 호출

### viewWillAppear()
- 뷰가 뷰 계층에 추가되고, 화면에 보이기 직전에 매 번 호출
- 다른 뷰로 이동했다가 돌아오면 재호출
- 뷰와 관련된 추가적인 초기화 작업

### viewDidAppear()
- 뷰 컨트롤러의 뷰가 뷰 계층에 추가된 후 호출됩니다.
- 뷰를 나타낼 때 필요한 추가 작업
- 애니메이션을 시작하는 작업

### viewWillDisappear()
- 뷰 컨트롤러의 뷰가 뷰 계층에서 사라지기 전에 호출됩니다.
- 뷰가 생성된 뒤 작업한 내용을 되돌리는 작업
- 최종적으로 데이터를 저장하는 작업

### viewDidDisappear()
- 뷰 컨트롤러의 뷰가 뷰 계층에서 사라진 뒤에 호출
- 뷰가 사라지는 것과 관련된 추가 작업