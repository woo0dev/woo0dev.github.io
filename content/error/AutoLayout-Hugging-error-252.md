---
emoji: ๐ป
title: Set vertical hugging priority to 252 ์๋ฌ
date: '2022-07-15'
author: woo0dev
tags: iOS Swift Error Resolution
categories: iOS
---

# Set vertical hugging priority to 252 ์๋ฌ

### Set vertical hugging priority to 252 ์๋ฌ - Auto Layout์ ํ์ฉํ์ฌ Constraints๋ฅผ ์ค์ ํ  ๋ ์๊ธฐ๋ ์๋ฌ
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-1.png">
UIFramework์์ ์ ๊ณต๋๋ ์ผ๋ถ View์๋ ์ปจํ์ธ  ๊ณ ์  ์ฌ์ด์ฆ๋ผ๋ ๊ฐ๋์ด ์๋ค.

์๋ฅผ ๋ค์ด UILabel, UIButton ๋ฑ ํ์คํธ๋ ์ด๋ฏธ์ง์ ๋ฐ๋ผ ํฌ๊ธฐ๊ฐ ๊ฒฐ์ ๋๋ View๋ค์ ๋ค๋ฅธ View๋ค๊ณผ ๊ฑธ๋ฆฐ ์ ์ฝ์ ์ํด์ ๋ณธ๋ ์ปจํ์ธ  ๊ณ ์  ์ฌ์ด์ฆ๋ณด๋ค ๋ ๋์ด๋๊ฑฐ๋ ์ค์ด๋ค๊ฒ ๋๋๋ฐ ์ด ๋ ๋ ๋์ด๋๊ฒ ๋๋ ๊ฒ์ ๋ํด ์ ํญํ๋ ์ ์ฝ์ Content Hugging์ด๋ผ๊ณ  ํ๊ณ  ๋ ์ค์ด๋ค๊ฒ ๋๋ ๊ฒ์ ์ ํญํ๋ ์ ์ฝ์ Content Compression Resistance๋ผ๊ณ  ํ๋ค.

์ปจํ์ธ  ๊ณ ์  ์ฌ์ด์ฆ ๋ณ๊ฒฝ์ ๋ํ ์ ์ฝ์๋ ์ฐ์ ์์๊ฐ ์๋๋ฐ ์ด ์ฐ์ ์์์ ๋ฐ๋ผ ์ปจํ์ธ  ๊ณ ์  ์ฌ์ด์ฆ๋ณด๋ค ๋ ๋์ด๋๊ฒ ๋์์ ๋ ์ฌ์ด์ฆ๋ฅผ ๋์ด๋๊ฒ ํ  ๊ฑด์ง ์ค์ด๋ค๊ฒ ํ  ๊ฑด์ง ์ ํ  ์ ์๋ค.

์ ์๋ฌ๊ฐ ๋ฐ์ํ์ ๋๋ hugging priority๋ฅผ ์ค์ ํ๋ ๊ฒ์ผ๋ก ์๋ฌ๋ฅผ ํด๊ฒฐํ  ์ ์๋ค.

hugging priority๋ ์ฐ์ ์์๊ฐ ๋์ผ๋ฉด ๋ด ํฌ๊ธฐ๋ฅผ ์ ์งํ๊ณ  ์ฐ์ ์์๊ฐ ๋ฎ์ผ๋ฉด ํฌ๊ธฐ๊ฐ ๋์ด๋๋ค.
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-2.png">

์ฌ๊ธฐ์๋ ์์ ๋ผ๋ฒจ์ ํฌ๊ธฐ๊ฐ ๋์ด๋๋๋ก ํ๊ธฐ ์ํด ์์ ๋ผ๋ฒจ์ ์ ํํ์ฌ vertical hugging prioriry๋ฅผ 250์ผ๋ก ๋ฎ์ถฐ์ ์๋ฌ๋ฅผ ํด๊ฒฐํ๋ค.
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-3.png">

vartical hugging priority๋ฅผ ๋ฎ์ท๊ธฐ ๋๋ฌธ์ ์ธ๋ก ํฌ๊ธฐ๊ฐ ๋ณํ ๊ฒ์ ํ์ธํ  ์ ์๋ค.

์ฐธ๊ณ ๋ก priority ๊ฐ์ 1๋ถํฐ 1000๊น์ง์ ๊ฐ์ ๊ฐ์ง ์ ์๋๋ฐ ๋ณดํต 250, 500, 750, 1000๊ณผ ๊ฐ์ด ์ค์ ํ์ฌ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๊ฐ ๋ง๋ค.

### Set vertical compression resistance priority to 749 ์๋ฌ
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-4.png">
compression resistance priority ์๋ฌ๋ฅผ ์ผ๋ถ๋ฌ ๋ฐ์์์ผ ๋ณด์๋ค.

๋ผ๋ฒจ์ ์์ฒญ ๊ธด ํ์คํธ๋ฅผ ๋ฃ์๋๋ ์๋ฌ๊ฐ ๋ฐ์ํ๋ค. ์์ ์๋ฌ์ ๊ฐ์ด Content Compression Resistance prioriry๋ฅผ ๋ณ๊ฒฝํด์ฃผ๋ฉด ํด๊ฒฐ๋๋ค. ์ง๊ธ์ ์๋ ๋ผ๋ฒจ ํฌ๊ธฐ๋ฅผ ๊ณ ์ ํ๊ธฐ ์ํด ์๋ ๋ผ๋ฒจ์ compression resistance vertical์ 1000์ผ๋ก ์ค์ ํด ํด๊ฒฐํ๋ค.
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-5.png">
<img src="/AutoLayout-Hugging-error-252/AutoLayout-Hugging-error-252-6.png">