"use client";

import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    background: "#faf8f5",
    foreground: "#1a1a1a",
    primary: "#22c55e",
    muted: "#6b6b6b",
    border: "#e5e2de",
    surface: "#ffffff",
  },
  radii: { sm: "4px", md: "6px", lg: "8px" },
  fontFamily: {
    sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
} as const;

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
