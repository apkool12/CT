"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const Hero = styled.section`
  padding: 80px 0 64px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.25;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled.p`
  margin-top: 12px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTA = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  padding: 12px 24px;
  min-height: 44px;
  box-sizing: border-box;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition: opacity 0.2s;
  line-height: 1.25;
  &:hover {
    opacity: 0.9;
  }
`;

const Features = styled.section`
  padding: 64px 0 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  align-items: start;
`;

const FeatureCard = styled.article`
  padding: 28px 24px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 8px;
`;

const FeatureDesc = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.5;
`;

export default function Home() {
  return (
    <>
      <Hero>
        <HeroTitle>함께 푸는 코딩테스트</HeroTitle>
        <HeroSubtitle>
          백준 문제로 스터디원과 실시간으로 경쟁하고, 채팅으로 힌트를 나누세요.
        </HeroSubtitle>
        <CTA href="/rooms">방 만들기</CTA>
      </Hero>
      <Features>
        <FeatureCard>
          <FeatureTitle>실시간 랭킹</FeatureTitle>
          <FeatureDesc>
            같은 방에서 푸는 동안 순위가 실시간으로 반영됩니다.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>실시간 채팅</FeatureTitle>
          <FeatureDesc>
            문제 풀이 중 힌트와 의견을 나누며 함께 성장할 수 있습니다.
          </FeatureDesc>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>백준 문제 연동</FeatureTitle>
          <FeatureDesc>
            Solved.ac·백준 문제를 활용해 다양한 난이도로 연습할 수 있습니다.
          </FeatureDesc>
        </FeatureCard>
      </Features>
    </>
  );
}
