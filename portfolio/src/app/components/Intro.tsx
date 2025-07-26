"use client";

import Stack from "@mui/material/Stack";
import Hero from "./Hero";
import LinkButton from "./LinkButton";
import { Button } from "@mui/material";

export default function Intro() {
  function handleCVDownload() {
    const link = document.createElement("a");
    link.href = "/Muhammad_Ahmed_CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Stack id="home" width={"100%"} alignItems="center" spacing={2}>
      <Hero
        headingNormal="Hi I'm"
        headingEmphasized="Muhammad Ahmed"
        subheading="I create stellar web experiences with modern technologies. Specializing in Full Stack Development, I build interfaces that are both beautiful and functional."
      />
      <Stack
        className="animate-fade-in-delay-3 opacity-0"
        direction={"row"}
        alignItems={"center"}
        spacing={2}
      >
        <LinkButton text="View Projects" href="#projects" />
        <Button
          onClick={handleCVDownload}
          sx={{
            textTransform: "none",
          }}
          variant="contained"
        >
          Download Resume
        </Button>
      </Stack>
    </Stack>
  );
}
