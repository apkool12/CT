"use client";

import { Header } from "./Header";
import { Container } from "./Container";

export function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
