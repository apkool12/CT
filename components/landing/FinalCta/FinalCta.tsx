"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { fullBleed } from "../shared/styled";

const Section = styled.section`
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

const Inner = styled.div`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Words = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const Word = styled.span`
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

const Line = styled.hr`
  border: none;
  height: 1px;
  background: #ffffff;
  margin: 24px 0;
`;

const Quote = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 32px;
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  min-height: 52px;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #fff;
  border-radius: 50px;
  border: 0.5px solid #fff;
  background: linear-gradient(90deg, #96b3a4 0%, #55699e 52.4%, #1285c7 100%);
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

export function FinalCta() {
  return (
    <Section>
      <Inner>
        <Words>
          <Word>Think.</Word>
          <Word>Try.</Word>
          <Word>Solve.</Word>
        </Words>
        <Line />
        <Quote>
          잔잔한 바다는 절대 숙련된 항해사를 만들어낼 수 없다.
        </Quote>
        <Button href="/rooms">
          시작하러가기
          <span aria-hidden>→</span>
        </Button>
      </Inner>
    </Section>
  );
}
