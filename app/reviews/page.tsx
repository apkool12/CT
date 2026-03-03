"use client";

import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
`;

export default function ReviewsPage() {
  return (
    <>
      <Title>후기</Title>
      <p style={{ marginTop: "0.5rem", color: "#888" }}>
        스터디·코딩테스트 후기가 표시됩니다.
      </p>
    </>
  );
}
