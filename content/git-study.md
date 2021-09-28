---
emoji: 🐻
title: Git 정리
date: '2021-09-29'
author: woo0dev
tags: github
categories: 블로그
---

# __Git 정리하기__
------

Git은 버전을 편리하게 관리할 수 있도록 도와주는 도구이다.  
개인 뿐만 아니라 다른 사람과의 협업을 하는 경우에도 큰 도움이 된다.

### Git Tool
GitHub DeskTop : commands에서 사용할 때 보다 사용할 수 있는 기능이 극히 제한적이다.  
Sourcetree : 다양한 기능을 사용할 수 있고, 전반적으로 많이 사용하고 있지만 역시 commands에서 사용할 수 있는 명령어보다 적다.  
GitKraken : UI가 화려한 Tool  

### Git 설치 여부 확인 방법
Git 설치 여부 확인하기 위해서는 터미널에서 git --version 명령어를 쳤을 때 버전이 나온다면 Git이 설치되어 있는 것이다.

### Git의 설정 정보 확인 방법
git을 설치하면 git에 대한 모든 설정들을 확인하려면 git config --list 명령어를 활용해 확인 할 수 있다.  
file로 확인하고 싶다면 git --global -e 명령어를 사용하면 된다.

### Git의 설정 정보를 특정 editor로 연결하여 확인할 수 있다.
(특정 editor에서 터미널과 따로 연결하는 과정을 거쳐야한다.)
```bash
git config --global core.editor "별칭"
```
### 아래 명령어를 사용하면 사용자와 관련된 정보를 확인할 수 있다. (email도 가능하다.)
```bash
git config --global user.name "name"
```
### carriage-return 처리에 대한 설정하는 명령어
```bash
git config --global core.autocrlf input(window는 true)
```
### Git 명령어 사용 방법
```bash
git 명령어 -option  
```
ex> git config --list, git add . 등  
git 홈페이지에 Documentation 밑에 Reference에 모든 명령어들을 확인할 수 있다.  
명령어를 클릭하면 그 명령어에서 사용가능한 option들을 확인할 수 있다.  

### project에 git 생성하기
```bash
git init : git 초기화 (rm -rf .git 명령어를 사용하여 git 삭제 가능)  
git status : git 상태 확인 명령어  
```

### Git Workflow
#### local
1. working directory : project에서 작업중인 곳  
    - untracked : git이 tracking이 되지 않은 file
    - tracked : git이 tracking 하고 있는 file
        - unmodified : 수정이 되지 않은 file 
        - modified : 수정된 file
2. stating area : version history에 저장할 준비가 된 파일들을 옮겨둔 곳
3. .git directory : version history가 저장되어 있는 곳  
-> .git directory에 저장되어 있는 파일들을 push 명령어를 통해 remote에 저장하고 pull 명령어를 통해 remote에 있는 파일을 local로 다시 가져올 수 있다.  

#### untracked file을 traking 하는 방ㅌ법 (working directory에서 staging area로 이동)
```bash
git add .
git add filename
git add *.확장자
```
(git rm --cached <file>... 명령어를 통해 tracking을 취소할 수 있다.)
<br/><br/>
#### tracking 하고 싶지 않은 파일들 관리하기
.gitignore에 특정 file 또는 특정 확장자를 등록해놓으면 해당 file과 해당 확장자를 가진 file들을 tracking하지 않는다.

#### 수정된 내용만 확인하는 방법
```bash
git diff
```

#### 파일 내용 확인하는 방법
```bash
cat filename
```

#### 파일 내용과 수정 내용 모두 확인하는 방법
```bash
git diff --staged
git diff --cached
```

#### git 버전 만들기
```bash
git commit -m 'commit message'
```
commit을 할 때에는 module 단위로 하는 것이 좋고, commit message에 해당하는 부분만 commit하는 것이 나중에 코드리뷰를 할 때에나 유지보수를 할 때 편리하게 관리할 수 있다.  
commit 단위는 너무 크지도 너무 작지도 않게 하는 것이 좋다.