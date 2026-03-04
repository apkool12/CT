"use client";

import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    background: "#fafafa",
    foreground: "#1a1a1a",
    primary: "#2563eb",
    muted: "#6b6b6b",
    border: "#e5e2de",
    surface: "#ffffff",
  },
  radii: { sm: "6px", md: "8px", lg: "12px" },
  fontFamily: {
    sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
} as const;

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
