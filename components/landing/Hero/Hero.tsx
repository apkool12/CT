"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/app/assets/landing/hero.png";
import { fullBleed } from "../shared/styled";

const HeroSection = styled.section`
  ${fullBleed}
  padding: 72px 24px 100px;
  background-image: url("/hero-effect.png"),
    linear-gradient(180deg, #291d23 0%, #3f9dd3 65%, #ffffff 100%);
  background-size: cover, 100% 100%;
  background-position: 50% 50%, 0 0;
  background-repeat: no-repeat, repeat;
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
  margin-top: 92px;
  display: block;
  font-size: 3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 16px;
`;

const HeroBrandGradient = styled.span`
  background: linear-gradient(180deg, #f4a6b3 0%, #3fa3d9 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroTitle = styled.h1`
  font-size: 6.2rem;
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
`;

const HeroDesc = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  line-height: 1.7;
`;

const HeroDescHighlight = styled.span`
  flex-shrink: 0;
  width: 85px;
  height: 1.25em;
  margin-left: -5px;
  background: linear-gradient(90deg, #f1b3bb 0%, #64b0db 100%);
  border-radius: 2px;
`;

const HeroDescLabel = styled.span`
  margin-left: -89px;
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
`;

const HeroCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: -14px;
  margin-top: 28px;
  padding: 17px 105px;
  min-height: 48px;
  font-size: 1.2rem;
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

const HeroPreviewWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  transform: translate(60px, 120px);
`;

const HeroPreviewBg = styled.div`
  position: absolute;
  inset: 0;
  background: #fff;
  border-top-left-radius: 50px;
  transform: translate(-10px, -10px);
  z-index: 0;
`;

const HeroPreview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  box-shadow: -3px -3px 2px 0 rgba(0, 0, 0, 0.25);
  border-top-left-radius: 50px;
  overflow: hidden;
  z-index: 1;
  & img {
    object-fit: cover;
  }
`;

export function Hero() {
  return (
    <HeroSection>
      <HeroInner>
        <HeroContent>
          <HeroBrand>
            <HeroBrandGradient>AI</HeroBrandGradient>go
          </HeroBrand>
          <HeroTitle>
            알고 풀면,
            <br />
            더 재밌습니다
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
        <HeroPreviewWrap>
          <HeroPreviewBg aria-hidden />
          <HeroPreview>
            <Image
              src={heroImage}
              alt="aIgo 코딩테스트 플랫폼 일러스트"
              fill
            />
          </HeroPreview>
        </HeroPreviewWrap>
      </HeroInner>
    </HeroSection>
  );
}
