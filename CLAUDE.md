# TINA 대시캠 프리오더 웹사이트

INAVI x Hepton 협업 프로젝트. TINA 대시캠은 주행 중 도로 데이터를 수집하며 Solana 기반 TINA 토큰을 채굴하는 장치. 다크 테마 마케팅 랜딩 페이지(`/`)와 SOL 결제 프리오더 페이지(`/order`)로 구성.

## 기술 스택

- **Next.js 14** (App Router, TypeScript, 정적 내보내기)
- **Tailwind CSS** + **Framer Motion** (애니메이션)
- **Solana**: `@solana/pay`, `@solana/web3.js@1.x`, `wallet-adapter-react`, `wallet-adapter-phantom`
- **Firebase Hosting** + Analytics
- **pnpm** 패키지 매니저
- **폰트**: Inter (본문) + JetBrains Mono (숫자/데이터)

## 주요 명령어

```bash
pnpm dev          # 개발 서버 (localhost:3000)
pnpm build        # 정적 빌드 (out/ 디렉토리)
pnpm lint         # ESLint 검사
npx firebase deploy --only hosting  # Firebase 배포
```

## 프로젝트 구조

```
src/
  app/
    layout.tsx          # 루트 레이아웃 (폰트, WalletProvider, Navbar, Footer, Analytics)
    page.tsx            # 랜딩 페이지 (홈 섹션 조합)
    globals.css         # Tailwind + 커스텀 유틸리티 (글로우, 스크롤바)
    order/page.tsx      # 프리오더 폼 + Solana Pay 결제
  components/
    layout/             # Navbar, Footer
    home/               # HeroSection, StatsBar, TokenSection, HowItWorks, ProductSpecs, PreOrderCTA
    order/              # OrderForm, OrderSummary, SolanaPayButton, QRCodePayment, WalletConnect
    ui/                 # Button, Card, GlowText, SectionHeading, AnimatedCounter, Container
    effects/            # ParticleField (Canvas API), GlowOrb, ScrollReveal
    FirebaseAnalytics.tsx
  lib/
    constants.ts        # 제품 데이터, 통계, 스펙, 네비 링크 (플레이스홀더)
    firebase.ts         # Firebase 초기화 + Analytics
    solana.ts           # Solana 연결 헬퍼, 네트워크 설정
    utils.ts            # cn() 헬퍼 (clsx + tailwind-merge)
  hooks/                # useCountUp, useInView
  providers/            # WalletProvider (Solana 지갑 어댑터)
  types/index.ts        # OrderFormData, OrderStatus 등 타입 정의
```

## 디자인 토큰

| 토큰 | 값 | 용도 |
|------|-----|------|
| `background` | `#050810` | 페이지 배경 |
| `surface` | `#0a1020` | 카드 배경 |
| `border` | `#1e293b` | 테두리 |
| `cyan-400/500` | `#22d3ee/#06b6d4` | 기본 악센트 |
| `teal-400` | `#2dd4bf` | 보조 악센트 |
| `text-primary` | `#f1f5f9` | 제목 텍스트 |
| `text-secondary` | `#94a3b8` | 본문 텍스트 |

## 핵심 설계 결정

- **정적 내보내기**: `next.config.mjs`에 `output: "export"` 설정, Firebase Hosting에 배포
- **ParticleField**: Three.js 대신 Canvas API 사용 (가벼움, 모바일에서 파티클 수 감소)
- **Solana Pay**: 클라이언트 사이드 `SystemProgram.transfer`, QR 코드 폴백
- **지갑 SSR 처리**: `WalletMultiButton`은 `next/dynamic`으로 `ssr: false` 설정
- **`@solana/web3.js@1.x` 고정**: v2는 현재 지갑 어댑터와 호환 안 됨
- **bignumber.js 타입 불일치**: `@solana/pay`가 v9 사용, 프로젝트는 v10 → `@ts-expect-error`로 처리

## 환경 변수 (`.env.local`)

```
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_MERCHANT_WALLET=<수신 지갑 주소>
NEXT_PUBLIC_DASHCAM_PRICE_SOL=2.5
NEXT_PUBLIC_DASHCAM_PRICE_USD=399
```

## 배포

- **호스팅**: Firebase Hosting (https://pioneer-pass.web.app)
- **프로젝트 ID**: `pioneer-pass`
- **빌드 출력**: `out/` 디렉토리 → Firebase에 업로드
