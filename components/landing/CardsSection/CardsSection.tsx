"use client";

import Image from "next/image";
import styled from "@emotion/styled";

import cardEffect from "@/app/assets/landing/card-effect.png";
import RemindIcon from "@/app/assets/landing/svg/Remind.svg";
import RoomIcon from "@/app/assets/landing/svg/Room_CJ.svg";
import ShareIcon from "@/app/assets/landing/svg/Share.svg";

const FLOW_CARDS = [
  {
    position: "top" as const,
    badge: { gradient: "알고", rest: ", 쓰자" } as const,
    title: "방 생성 / 입장",
    desc: "스터디원과 함께 문제 풀이방에 참여합니다.",
    icon: RoomIcon,
  },
  {
    position: "mid" as const,
    badge: null,
    title: "진행상황 공유",
    desc: "누가 풀었는지, 어디서 막혔는지 실시간으로 확인합니다.",
    icon: ShareIcon,
  },
  {
    position: "bottom" as const,
    badge: null,
    title: "복습",
    desc: "풀이 기록을 남기고, 다음 스터디에 사용합니다.",
    icon: RemindIcon,
  },
];

const Section = styled.section`
  --flow-card-icon-size: 140px;
  --flow-card-icon-margin-top: 32px;
  --flow-card-icon-margin-bottom: 0;
  --flow-card-icon-offset-x: 0;
  --flow-card-icon-offset-y: 60px;

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

const FlowCardWrap = styled.div<{ $position: "top" | "mid" | "bottom" }>`
  position: relative;
  overflow: visible;
  width: min(670px, 100%);
  @media (min-width: 670px) {
    position: absolute;
    width: min(650px);
    ${({ $position }) => {
      if ($position === "top")
        return `
          left: -2.4%;
          top: -10%;
          z-index: 1;
        `;
      if ($position === "mid")
        return `
          left: 77%;
          top: 140%;
          transform: translate(-50%, -50%);
          z-index: 2;
        `;
      return `
          left: -2.4%;
          bottom: -180%;
          z-index: 3;
        `;
    }}
  }
`;

const FlowCardBg = styled.div<{ $position: "top" | "mid" | "bottom" }>`
  position: absolute;
  inset: 0;
  background: #fff;
  z-index: 0;
  border-radius: 30px;
  @media (min-width: 670px) {
    ${({ $position }) => {
      if ($position === "top")
        return "border-radius: 30px 0 0 30px; transform: translate(10px, 15px); box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);";
      if ($position === "mid")
        return "border-radius: 0 30px 0 0; transform: translate(-10px, 15px); box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);";
      return "border-radius: 30px 0 0 30px; transform: translate(10px, 15px); box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);";
    }}
  }
`;

const FlowCard = styled.article<{ $position: "top" | "mid" | "bottom" }>`
  position: relative;
  overflow: hidden;
  padding: 96px 48px;
  border-radius: 30px;
  text-align: ${({ $position }) => ($position === "mid" ? "right" : "left")};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  color: #fff;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: url(${cardEffect.src});
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    opacity: 0.47;
    pointer-events: none;
    border-radius: inherit;
  }
  @media (min-width: 670px) {
    ${({ $position }) => {
      if ($position === "top")
        return "border-radius: 30px 0 0 30px; background: linear-gradient(180deg, #0297BE 0%, #FFF 100%);";
      if ($position === "mid")
        return "border-radius: 0 30px 0 0; background: linear-gradient(180deg, #025585 0%, #FFF 100%);";
      return "border-radius: 0 0 0 30px; background: linear-gradient(180deg, #0260BE 0%, #FFF 100%);";
    }}
  }
`;

const FlowCardContent = styled.div`
  position: relative;
  z-index: 1;
  transform: translateY(-60px);
`;

const FlowCardBadge = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
`;

const FlowCardBadgeHighlight = styled.span`
  padding: 4px 8px;
  background: linear-gradient(90deg, #f1b3bb 39.24%, #ffffff17 82.28%);
  border-radius: 4px;
`;

const FlowCardTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 8px;
  color: #fff;
`;

const FlowCardDesc = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 24px;
`;

const FlowCardIcon = styled.div<{ $align: "left" | "right" }>`
  display: flex;
  justify-content: ${({ $align }) =>
    $align === "right" ? "flex-end" : "flex-start"};
  margin-top: var(--flow-card-icon-margin-top);
  margin-bottom: var(--flow-card-icon-margin-bottom);
  transform: translate(
    var(--flow-card-icon-offset-x, 0),
    var(--flow-card-icon-offset-y, 0)
  );
`;

const FlowCardIconImage = styled.div`
  width: var(--flow-card-icon-size);
  height: var(--flow-card-icon-size);
  position: relative;
  flex-shrink: 0;

  & img {
    object-fit: contain;
  }
`;

export function CardsSection() {
  return (
    <Section data-flow-cards>
      <CardsWrapper>
        {FLOW_CARDS.map((card) => (
          <FlowCardWrap key={card.title} $position={card.position}>
            <FlowCardBg $position={card.position} aria-hidden />
            <FlowCard $position={card.position}>
              <FlowCardContent>
                {card.badge && (
                  <FlowCardBadge>
                    <FlowCardBadgeHighlight>
                      {card.badge.gradient}
                    </FlowCardBadgeHighlight>
                    {card.badge.rest}
                  </FlowCardBadge>
                )}
                <FlowCardTitle>{card.title}</FlowCardTitle>
                <FlowCardDesc>{card.desc}</FlowCardDesc>
                <FlowCardIcon
                  $align={card.position === "mid" ? "right" : "left"}
                >
                  <FlowCardIconImage>
                    <Image src={card.icon} alt="" fill />
                  </FlowCardIconImage>
                </FlowCardIcon>
              </FlowCardContent>
            </FlowCard>
          </FlowCardWrap>
        ))}
      </CardsWrapper>
    </Section>
  );
}
