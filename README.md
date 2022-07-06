# 💊 Week1 프리온보딩 프론트엔드 코스 사전과제 리팩토링

1. [프로젝트 소개](#1-프로젝트-소개)
2. [구현 기능](#2-구현-기능)
3. [프로젝트 구조](#3-프로젝트-구조)
4. [역할](#4-역할)
5. [프로젝트 제작 과정](#5-프로젝트-제작-과정)
6. [프로젝트 설치 및 실행](#6-프로젝트-설치-및-실행)

<br/>

[🌍 배포 링크](https://running-sheep-instagram.netlify.app/)
| 테스트 아이디 | 테스트 비밀번호 |
|---------------|-----------------|
| test@test.com | Test1234!       |

<br />

## 1. 프로젝트 소개
- 개요: 원티드 프리온보딩 5기 1주차 1번째 팀 과제
- 주제: 인스타그램 클론코딩
- 기간: 2022.07.04 ~ 2022.07.06

<br />

## 2. 구현 기능
### 🔥 과제 요구 기능
**로그인 페이지**   
- [x] 최소 input 2개, button 1개 이상인 로그인 컴포넌트 개발
- [x] useRef를 사용하여 약간의 렌더링 최적화 구현
- [x] 로그인 시 Local Storage 정보 저장
  - [x] 다시 접속했을 경우 정보 유지
- [x] 이메일과 비밀번호 유효성 검사
  - [x] 이메일 조건 - `@`, `.` 포함
  - [x] 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
  - [x] 유효성 검사에 통과하지 못할 경우 input의 border 색 red로 변경
  - [x] 이메일과 비밀번호 모두 유효성 통과될 경우에만 버튼 활성화
- [x] 로그인, 로그아웃 시 Local Storage의 값 변경 후 페이지 이동

**메인 페이지**   
- [x] 스크롤에 관계 없이 화면 상단에 고정되는 `sticky` GNB 구현
  - [x] 모바일 사이즈의 경우 가운데 input 창 안 보이도록 처리
  - [x] 요소들은 `space-between` 정렬
  - [x] 가장 오른쪽 아이콘 `Logout`으로 지정
- [x] 인스타그램과 비슷한 피드 컴포넌트 개발
- [x] Feed의 정보는 `public/data` 디렉토리에 json 형식으로 구성하여 fetch를 활용해 데이터 요청
- [x] 최소 3개 이상의 Feed가 렌더링되도록 구현
- [x] 모바일 대응이 가능하도록 `media query` 처리
- [x] Enter key & 클릭으로 각 게시물에 댓글 기능 추가
  - [x] 작성 후 input 초기화
- [x] image가 로딩된 후 컴포넌트가 로딩되도록 `onLoad` 이벤트를 사용하여 구현

<br />

## 3. 프로젝트 구조
```
📁 public
└── data
    └── feed.json

📁 src
├── api
│   └── api
├── assets
│   └── images
│        └── InstagramLogo
├── components
│   ├── Feed
│   ├── LoginForm
│   ├── LoginInput
│   └── NavigationBar
├── context
│   └── AuthContext
├── hooks
│   └── useFeed
├── pages
│   ├── Login
│   └── Main
├── styles
│   └── GlobalStyle
├── util
│   └── validation
│
├── App.js
└── index.js
```
<br />

## 4. 역할
| 이름                                       | 담당 역할                                                      |
|--------------------------------------------|----------------------------------------------------------------|
| [ 양아름 ](https://github.com/areumsheep)  | 초기 세팅, LoginPage UI 및 로직 구현, 문서 작성                |
| [ 최창열 ](https://github.com/pinkdumbbel) | LoginPage UI 및 로직 구현, 컴포넌트 분리, AuthContext API 구현 |
| [ 최중재 ](https://github.com/joong8812)   | MainPage UI 및 로직 구현, 배포                                       |
| [ 이주현 ](https://github.com/mael1657)    | MainPage UI 및 로직 구현, react-query 비동기 통신 로직 구현, image 로딩된 후 컴포넌트 로딩 로직 구현         |
| [ 조현호 ](https://github.com/hajun2)      | MainPage UI 및 로직 구현                                       |
<br />

## 5. 프로젝트 제작 과정

### [1] 컨벤션은 협의하여 아래와 같이 정의하였습니다 🥳
| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 💩 chore   | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/wanted-running-sheep/wanted-pre-onboarding-fe/issues/1)에서 확인해주세요!

### [2] 팀별로 페이지를 나누어 페어 프로그래밍 방식으로 개발 진행하였습니다 🏃
- 페어 프로그래밍 방식을 이용해 이미 혼자 구현해본 부분을 다른 사람의 의견을 들으며 더 좋은 방안을 채택해 구현할 수 있었습니다!
- 혼자보다 더 빠른 속도, 두 배로 강한 집중력! 으로 개발에 임할 수 있었습니다!

### [3] 다른 팀의 의견을 들을 수 있도록 각 팀별로 PR을 날려 코드리뷰를 진행하였습니다 🔥
- [진행한 PR은 여기를 확인해주세요!](https://github.com/wanted-running-sheep/wanted-pre-onboarding-fe/pulls?q=is%3Apr+is%3Aclosed)
- 각 팀의 인원은 최소화하여 의견 취합에 문제가 없도록 하였으며 다른 팀원의 이야기를 들을 수 있도록 코드리뷰 방식을 사용하여 더 나은 방식이 있는지 확인하였습니다.

<br/>

## 6. 프로젝트 설치 및 실행
1. Git Clone
```command
$ git clone
```

2. 프로젝트 실행
```command
$ npm install
$ npm run start
```
