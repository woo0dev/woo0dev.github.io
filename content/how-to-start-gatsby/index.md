---
emoji: 🐻
title: Gatsby 테마로 GitHub Blog 만들기
date: '2021-09-25'
author: woo0dev
tags: 블로그 github-pages gatsby
categories: git
---

### 내가 블로그를 시작하게 된 계기는 개발이 아닌 관련 공부를 할 때 정리를 하고 싶어서 여러가지 블로그를 찾아보다가 현재 사용중인 GitHub와 연동하여 사용할 수 있는 블로그 라이브러리인 Gatsby를 알게 되어 만들게 되었다.

### Gatsby로 블로그를 만들기 위해 처음에는 관련 테마를 찾아보고 맘에 드는 테마를 적용하여 만들기로 했다.

### 이제부터 내가 Gatsby 블로그를 만드는 과정을 소개한다.

1. 원하는 테마의 Gatsby Clone
2. Repository 생성(Repository명은 꼭 [GitHubID].github.io)
3. Your old repository’s clone URL에 getsby 테마의 repository url 넣기
4. cd [Repository 주소] 
   npm install
5. npm install gh-pages --save-dev
6. npm run deploy
7. git branch gh-pages
8. Setting-Pages-Source Branch를 gh-pages로 설정
9. git branch develop
10. develop branch를 defualt로 설정
11. git checkout develop
12. gatsby-meta-config.js에서 블로그에 대한 정보 및 메인화면에 표시될 정보 수정
13. content 폴더 안에 새 폴더 및 index.md 파일 생성
14. index.md 파일에서 Markdown으로 글 작성
15. git add .
16. git commit -m 'commit message'
17. git push
18. git push --set-upstream origin develop
19. git pull
20. git checkout gh-pages
21. git merge develop



### Gatsby를 활용해 블로그를 만들면서 GitHub에 대해 더 공부하는 시간이 되어 유익했고, 블로그 글을 Readme.md처럼 마크다운으로 작성하고 실제 url로 확인하는 과정도 흥미로웠다. 앞으로 공부하는 내용들 위주로 블로그 글을 작성해보려고 한다.





출처 : https://github.com/zoomKoding