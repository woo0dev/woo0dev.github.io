---
emoji: 🔮
title: Gatsby 테마로 GitHub Blog 만들기
date: '2021-09-25'
author: woo0dev
tags: 블로그 github-pages gatsby
categories: 블로그
---
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
15. git commit -m 'commit message'
16. git push
17. git push --set-upstream origin develop
18. git pull
19. git checkout gh-pages
20. git merge develop