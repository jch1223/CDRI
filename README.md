# 프로젝트 개요

## 실행 방법 및 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

```

# 폴더 구조 및 주요 코드 설명

```
src/
├── components/       # 재사용 가능한 UI 컴포넌트
├── pages/            # 페이지 컴포넌트
│   ├── Search/       # 도서 검색 페이지
│   └── Likes/        # 찜 목록 페이지
├── router/           # 라우팅 설정
├── lib/              # 유틸리티 및 헬퍼 함수
└── assets/           # 정적 리소스
```

도서 검색 페이지와 찜 목록 페이지에서 모두 사용하는 컴포넌트와 디자인 시스템 컴포넌트는 최상위의 `components` 폴더에 위치하였습니다. pages 하위 폴더에는 각 페이지에서 대해 관심사가 있는 컴포넌트를 생성하였습니다.

# 라이브러리 선택 이유

- **Zustand**: persist 기능을 통해서 로컬 스토리지에 대한 관리가 수월하고 사용이 편리하여 사용하였습니다.
- **ky**: fetch보다 개발 경험이 좋다고 하여 사용해보았습니다.
- **Shadcn/ui**: ui에 대한 기본적인 기능을 제공하면서, 스타일링이 자유로워 사용하였습니다.

# 강조하고 싶은 기능

tailwind의 확장 기능을 통해서 typography를 정의하여 사용하였습니다.

```ts
// tailwind.config.ts
{
  plugins: [
    function ({ addUtilities, theme }) {
      const types = theme('textTypes') as TextTypes;
      const weights = theme('fontWeights') as FontWeights;

      const utilities = {};

      Object.entries(types).forEach(([type, typeStyle]) => {
        Object.entries(weights).forEach(([weightName, weightValue]) => {
          const utilityName = `.text-${type}-${weightName}`;

          utilities[utilityName] = {
            fontFamily: 'Noto Sans KR',
            fontSize: typeStyle.fontSize,
            lineHeight: typeStyle.lineHeight,
            fontWeight: weightValue,
          };
        });
      });

      addUtilities(utilities);
    },
  ],
}
```

이렇게 정의한 텍스트 스타일을 사용하면 다음과 같이 사용할 수 있습니다.

```html
<p className="text-h1-bold">텍스트</p>
```

```css
.text-h1-bold {
  font-family: Noto Sans KR;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
}
```
