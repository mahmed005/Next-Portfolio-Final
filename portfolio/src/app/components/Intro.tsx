"use client";

import Stack from "@mui/material/Stack";
import Hero from "./Hero";
import LinkButton from "./LinkButton";

export default function Intro() {
  return (
    <Stack width={"100%"} alignItems="center" spacing={2}>
      <Hero
        headingNormal="Hi I'm"
        headingEmphasized="Muhammad Ahmed"
        subheading="I create stellar web experiences with modern technologies. Specializing in Full Stack Development, I build interfaces that are both beautiful and functional."
      />
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <LinkButton text="View Projects" href="#projects" />
        <LinkButton text="Download Resume" href="/path/to/resume.pdf" />
      </Stack>
    </Stack>
  );
}
