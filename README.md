[![seoulw_logo](https://github.com/user-attachments/assets/345224b4-4917-4c46-84f2-7eec5f876b4a)](https://seoulw.vercel.app/)
# 두번째 팀프로젝트 : SEOUL-W
##### KOPIS 공연예술전산망 API를 기반으로 모바일 사이트 구현

### 🌈 프로젝트 배포 링크(vercel)
###### <https://seoulw-pj.vercel.app/>

### 💡 프로젝트소개
###### <https://www.canva.com/design/DAGPlU0-6ow/jtn9ibfQwajWRzBjK4CM8g/edit?utm_content=DAGPlU0-6ow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton](https://www.canva.com/design/DAGPlU0-6ow/jtn9ibfQwajWRzBjK4CM8g/edit?utm_content=DAGPlU0-6ow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton>

KOPIS 공연예술전산망 API에서 제공하는 서울 문화 공연을 한 곳에서 쉽게 조회할 수 있는 모바일 웹 사이트

![seoulw_sub (3)](https://github.com/user-attachments/assets/060e9daa-d00c-49b2-8adb-213097e32366)

### ⏱ 개발 기간
2024.09.27(금) - 2024.10.16(수) (약 2주)

### 👊 팀원 소개
| 이름   | GitHub                              | 직무              |해당 |
|:--------:|:---------------------------------------:|:-------------------:|:----:|
| 고유나 | [tolix-a](https://github.com/tolix-a) | 기능개발, API     |     |
| 박지연 | [pjiyeon90](https://github.com/pjiyeon90) | 디자인, 로그인    |     |
| **성주영** | [0011git](https://github.com/0011git) | 기획, 팀장            | ✔    |
| 허다영 | [Pon119](https://github.com/Pon119) | 서버관리, 배포    |     |

## 💼 폴더 구조
    📦seoulw
     ┣ 📂.next
     ┣ 📂public
     ┃ ┣ 📂assets
     ┃ ┃ ┣ 📂icons
     ┃ ┃ ┗ 📂images
     ┃ ┣ 📜sw.js            # PWA
     ┃ ┣ 📜sw.js.map        # PWA
     ┃ ┣ 📜workbox.js       # PWA
     ┃ ┣ 📜workbox.js.map   # PWA
     ┃ ┗ 📜manifest.json    # PWA
     ┣ 📂src
     ┃ ┣ 📂components       # 컴포넌트 폴더
     ┃ ┣ 📂lib
     ┃ ┃ ┗ 📜firebase.js    # DB
     ┃ ┣ 📂pages            # 페이지 폴더
     ┃ ┃ ┣ 📂api
     ┃ ┃ ┃ ┣ 📂auth
     ┃ ┃ ┃ ┃ ┗ 📜[...nextauth].js    # 로그인 관련 (Next Auth)
     ┃ ┃ ┃ ┣ 📜api.js       # KOPIS API
     ┃ ┃ ┃ ┗ 📜mapapi.js    # 카카오맵 API
     ┃ ┣ 📂store            # zustand 전역 상태 관리
     ┃ ┣ 📂styles           # scss
     ┃ ┗ 📂utils            # api 함수, xmlToJson변환 함수 등 공통 함수 폴더
     ┣ 📜.env
     ┗ 📜README.md


### ⚙ 개발 환경
| 기술            | 기술명                                                 | Badge                                                           |
|:-----------------:|:-----------------------------------------------------:|:-------------------------------------------------------------:|
| **프레임워크**    | Next.js                                               | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white) |
| **데이터베이스**  | Google Firebase                                      | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) |
| **배포**          | Vercel                                               | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) |
| **API 테스트**    | Postman                                              | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) |
| **버전 관리**     | GitHub                                               | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white) |
| **상태 관리**     | Zustand                                              | ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) |
| **UI 라이브러리** | Material UI (MUI)                                    | ![MUI](https://img.shields.io/badge/Material_UI-0078D4?style=flat-square&logo=mui&logoColor=white) |
| **스타일링**      | SASS                                                 | ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white) |
| **PWA**          | Progressive Web App                                  | ![PWA](https://img.shields.io/badge/PWA-1A73E8?style=flat-square&logo=pwa&logoColor=white) |
| **슬라이더**      | Swiper                                               | ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) |
| **HTTP 요청**     | Axios                                                | ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) |
| **XML 파싱**      | xml-js                                               | ![xml-js](https://img.shields.io/badge/xml--js-F9A826?style=flat-square&logo=javascript&logoColor=white) |
| **알림**          | SweetAlert2                                           | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-892B56?style=flat-square&logo=sweetalert2&logoColor=white) |
| **인증**          | NextAuth.js                                           | ![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=flat-square&logo=next.js&logoColor=white) |

### 📍 주요 기능
#### 1. 공연예술통합전산망(KOPIS) API 활용
   - [KOPIS API](https://www.kopis.or.kr/por/cs/openapi/openApiList.do?menuId=MNU_00074)를 활용해 메인 컨텐츠를 제공

#### 2. 카카오맵 API 지도
   - [카카오맵 API](https://apis.map.kakao.com/web/)를 사용해 디테일 페이지에서 공연장 지도 출력

#### 3. 회원가입 및 로그인
   - sns 로그인 (Github, 네이버, 구글) 지원
   - Next Auth 사용
   - 이메일 등의 입력값 유효성 검사
   - DB로 Google Firebase 사용

#### 4. 리뷰 작성 및 북마크 기능
   - 회원 전용으로 리뷰 작성 및 북마크 등록/삭제 기능 제공
   - DB로 Google Firebase를 사용


### 🎯 트러블 슈팅
* 소셜로그인(간편로그인) 후 회원 수정 과정
> 1)소셜로 간편 로그인 후 마이페이지에 회원 수정 클릭하면 유저를 찾을 수 없습니다라는 에러 메세지 발생
>
> 2)간편 로그인으로 들어오는 유저도 firebase에 유저 정보가 없으면 자동 회원 가입시켜 DB를 쌓고 그 DB를 기반으로 회원 수정 페이지에 값을 불러올 수 있도록 수정
>
> 3)하지만 각 소셜별로 주는 데이터 값이 달라 회원 수정시 불러오는 데이터를 일관화 할 수 없는 이슈 발생, 꼭 필요한 이름 같은 경우 임의로 설정되게 설계
> 
> 5)이름이 임의로 설정된 유저는 추후 자신의 이름 및 데이터 값을 별도로 수정할 수 있도록 함

