import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      foreground: string;
      primary: string;
      muted: string;
      border: string;
    };
    radii: { sm: string; md: string; lg: string };
    fontFamily: { sans: string };
  }
}
