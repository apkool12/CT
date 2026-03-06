"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 40px;
  background: #1a1a1a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Logo = styled(Link)`
  font-size: 0.9375rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
  background: #2563eb;
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
      <Logo href="/">aIgo</Logo>
      <AuthGroup>
        <LoginButton type="button">로그인</LoginButton>
        <SignUpButton href="/rooms">회원가입</SignUpButton>
      </AuthGroup>
    </StyledHeader>
  );
}
