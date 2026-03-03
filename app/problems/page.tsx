"use client";

import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
`;

export default function ProblemsPage() {
  return (
    <>
      <Title>문제</Title>
      <p style={{ marginTop: "0.5rem", color: "#888" }}>
        Solved.ac 연동 후 문제 목록이 표시됩니다.
      </p>
    </>
  );
}
