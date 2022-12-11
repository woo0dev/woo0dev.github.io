---
emoji: 🐻
title: Swift UITableView?
date: '2022-12-12'
author: woo0dev
tags: iOS Swift UITableView
categories: iOS
---

# UITableView?

- 여러 개의 Cell을 가지고 있고 하나의 열과 여러 줄의 행을 지니고 있으며, 수직으로만 스크롤이 가능하다.
- 섹션을 이용해 행을 그룹화하여 콘턴츠를 더 쉽게 탐색할 수 있다.
- 섹션의 헤더와 푸터에 View를 구성하여 추가적인 정보를 표시할 수 있습니다.

### UITableViewDelegate

TableView의 시각적인 부분을 설정하고, 행의 Action 관리, AccessoryView 지원 그리고 TableView의 개별 행 편집을 도와준다.

Optional 함수

- didSelectRowAt: 행이 선택되었을 때 호출되는 메서드
- didEdselectRowAt: 행 선택이 해제되었을 때 호출되는 메서드
- heightForRowAt: 특정 위치 행의 높이를 묻는 메서드
- viewForHeaderInSection, viewForFooterInSection: 지정된 Section의 HeaderView, FooterView에 표시할 View가 어떤 건지 묻는 메서드
- heightForHeaderInSection, heightForFooterInSection: 지정된 Section의 HeaderView, FooterView의 높이를 묻는 메서드
- willBeginEditingRowAt: TableView가 편집 모드로 들어갔을 때 호출되는 메서드
- didEndEditingRowAt: TableView가 편집 모드에서 빠져 나왔을 때 호출되는 메서드
- willDisplay: TableView가 Cell을 사용하여 행을 그리기 직전에 호출되는 메서드
- didEndDisplaying: TableView로부터 Cell이 화면에 사라지면 호출되는 메서드

### UITableViewDatasource

TableView를 생성하고 수정하는데 필요한 정보를 TableView 객체에 제공

필수로 구현해야 하는 함수

- numberOfRowsOnSection: 각 Section에 표시할 행의 개수를 리턴하는 메서드
- cellForRowAt: 특정 index Row의 Cell에 대한 정보를 넣어 Cell을 반환하는 메서드

Optional 함수

- numberOfSections: 총 Section 개수를 묻는 메서드
- titleForHeaderInSection: 특정 Section의 Header Title을 묻는 메서드
- titleForFooterInSection: 특정 Section의 Footer Title을 묻는 메서드
- canEditRowAt: 특정 위치의 행이 편집 가능한지 묻는 메서드
- canMoveRowAt: 특정 위치의 행을 재정렬 할 수 있는지 묻는 메서드
- sectionIndexTitles: TableView Section Index Title을 묻는 메서드
- sectionForSectionIndexTitle: Index에 해당하는 Section을 알려주는 메서드
- editingStyle: 스와이프 모드, 편집 모드에서 버튼을 선택하면 호출되는 메서드(특정 메서드에서는 행에 변경사항을 Commit 해야 함)
- moveRowAt: 행이 다른 위치로 이동되면 어디에서 어디로 이동했는지 알려주는 메서드