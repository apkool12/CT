"use client";

import styled from "@emotion/styled";
import Link from "next/link";

// Full-bleed: break out of container to span viewport
const fullBleed = `
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

// ========== Hero ==========
const Hero = styled.section`
  ${fullBleed}
  padding: 72px 24px 100px;
  background: linear-gradient(
    180deg,
    #1a1a1a 0%,
    #2d3748 40%,
    #4a90d9 100%
  );
  margin-bottom: -48px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const HeroInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 56px;
  }
`;

const HeroContent = styled.div``;

const HeroBrand = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 12px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const HeroBadge = styled.span`
  display: inline-block;
  margin-top: 16px;
  padding: 6px 12px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  background: #e53e3e;
  border-radius: 6px;
`;

const HeroDesc = styled.p`
  margin-top: 16px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.65;
`;

const HeroCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
  padding: 14px 28px;
  min-height: 48px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #e53e3e 0%, #2563eb 100%);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`;

const HeroPreview = styled.div`
  aspect-ratio: 4/3;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9375rem;
  min-height: 240px;
`;

// ========== Feature cards (overlapping) ==========
const CardsSection = styled.section`
  padding: 64px 24px 80px;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(
    180deg,
    #4a90d9 0%,
    #63b3ed 30%,
    #90cdf4 100%
  );
  border-radius: 24px;
  margin-top: -24px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    position: relative;
    min-height: 380px;
    gap: 0;
  }
`;

const FlowCard = styled.article<{ $position: "top" | "mid" | "bottom" }>`
  padding: 28px 24px;
  background: linear-gradient(
    180deg,
    rgba(74, 144, 217, 0.95) 0%,
    rgba(37, 99, 235, 0.9) 50%,
    rgba(30, 64, 175, 0.7) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  color: #fff;
  width: min(320px, 100%);
  @media (min-width: 768px) {
    position: absolute;
    width: min(300px, 28vw);
    ${({ $position }) => {
      if ($position === "top")
        return `
          left: 5%;
          top: 0;
          z-index: 3;
        `;
      if ($position === "mid")
        return `
          left: 55%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        `;
      return `
          left: 8%;
          bottom: 0;
          z-index: 1;
        `;
    }}
  }
`;

const FlowCardBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  background: rgba(229, 62, 62, 0.9);
  border-radius: 4px;
  margin-bottom: 12px;
`;

const FlowCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #fff;
`;

const FlowCardDesc = styled.p`
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`;

const FlowCardIcon = styled.div`
  margin-top: 16px;
  font-size: 2rem;
  opacity: 0.9;
`;

// ========== Final CTA ==========
const FinalCta = styled.section`
  ${fullBleed}
  padding: 80px 24px 100px;
  background: linear-gradient(
    180deg,
    #1a1a1a 0%,
    #1e3a5f 50%,
    #1e3a8a 100%
  );
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const FinalCtaInner = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const FinalCtaWords = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const FinalCtaWord = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
`;

const FinalCtaLine = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
  margin: 24px 0;
`;

const FinalCtaQuote = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 32px;
`;

const FinalCtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  min-height: 52px;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #48bb78 0%, #2563eb 100%);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`;

// ========== Data ==========
const FLOW_CARDS = [
  {
    position: "top" as const,
    badge: "알고, 쓰자",
    title: "방 생성 / 입장",
    desc: "스터디원과 함께 문제 풀이방에 참여합니다.",
    icon: "🚪",
  },
  {
    position: "mid" as const,
    badge: null,
    title: "진행상황 공유",
    desc: "누가 풀었는지, 어디서 막혔는지 실시간으로 확인합니다.",
    icon: "📊",
  },
  {
    position: "bottom" as const,
    badge: null,
    title: "복습",
    desc: "풀이 기록을 남기고, 다음 스터디에 사용합니다.",
    icon: "💡",
  },
];

export default function Home() {
  return (
    <>
      <Hero>
        <HeroInner>
          <HeroContent>
            <HeroBrand>aIgo</HeroBrand>
            <HeroTitle>알고 풀면, 더 재밌습니다</HeroTitle>
            <HeroBadge>코딩테스트</HeroBadge>
            <HeroDesc>
              문제를 함께 풀고, 채팅으로 소통하고, 실시간 랭킹으로 경쟁하세요.
            </HeroDesc>
            <HeroCTA href="/rooms">
              시작하러가기
              <span aria-hidden>→</span>
            </HeroCTA>
          </HeroContent>
          <HeroPreview>이미지 영역 (추후 추가)</HeroPreview>
        </HeroInner>
      </Hero>

      <CardsSection>
        <CardsWrapper>
          {FLOW_CARDS.map((card) => (
            <FlowCard key={card.title} $position={card.position}>
              {card.badge && <FlowCardBadge>{card.badge}</FlowCardBadge>}
              <FlowCardTitle>{card.title}</FlowCardTitle>
              <FlowCardDesc>{card.desc}</FlowCardDesc>
              <FlowCardIcon>{card.icon}</FlowCardIcon>
            </FlowCard>
          ))}
        </CardsWrapper>
      </CardsSection>

      <FinalCta>
        <FinalCtaInner>
          <FinalCtaWords>
            <FinalCtaWord>Think.</FinalCtaWord>
            <FinalCtaWord>Try.</FinalCtaWord>
            <FinalCtaWord>Solve.</FinalCtaWord>
          </FinalCtaWords>
          <FinalCtaLine />
          <FinalCtaQuote>
            잔잔한 바다는 절대 숙련된 항해사를 만들어낼 수 없다.
          </FinalCtaQuote>
          <FinalCtaButton href="/rooms">
            시작하러가기
            <span aria-hidden>→</span>
          </FinalCtaButton>
        </FinalCtaInner>
      </FinalCta>
    </>
  );
}
