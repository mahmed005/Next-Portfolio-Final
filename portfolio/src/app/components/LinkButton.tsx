"use client";

import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import Link from "next/link";

export default function LinkButton({
  href,
  text,
  classes,
}: {
  href: string;
  text: string;
  classes?: SxProps<Theme>;
}): React.JSX.Element {
  return (
    <Link href={href}>
      <Button
        variant="contained"
        sx={{
          ...classes,
          textTransform: "none",
        }}
      >
        {text}
      </Button>
    </Link>
  );
}
