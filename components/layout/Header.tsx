"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
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
  gap: 24px;
`;

const NavLink = styled(Link)`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Logo href="/">CT</Logo>
      <Nav>
        <NavLink href="/">홈</NavLink>
        <NavLink href="/problems">문제</NavLink>
        <NavLink href="/rooms">방 목록</NavLink>
      </Nav>
    </StyledHeader>
  );
}
