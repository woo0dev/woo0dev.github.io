---
emoji: ๐ป
title: Gatsby ํ๋ง๋ก GitHub Blog ๋ง๋ค๊ธฐ
date: '2021-09-25'
author: woo0dev
tags: ๋ธ๋ก๊ทธ github-pages gatsby
categories: git
---

### ๋ด๊ฐ ๋ธ๋ก๊ทธ๋ฅผ ์์ํ๊ฒ ๋ ๊ณ๊ธฐ๋ ๊ฐ๋ฐ์ด ์๋ ๊ด๋ จ ๊ณต๋ถ๋ฅผ ํ  ๋ ์ ๋ฆฌ๋ฅผ ํ๊ณ  ์ถ์ด์ ์ฌ๋ฌ๊ฐ์ง ๋ธ๋ก๊ทธ๋ฅผ ์ฐพ์๋ณด๋ค๊ฐ ํ์ฌ ์ฌ์ฉ์ค์ธ GitHub์ ์ฐ๋ํ์ฌ ์ฌ์ฉํ  ์ ์๋ ๋ธ๋ก๊ทธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ธ Gatsby๋ฅผ ์๊ฒ ๋์ด ๋ง๋ค๊ฒ ๋์๋ค.

### Gatsby๋ก ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋ค๊ธฐ ์ํด ์ฒ์์๋ ๊ด๋ จ ํ๋ง๋ฅผ ์ฐพ์๋ณด๊ณ  ๋ง์ ๋๋ ํ๋ง๋ฅผ ์ ์ฉํ์ฌ ๋ง๋ค๊ธฐ๋ก ํ๋ค.

### ์ด์ ๋ถํฐ ๋ด๊ฐ Gatsby ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋๋ ๊ณผ์ ์ ์๊ฐํ๋ค.

1. ์ํ๋ ํ๋ง์ Gatsby Clone
2. Repository ์์ฑ(Repository๋ช์ ๊ผญ [GitHubID].github.io)
3. Your old repositoryโs clone URL์ getsby ํ๋ง์ repository url ๋ฃ๊ธฐ
4. cd [Repository ์ฃผ์] 
   npm install
5. npm install gh-pages --save-dev
6. npm run deploy
7. git branch gh-pages
8. Setting-Pages-Source Branch๋ฅผ gh-pages๋ก ์ค์ 
9. git branch develop
10. develop branch๋ฅผ defualt๋ก ์ค์ 
11. git checkout develop
12. gatsby-meta-config.js์์ ๋ธ๋ก๊ทธ์ ๋ํ ์ ๋ณด ๋ฐ ๋ฉ์ธํ๋ฉด์ ํ์๋  ์ ๋ณด ์์ 
13. content ํด๋ ์์ ์ ํด๋ ๋ฐ index.md ํ์ผ ์์ฑ
14. index.md ํ์ผ์์ Markdown์ผ๋ก ๊ธ ์์ฑ
15. git add .
16. git commit -m 'commit message'
17. git push
18. git push --set-upstream origin develop
19. git pull
20. git checkout gh-pages
21. git merge develop



### Gatsby๋ฅผ ํ์ฉํด ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋ค๋ฉด์ GitHub์ ๋ํด ๋ ๊ณต๋ถํ๋ ์๊ฐ์ด ๋์ด ์ ์ตํ๊ณ , ๋ธ๋ก๊ทธ ๊ธ์ Readme.md์ฒ๋ผ ๋งํฌ๋ค์ด์ผ๋ก ์์ฑํ๊ณ  ์ค์  url๋ก ํ์ธํ๋ ๊ณผ์ ๋ ํฅ๋ฏธ๋ก์ ๋ค. ์์ผ๋ก ๊ณต๋ถํ๋ ๋ด์ฉ๋ค ์์ฃผ๋ก ๋ธ๋ก๊ทธ ๊ธ์ ์์ฑํด๋ณด๋ ค๊ณ  ํ๋ค.





์ถ์ฒ : https://github.com/zoomKoding