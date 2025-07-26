"use client";

import { Stack } from "@mui/material";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GetInTouch from "./components/GetInTouch";

export default function Page() {
  return (
    <Stack width={"100%"} spacing={4}>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <GetInTouch />
    </Stack>
  );
}
