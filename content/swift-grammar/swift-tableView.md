---
emoji: 🐻
title: Swift UITableView
date: '2022-09-23'
author: woo0dev
tags: iOS Swift UIKit UITableView TableView
categories: iOS
---

## UITableView?
데이터들 목록 형태로 보여줄 수 있는 가장 기본적인 UI 컴포넌트
- 여러 개의 Cell을 가지고 있고 하나의 열과 여러 줄의 행을 지니고 있으며, 수직으로만 스크롤이 가능하다.
- 섹션을 이용해 행을 그룹화하여 콘텐츠를 좀 더 쉽게 탐색할 수 있습니다.
- 섹션의 헤더와 푸터에 View를 구성하여 추가적인 정보를 표시할 수 있습니다.

Delegate - TableView의 시각적인 부분을 설정하고, 행의 액션 관리, AccessoriesView 지원과 TableView의 개별 행 편집을 도와준다.
View가 변경되는 사항을 Delegate가 담당하고 View는 Delegate에 의존하여 View를 업데이트 함.
DataSource - TableView를 생성하고 수정하는데 필요한 정보를 TableView 객체에 제공
그렇기 때문에 TableView는 Delegate와 DataSource의 정의에 따라 TableView를 사용자에게 어떻게 표시할 것인지 결정하는데  DataSource에는 섹션의 개수, 섹션의 행 개수, 어떤 정보를 표시할 것인지 등을 정의할 수 있고, Delegate는 행의 높이, 행 클릭 이벤트 등을 정의할 수 있다.

### UITableViewDataSource 메서드
**필수 메서드**
각 세션에 표시할 행의 개수를 묻는 메서드
- `[func tableView(UITableView, numberOfRowsInSection: Int) -> Int](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614931-tableview)`

특정 인덱스 Row의 Cell에 대한 정보를 넣어 Cell을 넣어 변환하는 메서드
- `[func tableView(UITableView, cellForRowAt: IndexPath) -> UITableViewCell](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614861-tableview)`

**옵션 메서드**
총 섹션 개수를 구하는 메서드
- `[func numberOfSections(in: UITableView) -> Int](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614860-numberofsections)`

특정 섹션의 헤더 타이틀을 묻는 메서드
- `[func tableView(UITableView, titleForHeaderInSection: Int) -> String?](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614850-tableview)`

특정 섹션의 푸터 타이틀을 묻는 메서드
- `[func tableView(UITableView, titleForFooterInSection: Int) -> String?](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614994-tableview)`

특정 위치의 행이 편집 가능한지 묻는 메서드
- `[func tableView(UITableView, canEditRowAt: IndexPath) -> Bool](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614900-tableview)`

특정 위치의 행을 재정렬할 수 있는 메서드
- `[func tableView(UITableView, canMoveRowAt: IndexPath) -> Bool](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614927-tableview)`

TableView 섹션 인덱스 타이틀을 묻는 메서드
- `[func tableView(UITableView, sectionForSectionIndexTitle: String, at: Int) -> Int](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614933-tableview)`

인덱스에 해당하는 섹션을 알려주는 메서드
- `[func sectionIndexTitles(for: UITableView) -> [String]?](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614857-sectionindextitles)`

스와이프 모드, 편집 모드에서 버튼을 선택하면 호출되는 메서드(행의 변경사항을 Commit 해야 함)
- `[func tableView(UITableView, commit: UITableViewCell.EditingStyle, forRowAt: IndexPath)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/1614871-tableview)`

### UITableViewDelegate 메서드
Delegate는 필수 메서드는 없다.
행이 선택되었을 때 호출되는 메서드
- `[func tableView(UITableView, didSelectRowAt: IndexPath)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614877-tableview)`

행이 선택 해제되었을 때 호출되는 메서드
- `[func tableView(UITableView, didDeselectRowAt: IndexPath)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614916-tableview)`

특정 위치 행의 높이를 묻는 메서드
- `[func tableView(UITableView, heightForRowAt: IndexPath) -> CGFloat](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614998-tableview)`

지정된 섹션의 headerView 또는 footerView에 표시할 View가 어떤 건지 묻는 메서드
- `[func tableView(UITableView, viewForHeaderInSection: Int) -> UIView?](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614901-tableview)`
- `[func tableView(UITableView, viewForFooterInSection: Int) -> UIView?](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614946-tableview)`

지정된 섹션의 headerView 또는 footerView의 높이를 묻는 메서드
- `[func tableView(UITableView, heightForHeaderInSection: Int) -> CGFloat](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614855-tableview)`
- `[func tableView(UITableView, heightForFooterInSection: Int) -> CGFloat](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614967-tableview)`

TableView가 편집 모드에 들어갔을 때 호출되는 메서드
- `[func tableView(UITableView, willBeginEditingRowAt: IndexPath)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614907-tableview)`

TableView가 편집 모드에서 빠져나왔을 때 호출되는 메서드
- `[func tableView(UITableView, didEndEditingRowAt: IndexPath?)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614963-tableview)`

TableView가 셀을 사용하여 행을 그리기 직전에 호출되는 메서드
- `[func tableView(UITableView, willDisplay: UITableViewCell, forRowAt: IndexPath)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614883-tableview)`

TableView로부터 셀이 화면에 사라지면 호출되는 메서드
- `[func tableView(UITableView, didEndDisplaying: UITableViewCell, forRowAt: IndexPath)](https://developer.apple.com/documentation/uikit/uitableviewdelegate/1614870-tableview)`