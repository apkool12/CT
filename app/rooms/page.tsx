"use client";

import styled from "@emotion/styled";

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
`;

export default function RoomsPage() {
  return (
    <>
      <Title>방 목록</Title>
      <p style={{ marginTop: "0.5rem", color: "#888" }}>
        방 생성·입장 기능 구현 후 목록이 표시됩니다.
      </p>
    </>
  );
}
