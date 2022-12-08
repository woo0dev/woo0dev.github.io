---
emoji: 🐻
title: Swift URL?
date: '2022-12-08'
author: woo0dev
tags: iOS Swift URL URLSession
categories: iOS
---

# URL

## OSI(Open Systems Interconnection) Model

네트워크 7계층

오늘은 OSI 중 Session에 대해 알아본다.

## URL(Uniform Resource Locator)Session

Apple에서 제공하는 API

서버와 데이터를 주고 받기 위해서는 꼭 잘 알고 사용해야 하는 API이다.

### HTTP에서 제공하는 Request Method

- Get 식별된 데이터 가져오기
- Post 새 데이터 추가
- Put 식별된 기존의 데이터 수정(업데이트)
- Patch Put과 동일하지만 데이터의 일부를 수정
- Delete 식별된 데이터 삭제
- Head Get과 동일하지만 메세지 헤더만 반환
- Connect 프락시 기능 요청
- Options 웹서버에서 지원하는 메소드 확인
- Trace 원격 서버 테스트용 메세지 확인

### Response

Status Code

- 1xx: 정보 전달 - Request  수신, 진행 중
- 2xx: 성공 - Request 성공적으로 수신, 해석, 승인
- 3xx: 리다이렉션
- 4xx: 클라이언트 에러
- 5xx: 서버 에러

### URLSession

iOS를 포함한 Apple Platform에서 네트워크 통신을 구축하려면 꼭 사용해야 한다.

HTTP를 포함한 OSI 7계층의 프로토콜들을 지원하고 네트워크 인증, 쿠키, 캐시 관리 같은 서버와의 데이터 교류 작업 전반을 지원한다.

URL 로딩 시스템 구현

URL 로딩 시스템이란?

URL을 통해서 상호작용하고 표준 인터넷 프로토콜(ex. http)을 사용해서 서버와 통신하는 시스템을 의미한다.

URLSession은 URL 로딩 시스템을 바탕으로 해서 사용자나 특정 앱에서 만든 사용자 지정 프로토콜을 사용해서 URL형태로 식별되는 Resource에 대한 Access를 제공한다.

이러한 데이터 읽기는 비동기로 수행되기 때문에 앱이 응답을 유지하고 반환 데이터가 도착하는 즉시 처리할 수 있게 된다.

### URLSessionConfiguration

캐시 및 쿠키를 사용하는 방법, 셀룰러 네트워크 허용 여부 등 동작을 제어하는 객체를 만들게 된다.

- .default - shared와 비슷하지만 데이터를 점진적으로 가져오는 것과 같이 추가 기능을 설정할 수 있다.
- .ephemeral - shared와 비슷하지만 캐시, 쿠기, 자격 증명 등을 디스크를 쓰지 않는다.
- .background - 앱이 백그라운드에 있을 때 업로드, 다운로드를 할 수 있다.

### URLSession Singleton

URLSession.shared

### URLSessionTask

- URLSessionDataTask - NSData 객체를 사용해서 데이터를 송수신한다.
- URLSessionUploadTask - DataTask와 유사하지만 파일을 전송하고 앱이 백그라운드에 있을 때 업로드를 지원한다.
- URLSessionDownloadTask - DataTask와 유사하지만 파일을 검색하고 앱이 백그라운드에 있을 때 다운로드를 지원한다.
- URLSessionStreamTask
- URLSessionWebSocketTask