"use client";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useState, useContext } from "react";
import { ColorModeContext } from "../theme";

const MobileHeader = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (val: boolean) => () => setOpen(val);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        padding: 1.5,
        display: {
          xs: "flex",
          md: "none",
        },
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        backgroundColor:
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.8)"
            : "rgba(18,18,18,0.8)",
        backdropFilter: "blur(8px)",
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h6"
        color="primary"
        fontWeight="bold"
        fontSize={{ xs: "1.1rem", sm: "1.25rem" }}
      >
        Ahmed&apos;s Portfolio
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={toggleColorMode}>
          {mode === "dark" ? (
            <LightModeOutlinedIcon sx={{ color: "primary.main" }} />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        {isXs && (
          <IconButton onClick={toggleDrawer(true)} aria-label="Menu">
            <MenuIcon sx={{ fontSize: 26 }} />
          </IconButton>
        )}
      </Box>

      {/* Drawer menu */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "75%",
            maxWidth: 300,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography fontWeight="bold" color="primary">
            Menu
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              component="a"
              href={item.href}
              onClick={toggleDrawer(false)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(37, 118, 211, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1rem",
                  color: "primary.main",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileHeader;
