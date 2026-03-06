"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 64px;
  padding: 0 40px;
  background: #3d363f;
  border-radius: 0 0 30px 30px;
`;

const Spacer = styled.span`
  /* 빈 공간 - 그리드 균형용 */
`;

const Logo = styled(Link)`
  justify-self: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  color: rgba(255, 255, 255);
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  justify-self: end;
`;

const LoginButton = styled.button`
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  &:hover {
    color: #fff;
  }
`;

const SignUpButton = styled(Link)`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #fff;
  background: #206a96;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px 20px;
  text-decoration: none;
  line-height: 1.25;
  &:hover {
    opacity: 0.9;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Spacer />
      <Logo href="/">MOBICOM</Logo>
      <AuthGroup>
        <LoginButton type="button">로그인</LoginButton>
        <SignUpButton href="/rooms">회원가입</SignUpButton>
      </AuthGroup>
    </StyledHeader>
  );
}
