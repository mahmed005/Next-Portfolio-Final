"use client";

import { Box, Stack, Typography } from "@mui/material";

export default function DomainCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.JSX.Element;
}): React.JSX.Element {
  return (
    <Stack
      sx={{
        backgroundColor: "#1F67BA",
        "&:hover": {
          backgroundColor: "#1A5A9C",
          transition: "background-color 0.3s ease",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
      padding={1.5}
      borderRadius={2}
      alignItems={"center"}
      direction={"row"}
      spacing={2}
    >
      <Box color={"white"} marginTop={"0.5rem"}>
        {icon}
      </Box>
      <Stack spacing={0.5}>
        <Typography
          variant="body1"
          fontSize={"1.125rem"}
          fontWeight={"bold"}
          color="white"
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.8)",
          }}
          color="white"
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
