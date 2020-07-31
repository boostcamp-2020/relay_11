# 모여봐요 동창의 숲



<img width="852" alt="스크린샷 2020-07-31 오후 6 23 29" src="https://user-images.githubusercontent.com/55074799/89021167-08b84480-d35b-11ea-94bd-d9a2fd6f8f05.png">



## Contributer

### 기획

이유노 이유택 이은솔 이종화 이주현 이주형 이준희 이지우 이지원 이지은 이진우



## 기획

학교 졸업연도에 따라 게시판이 하나씩 있고, 게시판은 메인화면, 사진첩, 자유게시판으로 이루어진다.

구성원들이 게시판에 모이면서 자연스럽게 동창들을 찾고, 커뮤니티가 만들어진다.

메인화면에는 졸업사진을 올리고, 자유게시판에는 좋아하는 주제 등의 내용을 올릴 수 있다.

사진을 올리면 페이스북처럼 인물을 인식하여 라벨링을 할 수 있고,

페이지 내용에서 태그를 추출하여 스팸 글을 필터링하는 기능과 다른 페이지 추천 기능을 제공한다.



## 세부 기획

### 메인 페이지
서비스 이름과 검색 탭이 있다.
검색 탭에는 학교명과 입학연도가 있다. 이 때 현재 존재하는 학교+입학연도의 목록만 드롭다운에 표시된다.
추가를 원할 경우 관리자가 직접 추가한다.


### entry
상단에는 서비스 이름과 우측에는 학교명+입학연도 표시
entry/자유 게시판/entry 탭이 존재한다.(현재 탭은 다른 색으로 표시)
메인으로 해당 기수의 졸업사진을 띄운다.


### 자유 게시판
존재하는 글 목록을 표시한다.
하단에 페이지 넘기는 버튼, 우측에 글 작성 버튼이 표시되어있다.


### 글 작성 페이지
글 제목, 작성자, 비밀번호(수정, 삭제 시 필요)를 입력한다.
중간에는 글 본문을 입력한다.
하단에 사진 첨부, 글 게시 버튼이 있다.
(A) 글을 올릴 때 API를 이용해 비속어를 필터링한다. 조건에 맞지 않는 글일 경우 글 작성이 불가능하게한다.


### 자유 게시판-글 읽기
자유 게시판에서 글을 클릭하면 글 제목과 작성자, 본문을 띄워준다.
글 본문 아래에는 삭제를 위한 비밀번호, 수정하기, 삭제하기 버튼이 있다.
(C) 글 하단에는 해당 게시글 태그에 기반, 기존 글들 중 비슷한 게시글을 표시한다.


### 사진첩 페이지
지금까지 올라온 사진들을 보여준다.
하단에는 사진 제목이나 태그로 검색할 수 있다.
페이지 넘기는 버튼, 사진 게시 버튼이 있다.


### 사진 업로드 게시판
사진 제목을 설정할 수 있다. 사진 업로드 시 사진을 표시한다.
(B) 이 때 얼굴 인식을 통해 인물 별로 라벨을 붙일 수 있다.
하단에는 사진 첨부 버튼, 작성하기 버튼이 있다.


### 사진첩- 사진 보기
사진이 표시되며 업로드 때 태그한 인물 정보를 표시한다.



## 일정

### 1주차 : 자연어 처리

글 내용에서 중요한 단어를 태그로 추출하기

### 2주차 : 비전/영상 처리

학창시절 단체사진을 올리면 사진에서 인물들을 인식하여 라벨링하기

### 3주차 : 테이블 데이터

태그로 추출된 단어들을 통해 스팸 필터링, 맞춤 광고나 게시글 추천하기



## UI 구성
https://github.com/boostcamp-2020/relay_11/issues/4 PW:boostcamp2020

### 메인 페이지
![스크린샷 2020-07-31 오후 6 11 34](https://user-images.githubusercontent.com/55074799/89020302-a6127900-d359-11ea-83a4-4140d1bffec2.png)

### entry 페이지
<img width="810" alt="스크린샷 2020-07-31 오후 5 08 56" src="https://user-images.githubusercontent.com/55074799/89014757-f802d100-d350-11ea-84aa-b067f95b9e97.png">

### 자유 게시판
<img width="795" alt="스크린샷 2020-07-31 오후 5 09 00" src="https://user-images.githubusercontent.com/55074799/89014766-fafdc180-d350-11ea-9aa2-e5f13dd0b436.png">

### 사진첩 (글 작성)
<img width="768" alt="스크린샷 2020-07-31 오후 5 09 22" src="https://user-images.githubusercontent.com/55074799/89014865-1cf74400-d351-11ea-84b5-24f97ca0f9f4.png">



## 참고할 API

**비속어**
https://github.com/hjh010501/appropriate-filetering

**얼굴 인식**
https://azure.microsoft.com/ko-kr/services/cognitive-services/face/

**중요한 단어 추출(핵심어구 추출)**
https://aws.amazon.com/ko/comprehend/
