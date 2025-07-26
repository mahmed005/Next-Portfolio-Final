"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Hero({
  ref,
  headingNormal,
  headingEmphasized,
  subheading,
  color,
}: {
  ref?: React.Ref<HTMLDivElement>;
  headingNormal: string;
  headingEmphasized?: string;
  subheading?: string;
  color?: string;
}): React.JSX.Element {
  return (
    <Stack ref={ref} width={"100%"} alignItems="center" spacing={color ? 1 : 2}>
      <Typography
        variant="h4"
        fontWeight="bold"
        display={"flex"}
        alignItems="center"
        gap={"0.6rem"}
        className={"opacity-0 animate-fade-in"}
        color={color ? color : "text.primary"}
      >
        {headingNormal}
        {headingEmphasized && (
          <Typography
            fontSize={{ xs: "1.25rem", lg: "2.125rem" }}
            component="span"
            className="animate-fade-in-delay-1 opacity-0"
            color="primary.main"
          >
            {headingEmphasized}
          </Typography>
        )}
      </Typography>
      {subheading && (
        <Typography
          className="animate-fade-in-delay-2 opacity-0"
          fontSize={"1.125rem"}
          variant="body2"
          color={color ? color : "text.secondary"}
          textAlign="center"
          width={"75%"}
        >
          {subheading}
        </Typography>
      )}
    </Stack>
  );
}
