# kimday0326.github.io

kimday0326의 개인 기술 블로그입니다. Jekyll 기반으로 GitHub Pages에서 호스팅됩니다.

**블로그 주소**: https://kimday0326.github.io

---

## 로컬 개발 환경 설정

### 사전 요구사항

- **Ruby** 3.0 이상 (`ruby -v` 로 확인)
- **Bundler** (`gem install bundler`)

macOS에서 Ruby 버전 관리가 필요한 경우 `rbenv` 사용을 권장합니다.

```bash
brew install rbenv
rbenv install 3.2.0
rbenv global 3.2.0
```

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/kimday0326/kimday0326.github.io.git
cd kimday0326.github.io

# 의존성 설치
bundle install

# 로컬 서버 실행 (http://localhost:4000)
bundle exec jekyll serve

# 드래프트 포스트까지 포함해서 확인할 때
bundle exec jekyll serve --drafts

# 파일 변경 시 자동 빌드 (기본값이지만 명시적으로)
bundle exec jekyll serve --livereload
```

서버가 실행되면 `http://localhost:4000` 에서 확인할 수 있습니다. 파일을 수정하면 자동으로 재빌드됩니다 (`_config.yml` 수정 시에는 서버를 재시작해야 합니다).

---

## 게시글 작성 방법

### 파일 생성

`_posts/` 디렉토리에 `YYYY-MM-DD-제목.md` 형식으로 파일을 만듭니다.

```
_posts/2026-05-04-my-new-post.md
```

### Frontmatter

게시글 상단에 아래 형식의 YAML 메타데이터를 작성합니다.

```yaml
---
layout: post
title: "게시글 제목"
date: 2026-05-04 10:00:00 +0900
category: tech          # 카테고리 (선택)
tags: [jekyll, blog]    # 태그 배열 (선택, 필터링에 사용됨)
excerpt: "카드 목록에 표시될 요약 문장입니다."  # 선택
thumbnail: "/assets/images/cover.jpg"           # 카드 썸네일 이미지 경로 (선택)
---
```

| 필드 | 필수 여부 | 설명 |
|------|-----------|------|
| `layout` | 필수 | 항상 `post` |
| `title` | 필수 | 게시글 제목 |
| `date` | 필수 | 작성일시 (타임존 포함) |
| `category` | 선택 | 단일 카테고리 문자열 |
| `tags` | 선택 | 태그 배열, 목록 페이지 필터링에 사용 |
| `excerpt` | 선택 | 카드 미리보기 및 검색에 사용되는 요약문 |
| `thumbnail` | 선택 | 카드에 표시될 대표 이미지 경로 또는 URL |

### 목차(TOC) 자동 생성

본문에 `##`(h2), `###`(h3) 헤딩을 사용하면 우측 사이드바에 목차가 자동으로 생성됩니다. 스크롤 위치에 따라 현재 섹션이 하이라이트됩니다.

```markdown
## 개요        ← 목차에 표시됨
### 배경        ← 들여쓰기로 표시됨
## 본론
### 예시 1
### 예시 2
## 결론
```

---

## 프로젝트 구조

```
.
├── _config.yml          # 사이트 설정 (제목, URL, 플러그인 등)
├── _posts/              # 게시글 (YYYY-MM-DD-title.md 형식)
├── _drafts/             # 초안 (publish 전 작성 공간)
├── _pages/              # 커스텀 페이지
│   ├── posts.html       # 전체 게시글 목록 (/posts/)
│   └── search.html      # 검색 페이지 (/search/)
├── _layouts/            # 페이지 레이아웃
│   ├── default.html     # 기본 레이아웃 (header + footer)
│   ├── home.html        # 홈페이지 레이아웃
│   ├── post.html        # 게시글 상세 레이아웃
│   └── page.html        # 일반 페이지 레이아웃
├── _includes/           # 재사용 컴포넌트
│   ├── header.html      # 네비게이션 헤더
│   ├── footer.html      # 푸터
│   ├── post-card.html   # 게시글 카드 컴포넌트
│   └── toc.html         # 목차 사이드바
├── _sass/               # 스타일시트 (SCSS)
│   ├── _variables.scss  # 색상, 폰트, 브레이크포인트
│   ├── _base.scss       # 기본 스타일, 태그, prose
│   ├── _header.scss     # 헤더 스타일
│   ├── _home.scss       # 홈/목록 페이지, 카드, 페이지네이션
│   ├── _post.scss       # 게시글 상세, TOC
│   └── _search.scss     # 검색 페이지
├── assets/
│   ├── css/style.scss   # SCSS 진입점
│   ├── images/          # 이미지 파일
│   └── js/
│       ├── toc.js       # 목차 생성 및 스크롤 하이라이트
│       └── search.js    # 클라이언트 사이드 검색
├── search.json          # 검색용 게시글 데이터 (자동 생성)
├── index.markdown       # 홈페이지 진입점
└── about.markdown       # 소개 페이지
```

---

## 주요 기능

- **태그 필터**: 목록 페이지에서 태그 버튼을 클릭해 게시글 필터링
- **페이지네이션**: 목록 페이지에서 6개 단위로 페이지 분할 (태그 필터와 연동)
- **목차(TOC)**: h2/h3 헤딩 기반 목차 자동 생성, 스크롤 하이라이트
- **클라이언트 검색**: 제목, 태그, 카테고리, 요약문 전문 검색
- **반응형 레이아웃**: 모바일(1열) / 태블릿(2열) / 데스크탑(3열)

---

## 배포

`main` 브랜치에 push하면 GitHub Actions를 통해 GitHub Pages에 자동 배포됩니다.

```bash
git add .
git commit -m "feat: 새 게시글 추가"
git push origin main
```

배포 완료까지 보통 1~2분 소요됩니다. 배포 상태는 저장소의 **Actions** 탭에서 확인할 수 있습니다.
