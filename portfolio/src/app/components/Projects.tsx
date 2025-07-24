"use client";

import Stack from "@mui/material/Stack";
import Hero from "./Hero";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import ss1 from "../../assets/SS-1.jpg";
import ss2 from "../../assets/SS-2.jpg";
import ss3 from "../../assets/SS-3.jpg";
import ss4 from "../../assets/SS-4.jpg";

const allProjects = [
  {
    title: "StreamSphere - Video Streaming Platform",
    description:
      "A platform for uploading streaming videos with user authentication and video management as well as engagement features.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Tailwind CSS",
      "Redux",
    ],
    pictures: [ss1, ss2, ss3, ss4],
    githubLink: "https://github.com/TahaHanif2424/StreamSphere.git",
  },
];

export default function Projects() {
  return (
    <Stack alignItems={"center"} spacing={3}>
      <Hero
        headingNormal="My"
        headingEmphasized="Projects"
        subheading="Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience."
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"100%"}
        paddingX={2}
        spacing={3}
        flexWrap="wrap"
      >
        {allProjects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: 350,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
              borderRadius: 3,
              overflow: "hidden",
              transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": {
                transform: "translateY(-4px) scale(1.025)",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
              },
              background: "#fff",
            }}
          >
            <CardMedia
              sx={{ width: "100%", height: 180, position: "relative" }}
            >
              <Image
                src={project.pictures[0]}
                alt={project.title + " preview"}
                fill
                style={{ objectFit: "cover" }}
                sizes="350px"
                priority={index === 0}
              />
            </CardMedia>
            <CardContent
              sx={{
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                {project.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                ))}
              </Box>
              <Typography
                variant="h6"
                fontWeight={600}
                textAlign="center"
                gutterBottom
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 2 }}
              >
                {project.description}
              </Typography>
              <Box
                sx={{
                  mt: "auto",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <IconButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#222",
                    transition: "color 0.2s cubic-bezier(0.4,0,0.2,1)",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  aria-label="View on GitHub"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
