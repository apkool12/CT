"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { fullBleed } from "../shared/styled";

const Section = styled.section`
  ${fullBleed}
  padding: 80px 24px 100px;
  background-image:
    url("/hero-effect.png"),
    linear-gradient(113deg, #ffffff 19.24%, #00263b 60.58%);
  background-size:
    cover,
    100% 100%;
  background-position:
    50% 50%,
    0 0;
  background-repeat: no-repeat, repeat;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
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
  margin-bottom: 48px;
`;

const Word = styled.span`
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.36);
  background: linear-gradient(180deg, #fff 0%, #c8ddff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 52px;
  font-style: normal;
  font-weight: 50;
  line-height: normal;
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  background: #ffffff;
  margin: 24px 0;
`;

const Quote = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  color: #ffffffad;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 140px;
  min-height: 52px;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #ffffff8f;
  border-radius: 50px;
  border: 0.1px solid #ffffff45;
  background: linear-gradient(90deg, #96b3a4 0%, #55699e 52.4%, #1285c7 100%);
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.15s;
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
          " 잔잔한 바다는
          <br />
          절대 숙련된 항해사를 만들어낼 수 없다. "
        </Quote>
        <Button href="/rooms">
          시작하러가기
          <span aria-hidden>→</span>
        </Button>
      </Inner>
    </Section>
  );
}
