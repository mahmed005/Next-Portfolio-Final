"use client";

import {
  Box,
  Button,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ss1 from "../../assets/SS-1.jpg";
import ss2 from "../../assets/SS-2.jpg";
import ss3 from "../../assets/SS-3.jpg";
import ss4 from "../../assets/SS-4.jpg";
import bs2 from "../../assets/bs2.png";
import bs1 from "../../assets/bs1.png";
import bs3 from "../../assets/bs3.png";
import bs4 from "../../assets/bs4.png";
import bs5 from "../../assets/bs5.png";
import bs10 from "../../assets/bs10.png";
import bs11 from "../../assets/bs11.png";
import bs12 from "../../assets/bs12.png";
import bs6 from "../../assets/bs6.png";
import bs7 from "../../assets/bs7.png";
import bs8 from "../../assets/bs8.png";
import bs9 from "../../assets/bs9.png";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";

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
  {
    title: "TaleShop - Online Bookstore",
    description:
      "A full-featured online bookstore with user and admin dashboards, cart system, and secure authentication.",
    pictures: [bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8, bs9, bs10, bs11, bs12],
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    githubLink: "https://github.com/Ch-Daniyal-Akhtar/mern-book-app",
  },
  {
    title: "TaleShop - Online Bookstore",
    description:
      "A full-featured online bookstore with user and admin dashboards, cart system, and secure authentication.",
    pictures: [bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8, bs9, bs10, bs11, bs12],
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    githubLink: "https://github.com/Ch-Daniyal-Akhtar/mern-book-app",
  },
  {
    title: "TaleShop - Online Bookstore",
    description:
      "A full-featured online bookstore with user and admin dashboards, cart system, and secure authentication.",
    pictures: [bs1, bs2, bs3, bs4, bs5, bs6, bs7, bs8, bs9, bs10, bs11, bs12],
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    githubLink: "https://github.com/Ch-Daniyal-Akhtar/mern-book-app",
  },
];

export default function CustomSwiper() {
  const xsBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [startIndex, setStartIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);

  let autoColumns = "calc(33.333% - 16px)";
  if (mdBreakpoint) autoColumns = "calc(50% - 16px)";
  if (xsBreakpoint) autoColumns = "calc(100% - 16px)";

  let endIndex = startIndex + 3;
  if (mdBreakpoint) endIndex = startIndex + 2;
  if (xsBreakpoint) endIndex = startIndex + 1;

  const openGallery = (images: any, startIndex = 0) => {
    setSelectedProjectImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProjectImages([]);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProjectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProjectImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (!isGalleryOpen) return;

      switch (e.key) {
        case "Escape":
          closeGallery();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isGalleryOpen, nextImage, prevImage]);

  const isLeftButtonDisabled = startIndex === 0;
  const isRightButtonDisabled = endIndex >= allProjects.length;

  const handleLeftButtonClick = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightButtonClick = () => {
    if (endIndex >= allProjects.length) return;
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  function listener(currStart: number) {
    if (containerRef.current === null) return;
    const cardElemet = containerRef.current.querySelector("div");
    if (cardElemet === null) return;
    setTranslateValue(
      -currStart * (cardElemet.getBoundingClientRect().width + 32)
    );
  }

  useEffect(() => {
    listener(startIndex);
  }, [startIndex]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      listener(startIndex);
    });

    return () => {
      window.removeEventListener("resize", () => {
        listener(startIndex);
      });
    };
  }, [startIndex]);

  return (
    <>
      {isGalleryOpen &&
        selectedProjectImages.length > 0 &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-screen z-[1000] bg-black">
            {/* Header with close button and counter */}
            <div className="absolute top-0 w-screen left-0 right-0 z-[1000] bg-black flex justify-between items-center p-4">
              <div className="text-white/80 text-sm font-medium">
                {currentImageIndex + 1} / {selectedProjectImages.length}
              </div>
              <button
                onClick={closeGallery}
                className="bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors text-white"
                aria-label="Close gallery"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main image container */}
            <div className="flex items-center justify-center h-full p-4">
              <div className="relative max-w-7xl max-h-full flex items-center justify-center">
                <Image
                  src={selectedProjectImages[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  style={{ maxHeight: "calc(100vh - 120px)" }}
                />
              </div>
            </div>

            {/* Navigation arrows */}
            {selectedProjectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors text-white shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors text-white shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Thumbnail strip at bottom */}
            {selectedProjectImages.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                  {selectedProjectImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? "border-white shadow-md"
                          : "border-white/30 hover:border-white/60"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-1000" onClick={closeGallery} />
          </div>,
          document.getElementById("portal") as Element
        )}
      <Stack
        sx={{
          width: "100%",
          px: 4,
        }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={3}
      >
        <IconButton
          onClick={handleLeftButtonClick}
          disabled={isLeftButtonDisabled}
          sx={{
            color: "primary.main",
            borderRadius: "50%",
            backgroundColor: "background.paper",
            width: "4rem",
            height: "4rem",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Stack
          width={{
            xs: "95%",
            md: "80%",
          }}
          overflow={"hidden"}
        >
          <Box
            ref={containerRef}
            sx={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: autoColumns,
              gap: "32px",
              gridTemplateRows: "1fr",
              transform: `translateX(${translateValue}px)`,
              transition: "all 0.2s",
            }}
          >
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-md h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <Box sx={{ position: "relative", height: 180 }}>
                  <Image
                    src={project.pictures[0]}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: "cover",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.description}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={0.5} mb={2}>
                    {project.technologies.map((t, i) => (
                      <Chip
                        key={i}
                        label={t}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <Box mt="auto" display="flex" justifyContent="center" gap={1}>
                    <IconButton
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      aria-label="GitHub"
                    >
                      <GitHubIcon />
                    </IconButton>

                    <Button
                      variant="text"
                      size="small"
                      onClick={() => openGallery(project.pictures, 0)}
                    >
                      Gallery
                    </Button>
                  </Box>
                </CardContent>
              </div>
            ))}
          </Box>
        </Stack>
        <IconButton
          onClick={handleRightButtonClick}
          disabled={isRightButtonDisabled}
          sx={{
            color: "primary.main",
            borderRadius: "50%",
            backgroundColor: "background.paper",
            width: "4rem",
            height: "4rem",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </>
  );
}
