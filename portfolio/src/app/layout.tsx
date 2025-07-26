"use client";

import { Box, CssBaseline, useMediaQuery } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import { useModeTheme, ColorModeContext } from "./theme";
import inter from "./fonts";
import "./globals.css";
import React from "react";
import MobileHeader from "./components/MobileHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, mode, toggleColorMode] = useModeTheme();

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Ahmed's Portfolio</title>
        <link rel="icon" href="/pf.svg" />
      </head>
      <body className="min-h-screen max-w-screen overflow-y-auto overflow-x-hidden">
        <div id="portal"></div>
        <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              width={"100%"}
              height={"100vh"}
              display="flex"
              flexDirection="column"
            >
              <Box
                sx={{
                  position: "fixed",
                  top: "3dvh",
                  left: 0,
                  width: "100%",
                  height: "10dvh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 40,
                  backgroundColor: "transparent",
                }}
                component={"header"}
              >
                <Header />
                <MobileHeader />
              </Box>
              <Box flexGrow={1} marginTop={"20dvh"}>
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
