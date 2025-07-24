"use client";

import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import theme from "./theme";
import inter from "./fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen w-screen overflow-hidden">
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
                zIndex: 1000,
                backgroundColor: "transparent",
              }}
              component={"header"}
            >
              <Header />
            </Box>
            <Box flexGrow={1} marginTop={"20dvh"}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
