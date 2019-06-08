import React from "react";
import { ThemeProvider, theme } from "rasatech-design-system";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);