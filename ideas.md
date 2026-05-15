# 박준서 이력서 웹사이트 디자인 브레인스토밍

## 요구사항 분석
- 메모리 누수 없이, 보안 취약점 없이, AI slop 없이
- 독창적인 스크롤 애니메이션
- 박준서, 서울과학기술대학교 26학번, 인공지능응용학과, 신성고 졸업

---

<response>
<text>
## 아이디어 1: "Brutalist Typography" — 브루탈리스트 타이포그래피 중심

**Design Movement**: Neo-Brutalism + Swiss Typography의 결합. 과감한 타이포그래피와 raw한 구조적 레이아웃.

**Core Principles**:
1. 텍스트가 곧 디자인 — 거대한 타이포그래피가 시각적 주인공
2. 의도적 비대칭 — 격자를 깨는 배치로 긴장감 생성
3. 고대비 색상 — 검정/흰색 기반에 단일 강조색(형광 라임)
4. 구조적 정직함 — 장식 없이 정보의 위계만으로 시각적 질서

**Color Philosophy**: 순수 흑백(#0a0a0a / #fafafa) 기반에 형광 라임(#c8ff00)을 강조색으로. 정보의 중요도를 색이 아닌 크기와 무게로 전달.

**Layout Paradigm**: 화면을 불규칙한 블록으로 분할. 텍스트가 화면 가장자리까지 확장되며, 스크롤 시 블록들이 재배치됨.

**Signature Elements**:
- 화면 전체를 채우는 100vw 타이포그래피
- 텍스트가 잘리는(clip) 효과로 스크롤 시 글자가 드러남
- 굵은 수평선이 섹션을 구분

**Interaction Philosophy**: 호버 시 텍스트 무게(weight)가 변하며, 클릭 시 즉각적 반응. 불필요한 트랜지션 최소화.

**Animation**: 스크롤 시 텍스트가 한 글자씩 viewport에 진입하며 나타남. Parallax 없이 순수 translate와 clip-path만 사용.

**Typography System**: Space Grotesk (Display, 700-900) + IBM Plex Mono (Body, 400-500). 극단적 크기 대비(8rem 제목 vs 1rem 본문).
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## 아이디어 2: "Ink & Paper" — 동양적 먹물 미학

**Design Movement**: 동양 서예 + 미니멀리즘. 먹이 종이 위에 번지듯 콘텐츠가 드러나는 경험.

**Core Principles**:
1. 여백의 미 — 빈 공간이 콘텐츠만큼 중요
2. 유기적 흐름 — 직선보다 자연스러운 곡선과 번짐
3. 단색 깊이 — 검정의 농담(濃淡)으로 깊이 표현
4. 시간성 — 스크롤이 두루마리를 펼치는 행위

**Color Philosophy**: 먹색 그라데이션(#1a1a1a ~ #6b6b6b) + 한지 색상(#f5f0e8). 붉은 낙관 색(#c23616)이 유일한 포인트.

**Layout Paradigm**: 세로 스크롤이 두루마리를 펼치는 것처럼 작동. 콘텐츠가 왼쪽에서 오른쪽으로, 위에서 아래로 자연스럽게 흐름.

**Signature Elements**:
- SVG 기반 먹물 번짐 효과(mask로 콘텐츠 reveal)
- 낙관(도장) 모티프의 인터랙티브 요소
- 붓 터치 느낌의 구분선

**Interaction Philosophy**: 느리고 우아한 반응. 호버 시 먹물이 번지듯 요소가 확장. 급격한 변화 없이 자연스러운 전이.

**Animation**: 스크롤 시 먹물이 종이에 스며들듯 콘텐츠가 점진적으로 드러남. opacity + clip-path의 유기적 조합.

**Typography System**: Noto Serif KR (제목, 700) + Pretendard (본문, 300-400). 서체의 세리프가 붓글씨 느낌을 보완.
</text>
<probability>0.05</probability>
</response>

<response>
<text>
## 아이디어 3: "Terminal / Hacker" — 터미널 인터페이스 미학

**Design Movement**: Retro-Terminal + Cyberpunk. 실제 터미널처럼 동작하면서도 현대적 UX를 갖춘 이력서.

**Core Principles**:
1. 코드가 곧 콘텐츠 — 이력서 정보가 코드/명령어 형태로 표현
2. 모노스페이스 순수주의 — 단일 서체 시스템
3. 어두운 배경 + 발광 텍스트 — CRT 모니터 감성
4. 순차적 렌더링 — 정보가 타이핑되듯 나타남

**Color Philosophy**: 깊은 남색(#0d1117) 배경에 녹색 발광(#00ff41) 기본 텍스트. 시안(#00d4ff)은 링크/강조, 앰버(#ffb000)는 경고/중요 정보.

**Layout Paradigm**: 전체 화면이 하나의 터미널 창. 스크롤 시 새로운 "명령어 출력"이 나타남. 좌측에 고정된 프롬프트 라인.

**Signature Elements**:
- 깜빡이는 커서와 타이핑 효과
- ASCII 아트 구분선과 프로필
- 스캔라인 오버레이(CRT 효과)

**Interaction Philosophy**: 키보드 친화적. 실제 명령어 입력 가능한 인터랙티브 요소. 즉각적이고 기계적인 반응.

**Animation**: 텍스트가 한 줄씩 타이핑되며 나타남. 스크롤 시 새로운 "출력"이 순차적으로 렌더링. 글리치 효과로 섹션 전환.

**Typography System**: JetBrains Mono 단일 서체. 크기와 색상으로만 위계 구분(1.5rem 명령어 vs 0.9rem 출력).
</text>
<probability>0.08</probability>
</response>

---

## 선택: 아이디어 1 — "Brutalist Typography"

이유: AI 슬롭을 가장 효과적으로 피할 수 있는 접근법. 보라색 그라데이션, 둥근 카드, 중앙 정렬 레이아웃을 완전히 배제하며, 과감한 타이포그래피와 비대칭 레이아웃으로 독창성을 확보. 또한 순수 CSS 기반 애니메이션으로 메모리 누수 위험을 최소화할 수 있음.
