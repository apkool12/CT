"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

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
  background: linear-gradient(180deg, #291d23 0%, #3f9dd3 65%, #ffffff 100%);
  margin-bottom: -48px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const HeroInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 56px;
  }
`;

const HeroContent = styled.div``;

const HeroBrand = styled.span`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 16px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.35;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  font-style: normal;
  font-weight: 900;
`;

const HeroDescBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const HeroDescHighlight = styled.span`
  flex-shrink: 0;
  width: 70px;
  height: 1.25em;
  margin-left: -5px;
  background: linear-gradient(90deg, #f1b3bb 0%, #64b0db 100%);
  border-radius: 2px;
`;

const HeroDescLabel = styled.span`
  margin-left: -74px;
  font-size: 0.9375rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
`;

const HeroDesc = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  line-height: 1.7;
`;

const HeroCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: -14px;
  margin-top: 28px;
  padding: 14px 73px;
  min-height: 48px;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  border-radius: 50px;
  border: 0.1px solid #ffffff74;
  background: linear-gradient(90deg, #3fa3d9 0%, #a8c7e3 52.4%, #f4a6b3 100%);
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.15s;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`;

const HeroPreview = styled.div`
  aspect-ratio: 4/3;
  background: #fff;
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 260px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
`;

// ========== Feature cards (overlapping) ==========
const CardsSection = styled.section`
  padding: 64px 24px 80px;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
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
  background: linear-gradient(113deg, #ffffff 19.24%, #00263b 60.58%);
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
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.36);
  background: linear-gradient(180deg, #fff 0%, #c8ddff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

const FinalCtaLine = styled.hr`
  border: none;
  height: 1px;
  background: #ffffff;
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
  transition:
    opacity 0.2s,
    transform 0.15s;
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
            <HeroTitle>
              알고 풀면,
              <br />더 재밌습니다
            </HeroTitle>
            <HeroDescBlock>
              <HeroDescHighlight aria-hidden />
              <HeroDescLabel>코딩테스트 플랫폼.</HeroDescLabel>
            </HeroDescBlock>
            <HeroDesc>
              문제를 함께 풀고, 채팅으로 소통하고, 실시간 랭킹으로 경쟁하세요.
            </HeroDesc>
            <HeroCTA href="/rooms">
              시작하러가기
              <span aria-hidden>→</span>
            </HeroCTA>
          </HeroContent>
          <HeroPreview>
            <Image
              src="/hero-illustration.png"
              alt="aIgo 코딩테스트 플랫폼 일러스트"
              width={520}
              height={390}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              priority
            />
          </HeroPreview>
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
