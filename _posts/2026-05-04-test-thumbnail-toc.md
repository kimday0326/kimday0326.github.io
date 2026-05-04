---
layout: post
title: "테스트: 썸네일과 목차 확인"
date: 2026-05-04 12:00:00 +0900
category: test
tags: [test, jekyll, markdown]
excerpt: "썸네일 이미지와 목차(TOC) 자동 생성이 제대로 동작하는지 확인하는 테스트 게시글입니다."
thumbnail: "https://picsum.photos/seed/kimday/800/450"
---

## 소개

이 게시글은 블로그의 두 가지 핵심 기능을 검증하기 위한 테스트 포스트입니다.

- **썸네일**: 카드 목록에서 대표 이미지가 올바르게 표시되는지 확인
- **목차(TOC)**: 우측 사이드바에 헤딩 기반 목차가 자동 생성되는지 확인

오른쪽 사이드바를 보면 이 문서의 `h2`, `h3` 헤딩들이 목차로 정리되어 있어야 합니다. 스크롤을 내리면 현재 읽고 있는 섹션이 목차에서 하이라이트됩니다.

## 이미지 테스트

본문 안에 삽입된 이미지가 올바르게 렌더링되는지 확인합니다.

![산 풍경 샘플 이미지](https://picsum.photos/seed/mountain/700/400)

이미지는 `border-radius`와 `box-shadow`가 적용되어 부드럽게 표시되어야 합니다. 두 번째 이미지도 확인합니다.

![도시 야경 샘플 이미지](https://picsum.photos/seed/city/700/400)

## 마크다운 요소

### 코드 블록

인라인 코드: `const greeting = "Hello, World!"`

블록 코드:

```javascript
function generateTOC() {
  const headings = document.querySelectorAll('.prose h2, .prose h3');
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
  });
}
```

```yaml
# Jekyll Frontmatter 예시
layout: post
title: "게시글 제목"
tags: [jekyll, blog]
thumbnail: "/assets/images/cover.jpg"
```

### 인용구 & 표

> 좋은 블로그는 독자가 원하는 정보를 빠르게 찾을 수 있도록 구조화되어야 합니다.
> 목차는 그 구조를 명확하게 보여주는 핵심 도구입니다.

아래는 지원하는 마크다운 요소 요약 표입니다.

| 요소 | 문법 | 비고 |
|------|------|------|
| 헤딩 | `## h2`, `### h3` | TOC 자동 생성 대상 |
| 이미지 | `![alt](url)` | 자동 스타일 적용 |
| 코드 | `` `code` `` | 인라인/블록 모두 지원 |
| 인용구 | `> text` | 좌측 하이라이트 바 표시 |

## 목차 확인

이 섹션까지 스크롤하면 우측 목차에서 **목차 확인** 항목이 파란색으로 활성화되어야 합니다. 목차 클릭 시 해당 섹션으로 부드럽게 이동하는지도 테스트해보세요.

현재까지 확인된 목차 항목:
1. 소개
2. 이미지 테스트
3. 마크다운 요소 → 코드 블록 / 인용구 & 표
4. 목차 확인 (현재 위치)
5. 마무리

## 마무리

모든 테스트 항목이 정상적으로 표시된다면:

- [x] 카드 목록에서 썸네일 이미지 표시 ✓
- [x] 게시글 본문에서 이미지 렌더링 ✓
- [x] 우측 목차 자동 생성 ✓
- [x] 스크롤 시 목차 하이라이트 ✓

이 테스트 게시글은 기능 확인 후 삭제하거나 실제 콘텐츠로 교체하시면 됩니다.
