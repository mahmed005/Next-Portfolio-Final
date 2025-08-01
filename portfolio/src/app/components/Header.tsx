"use client";

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import Box from "@mui/material/Box";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.20)",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        display: {
          md: "flex",
          xs: "none",
        },
        paddingX: {
          xs: 1,
          sm: 2,
        },
        borderRadius: 4,
        width: {
          xs: "50%",
          sm: "35%",
          lg: "20%",
        },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          ".hover-text": {
            opacity: 0,
            pointerEvents: "none",
            display: "none",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
          ".none-hover-items": {
            opacity: 1,
            pointerEvents: "auto",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            display: "flex",
          },
          width: {
            xs: "95%",
            sm: "80%",
            lg: "60%",
          },
        },
        "& .none-hover-items": {
          display: "none",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        "& .hover-text": {
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      <Typography
        className="hover-text"
        variant="h6"
        fontSize={"1.25rem"}
        color="primary.main"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        Hover over me!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingY: 1,
        }}
        className="none-hover-items"
      >
        <Typography
          variant="h6"
          display={"flex"}
          alignItems={"center"}
          gap={"0.35rem"}
          className="none-hover-items"
          fontSize={{ xs: "1rem", lg: "1.25rem" }}
        >
          <Typography
            variant="body1"
            fontSize={{ xs: "1rem", lg: "1.25rem" }}
            color="primary.main"
          >
            Ahmed&apos;s
          </Typography>
          Portfolio
        </Typography>
        <List
          component={"nav"}
          className="none-hover-items"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: 0,
            "& .MuiListItem-root": {
              color: "primary.main",
              "&:hover": {
                backgroundColor: "rgba(37, 118, 211, 0.1)",
              },
            },
            "& .MuiTypography-root": {
              fontSize: { xs: "0.875rem", sm: "1rem" },
            },
          }}
        >
          <ListItem component={"a"} href="#home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={"a"} href="#about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component={"a"} href="#skills">
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem component={"a"} href="#projects">
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem component={"a"} href="#contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
        <IconButton className="none-hover-items" onClick={toggleColorMode}>
          {mode === "dark" && (
            <LightModeOutlinedIcon
              sx={{ color: "primary.main", fontSize: "1.5rem" }}
            />
          )}
          {mode === "light" && (
            <DarkModeOutlinedIcon sx={{ fontSize: "1.5rem" }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
