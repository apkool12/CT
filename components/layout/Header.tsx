"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 40px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>`
  font-size: 1.125rem;
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.foreground : theme.colors.muted};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LoginButton = styled.button`
  font-size: 1.0625rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.muted};
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 4px;
  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const SignUpButton = styled.button`
  font-size: 1.0625rem;
  font-weight: 500;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  padding: 10px 24px;
  &:hover {
    opacity: 0.9;
  }
`;

export function Header() {
  const pathname = usePathname();

  return (
    <StyledHeader>
      <Logo href="/">CT</Logo>
      <Nav>
        <NavLink href="/" isActive={pathname === "/"}>
          홈
        </NavLink>
        <NavLink href="/rooms" isActive={pathname === "/rooms"}>
          방 목록
        </NavLink>
        <NavLink href="/reviews" isActive={pathname === "/reviews"}>
          후기
        </NavLink>
      </Nav>
      <AuthGroup>
        <LoginButton type="button">로그인</LoginButton>
        <SignUpButton type="button">회원가입</SignUpButton>
      </AuthGroup>
    </StyledHeader>
  );
}
