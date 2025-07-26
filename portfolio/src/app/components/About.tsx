"use client";

import Stack from "@mui/material/Stack";
import Hero from "./Hero";
import { Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DomainCard from "./DomainCard";
import { useEffect, useRef } from "react";

const domains = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic web applications.",
    icon: <CodeIcon />,
  },
  {
    title: "DevOps",
    description: "Implementing CI/CD pipelines and cloud solutions.",
    icon: <BlindsClosedIcon />,
  },
  {
    title: "UI/UX Design",
    description: "Creating user-friendly interfaces and experiences.",
    icon: <DesignServicesIcon />,
  },
];

export default function About() {
  const headingRef = useRef(null);
  const leftSectionRef = useRef(null);
  const RightSectionRef = useRef(null);

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

    const elements = [
      headingRef.current,
      leftSectionRef.current,
      RightSectionRef.current,
    ];

    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <Stack
      id="about"
      sx={{
        backgroundColor: "primary.main",
      }}
      spacing={3}
      width={"100%"}
      alignItems="center"
      paddingY={2}
    >
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
          color={"white"}
        >
          About Me
        </Typography>
        <Typography
          fontSize={"1.125rem"}
          variant="body2"
          color={"white"}
          textAlign="center"
          width={"75%"}
        >
          Get to know me
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        gap={{ xs: 5, md: 0 }}
        justifyContent={"space-between"}
        width={{ xs: "95%", md: "90%" }}
        paddingX={2}
      >
        <Stack
          ref={leftSectionRef}
          className="opacity-0"
          width={{ xs: "100%", md: "48%" }}
          spacing={1}
        >
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="h5"
            fontWeight={"bold"}
            color="white"
          >
            Web Developer and DevOps Enthusiast
          </Typography>
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="body1"
            color="rgba(255,255,255,0.8)"
            fontSize={"1rem"}
          >
            With Over 2+ years of experience in web development, I specialize in
            creating dynamic and responsive web applications. My expertise lies
            in both front-end and back-end technologies, allowing me to build
            complete solutions that are efficient and user-friendly.
          </Typography>
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="body1"
            color="rgba(255,255,255,0.8)"
          >
            I am constantly exploring new technologies and best practices to
            enhance my skills and deliver high-quality work. Let's connect and
            discuss how I can contribute to your team!
          </Typography>
        </Stack>
        <Stack
          ref={RightSectionRef}
          className="opacity-0"
          width={{ xs: "100%", md: "48%" }}
          spacing={2}
        >
          <Typography
            width={"100%"}
            textAlign={"center"}
            variant="h5"
            fontWeight={"bold"}
            color="white"
          >
            My Domains Of Expertise
          </Typography>
          <Stack alignItems={"center"} spacing={1} width={"100%"}>
            {domains.map((domain, index) => (
              <DomainCard {...domain} key={index} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
