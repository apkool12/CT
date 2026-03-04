"use client";

import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    background: "#0a0a0a",
    foreground: "#ededed",
    primary: "#22c55e",
    muted: "#888",
    border: "#333",
  },
  radii: { sm: "4px", md: "6px", lg: "8px" },
  fontFamily: {
    sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
} as const;

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
