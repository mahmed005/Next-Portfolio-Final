"use client";

import Stack from "@mui/material/Stack";
import { Typography, Box } from "@mui/material";
import { useEffect, useRef } from "react";

import CustomSwiper from "./CustomSwiper";

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (cardContainerRef.current) {
      observer.observe(cardContainerRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      if (cardContainerRef.current) {
        observer.unobserve(cardContainerRef.current);
      }
    };
  }, []);

  return (
    <>
      <Stack id="projects" width={"100%"} alignItems={"center"} spacing={3}>
        <Stack
          ref={headingRef}
          className="opacity-0"
          width={"100%"}
          alignItems="center"
          spacing={1}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            display={"flex"}
            alignItems="center"
            gap={"0.6rem"}
            color={"text.primary"}
          >
            My
            <Typography
              fontSize={{ xs: "1.25rem", lg: "2.125rem" }}
              component="span"
              color="primary.main"
            >
              Projects
            </Typography>
          </Typography>
          <Typography
            fontSize={"1.125rem"}
            variant="body2"
            color={"text.secondary"}
            textAlign="center"
            width={"75%"}
          >
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </Typography>
        </Stack>
        <Box
          ref={cardContainerRef}
          className="opacity-0"
          sx={{
            width: "100%",
            position: "relative",
          }}
        >
          <CustomSwiper />
        </Box>
      </Stack>
    </>
  );
}
