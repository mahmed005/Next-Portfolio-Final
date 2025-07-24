"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import jsIcon from "../../assets/js.svg";
import tsIcon from "../../assets/ts.svg";
import reactIcon from "../../assets/react.svg";
import nodeIcon from "../../assets/node.svg";
import expressIcon from "../../assets/express.svg";
import dockerIcon from "../../assets/docker.svg";
import k8sIcon from "../../assets/k8s.png";
import mongoIcon from "../../assets/mongo.svg";
import sqlIcon from "../../assets/sql.svg";
import pythonIcon from "../../assets/python.svg";
import javaIcon from "../../assets/java.svg";
import htmlIcon from "../../assets/html.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import nextIcon from "../../assets/next.svg";
import gitIcon from "../../assets/git.svg";
import goIcon from "../../assets/go.svg";
import cIcon from "../../assets/c.svg";
import Image from "next/image";

const allSkills = [
  { name: "JavaScript", category: "Frontend", icon: jsIcon },
  { name: "TypeScript", category: "Frontend", icon: tsIcon },
  { name: "React", category: "Frontend", icon: reactIcon },
  { name: "Next.js", category: "Frontend", icon: nextIcon },
  { name: "HTML", category: "Frontend", icon: htmlIcon },
  { name: "Tailwind CSS", category: "Frontend", icon: tailwindIcon },
  { name: "Node.js", category: "Backend", icon: nodeIcon },
  { name: "Express", category: "Backend", icon: expressIcon },
  { name: "MongoDB", category: "Backend", icon: mongoIcon },
  { name: "SQL", category: "Backend", icon: sqlIcon },
  { name: "Python", category: "Backend", icon: pythonIcon },
  { name: "Java", category: "Backend", icon: javaIcon },
  { name: "Go", category: "Backend", icon: goIcon },
  { name: "C", category: "Backend", icon: cIcon },
  { name: "Docker", category: "DevOps", icon: dockerIcon },
  { name: "Kubernetes", category: "DevOps", icon: k8sIcon },
  { name: "Git/Github", category: "DevOps", icon: gitIcon },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("All");

  return (
    <Stack id="skills" spacing={3} alignItems={"center"} width={"100%"}>
      <Typography variant="h4" fontWeight={"bold"}>
        My Skills
      </Typography>
      <Stack
        direction={"row"}
        spacing={2}
        width={"90%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {["All", "Frontend", "Backend", "DevOps"].map((button) => (
          <Button
            key={button}
            sx={{
              textTransform: "none",
              color: selectedSkill === button ? "white" : "primary.main",
              borderColor: selectedSkill === button ? "grey.400" : "primary",
              backgroundColor:
                selectedSkill === button ? "primary.main" : "white",
            }}
            variant="outlined"
            onClick={() => setSelectedSkill(button)}
          >
            {button}
          </Button>
        ))}
      </Stack>
      <Stack
        direction={"row"}
        width={{ xs: "95%", lg: "80%" }}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          columnGap: 2,
          rowGap: 2,
        }}
      >
        {allSkills
          .filter((skill) =>
            selectedSkill === "All" ? true : skill.category === selectedSkill
          )
          .map((skill, index) => (
            <Stack
              key={index}
              alignItems={"center"}
              spacing={3}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 1,
                "&:hover": {
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                },
                padding: 2,
                width: "11rem",
                height: "7rem",
              }}
            >
              <Image src={skill.icon} alt={skill.name} width={35} height={35} />
              <Typography fontWeight={"500"} variant="body1">
                {skill.name}
              </Typography>
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
}
