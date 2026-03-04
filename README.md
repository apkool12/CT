# Algo · 코딩테스트 플랫폼

> 백준(BOJ) 기반 **실시간 코딩테스트·채팅** 플랫폼입니다.  
> 스터디원이 함께 문제를 풀고, 실시간 채팅과 랭킹으로 경쟁·협업할 수 있습니다.

---

## 📌 프로젝트 소개

| 항목 | 설명 |
|------|------|
| **목적** | 알고리즘 스터디를 위한 실시간 문제 풀이·채팅·랭킹 제공 |
| **문제 출처** | [백준 온라인 저지](https://www.acmicpc.net) (Solved.ac API 연동 예정) |
| **주요 기능** | 실시간 채팅, 입장 대기열, 실시간 랭킹, 코드 보관 |
| **기술 스택** | Next.js (App Router), Emotion, Socket.IO, TypeScript |

이 프로젝트는 **학교/스터디**에서 코딩테스트·알고리즘 연습을 함께할 수 있는 웹 서비스를 목표로 합니다.

---

## 🛠 기술 스택

- **Frontend / API**: Next.js 14 (App Router), React, TypeScript, Emotion
- **실시간 통신**: Socket.IO (별도 Node 서버)
- **인증**: (예정) NextAuth.js, OAuth2
- **DB**: (예정) PostgreSQL 또는 MongoDB

---

## 📁 프로젝트 구조

```
Algo/
├── app/                 # Next.js App Router (페이지, API)
├── lib/                  # 공용 유틸, 훅 (예: useSocket)
├── socket-server/        # Socket.IO 서버 (실시간 채팅·랭킹)
├── .env.example
└── README.md
```

- **Next.js**: 화면, REST API, 인증, DB 접근
- **socket-server**: WebSocket 연결 유지, 방 단위 채팅·이벤트 브로드캐스트

---

## 🚀 실행 방법

### 1. 의존성 설치

- Node 18+ 권장 (LTS 사용 권장)

```bash
npm install
cd socket-server && npm install && cd ..
```

### 2. 환경 변수

`.env.example`을 참고해 `.env.local`(Next) 또는 Socket 서버용 환경 변수 설정.

### 3. 동시 실행 (Next + Socket)

```bash
npm run dev:all
```

또는 터미널 2개에서:

```bash
# 터미널 1: Next.js
npm run dev

# 터미널 2: Socket 서버
npm run socket
```

- Next: http://localhost:3000  
- Socket: http://localhost:3001  

---

## 📡 Socket 이벤트

| 이벤트 | 방향 | 설명 |
|--------|------|------|
| `room:join` | client → server | 방 입장 |
| `room:leave` | client → server | 방 퇴장 |
| `chat:message` | client → server | 채팅 전송 |
| `chat:message` | server → client | 채팅 수신 (broadcast) |

---

## 🔧 트러블슈팅

> 해결한 오류·이슈를 아래 형식으로 추가해 두었습니다.  
> (기업/면접에서 문제 해결 경험을 설명할 때 참고할 수 있습니다.)

### 템플릿 (새 이슈 추가 시)

```markdown
#### [요약] 짧은 현상 한 줄

- **현상**: 어떤 상황에서 무엇이 안 됐는지
- **원인**: 왜 그런지 (에러 메시지, 환경, 설정 등)
- **해결**: 어떤 조치로 해결했는지 (명령, 코드, 설정 변경)
- **참고**: 공식 문서, 스택오버플로우 등
```

### 기록된 이슈

*(해결한 항목이 생기면 위 템플릿으로 여기에 추가)*

---

## 📄 라이선스

- 백준 문제 데이터 활용 시 [백준](https://www.acmicpc.net) 및 [Solved.ac](https://solved.ac) 이용 규정을 확인해 주세요.
