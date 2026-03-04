"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const Hero = styled.section`
  padding: 80px 0 140px;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary} 0%,
    #1a1a1a 100%
  );
  margin-bottom: -60px;
  border-bottom-left-radius: ${({ theme }) => `calc(${theme.radii.lg} + 10px)`};
  border-bottom-right-radius: ${({ theme }) =>
    `calc(${theme.radii.lg} + 10px)`};
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled.p`
  margin-top: 25px;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 520px;
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
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: ${({ theme }) => theme.radii.md};
  text-decoration: none;
  transition:
    opacity 0.2s,
    background 0.2s;
  line-height: 1.25;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Features = styled.section`
  padding: 84px 0 80px;
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
        <HeroTitle>지식에서 실력으로</HeroTitle>
        <HeroSubtitle>
          함께 풀고, 겨루고, 나누는
          <br />
          스터디 코딩테스트 플랫폼 Algo
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
