"use client";

import styled from "@emotion/styled";

const FLOW_CARDS = [
  {
    position: "top" as const,
    badge: "알고, 쓰자",
    title: "방 생성 / 입장",
    desc: "스터디원과 함께 문제 풀이방에 참여합니다.",
  },
  {
    position: "mid" as const,
    badge: null,
    title: "진행상황 공유",
    desc: "누가 풀었는지, 어디서 막혔는지 실시간으로 확인합니다.",
  },
  {
    position: "bottom" as const,
    badge: null,
    title: "복습",
    desc: "풀이 기록을 남기고, 다음 스터디에 사용합니다.",
  },
];

const Section = styled.section`
  padding: 64px 24px 770px;
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
  padding: 170px 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  color: #fff;
  width: min(670px, 100%);
  @media (min-width: 650px) {
    position: absolute;
    width: min(650px);
    ${({ $position }) => {
      if ($position === "top")
        return `
          border-radius: 30px 0 0 30px;
          background: linear-gradient(180deg, #0297BE 0%, #FFF 100%);
          left: -3%;
          top: -10%;
          z-index: 1;
        `;
      if ($position === "mid")
        return `
          border-radius: 0 30px 0 0;
          background: linear-gradient(180deg, rgba(2, 85, 133, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%);
          left: 77%;
          top: 110%;
          transform: translate(-50%, -50%);
          z-index: 2;
        `;
      return `
          border-radius: 0 0 0 30px;
          background: linear-gradient(180deg, #0260BE 0%, #FFF 100%);
          left: -3%;
          bottom: -160%;
          z-index: 3;
        `;
    }}
  }
`;

const FlowCardBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #f1b3bb 39.24%, #67c0d7 82.28%);
  border-radius: 4px;
  margin-bottom: 12px;
`;

const FlowCardTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #fff;
`;

const FlowCardDesc = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.2;
  font-weight: 200;
`;

export function CardsSection() {
  return (
    <Section>
      <CardsWrapper>
        {FLOW_CARDS.map((card) => (
          <FlowCard key={card.title} $position={card.position}>
            {card.badge && <FlowCardBadge>{card.badge}</FlowCardBadge>}
            <FlowCardTitle>{card.title}</FlowCardTitle>
            <FlowCardDesc>{card.desc}</FlowCardDesc>
          </FlowCard>
        ))}
      </CardsWrapper>
    </Section>
  );
}
