"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  LinkIcon,
  ImagePlayIcon,
  Github,
  ChevronLeft,
  ChevronRight,
  CodeSquareIcon,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "../gallery/mygallery";

const mockData = [
  {
    id: 1,
    title: "Bills Splitter Mobile Apps",
    link: "https://github.com/BinaryBloomVault/tractIt",
    live: "#",
    tech: "Figma, React, CSS3, React Native Expo, Zustand, Firebase",
    type: "StartUp Project",
    image: "/images/figma/billspliter/LoginScreen.png",
  },
  {
    id: 2,
    title: "Ferry Shuttle Booking System",
    link: "https://github.com/GarudaKurt/CTU-BOOKINGF_SYSTEM_FRONT_END",
    live: "https://ctu-booking-system-front-end.vercel.app/dashboard",
    tech: "Figma, NextJs, TypeScript, Tailwind, shadcnUI, Django, RestAPI, SQLite",
    type: "Clients Project",
    image: "/images/figma/bookings/schedules.png",
  },
  {
    id: 3,
    title: "Music Player App",
    link: "https://github.com/GarudaKurt/Music-Player/tree/test",
    live: "https://music-player-theta-one-93.vercel.app/playlist",
    tech: "ReactJs, CSS3, NodeJs, ExpressJs, SQLite",
    type: "Clients Project",
    image: "/images/figma/musicplayer/home.png",
  },
  {
    id: 4,
    title: "Toursim & Rental Services.",
    link: "https://github.com/GarudaKurt/nextjsWebApp/tree/main",
    live: "https://nextjs-web-app-eight.vercel.app/",
    tech: "NextJs, Tailwind, daisyUI, Zustand, Firebase Firestore",
    type: "Clients Project",
    image: "/images/figma/tourism/landing.png",
  },
  {
    id: 5,
    title: "Inventory System for EE Lab.",
    link: "https://github.com/GarudaKurt/UCMN-EE-STUDENTS-WEB-APP-INVENTORY",
    live: "https://ucmn-ee-students-web-app-inventory.vercel.app/",
    tech: "NextJS, TypeScript, Tailwind, shadcnUI, Zustand",
    type: "Clients Project",
    image: "/images/figma/inventory/add.png",
  },
  {
    id: 6,
    title: "Real State Landing Page",
    link: "https://github.com/GarudaKurt/REALSTATE-LANDING-PAGE",
    live: "https://realstate-landing-page-lirc.vercel.app/",
    tech: "NextJs, Tailwind, shadcnUI",
    type: "Clone Project",
    image: "/images/figma/realstate/landing.png",
  },
  {
    id: 7,
    title: "Anti-theft GPS Tracker Mobile App",
    link: "https://github.com/GarudaKurt/mobile_app_basic_screen_UI/tree/anti-theft",
    live: "#",
    tech: "React, React Native Expo, Zustand, Firebase Firestore, CSS3",
    type: "Client Project",
    image: "/images/projects/img_10.png",
  },
  {
    id: 8,
    title: "e-Wallet Mobile App",
    link: "https://github.com/GarudaKurt/mobile_app_basic_screen_UI/tree/eWallet",
    live: "#",
    tech: "React, React Native Expo, Zustand, Firebase Firestore, CSS3",
    type: "Client Project",
    image: "/images/projects/img_7.png",
  },
  {
    id: 9,
    title: "Arduino Based RC Boat Conveyor Waste Collector ",
    link: "https://github.com/GarudaKurt/UCMN-BARKO",
    live: "#",
    tech: "C++, Arduino",
    type: "Client Project",
    image: "/images/projects/img_8.png",
  },
  {
    id: 10,
    title: "Anti-Cheating Students Exam using AI",
    link: "https://github.com/GarudaKurt/UCMN-ANTI-CHEATING",
    live: "#",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, C++",
    type: "Client Project",
    image: "/images/projects/img_9.png",
  },
  {
    id: 11,
    title: "Smart Waste Sorting using AI",
    link: "https://github.com/GarudaKurt/SmartTrashBin-UCB",
    live: "#",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, C++",
    type: "Client Project",
    image: "/images/projects/img_10.png",
  },
  {
    id: 12,
    title: "Many more 30+ Embedded Projects",
    link: "https://github.com/GarudaKurt",
    live: "#",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, C++",
    type: "Client Project",
    image: "/images/projects/img_11.png",
  },
];

const Myprojects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  ); // Track which project is selected
  const visibleCount = 4;

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, mockData.length - visibleCount)
    );
  };

  const visibleProjects = mockData.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      {/* Header */}
      <div className=" bg-white dark:bg-black transition-colors duration-500 py-8 px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-500 bg-clip-text text-transparent font-bold font-montserrat text-center mb-8">
          PROJECTS
        </h2>
        <h2 className="flex justify-center text-center text-xl font-semibold font-montserrat text-gray-500">
          Things I&apos;ve built so far in Freelancing
        </h2>
      </div>

      {/* Project Cards */}
      <div className="flex bg-white dark:bg-black transition-colors duration-500 items-center gap-4 px-6 py-4">
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="hidden sm:flex p-2 bg-white rounded-full hover:bg-muted/80 disabled:opacity-50"
        >
          <ChevronLeft />
        </Button>

        <div className="overflow-hidden flex-1">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={startIndex}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {visibleProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-secondary p-6 transform hover:scale-105 hover:shadow-2xl"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative flex justify-center">
                    <div className="w-48 h-48 relative rounded-md overflow-hidden">
                      {" "}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill // fill the container
                        className="object-cover"
                        sizes="100%" // responsive sizing
                      />
                    </div>

                    {/* Overlay View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 rounded-md">
                      <Button
                        onClick={() => setSelectedProjectId(project.id)}
                        className="text-white border-white border px-4 py-2 hover:bg-white hover:text-black"
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Github className="w-4 h-4" />
                      <Link
                        href={project.link}
                        className="underline hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <ImagePlayIcon className="w-4 h-4" />
                      <Button
                        variant="link"
                        onClick={() => setSelectedProjectId(project.id)} // open any project's gallery
                        className="underline text-gray-300 hover:text-blue-400 p-0"
                      >
                        View Gallery
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <LinkIcon className="w-4 h-4" />
                      <Link
                        href={project.live}
                        className="underline hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CodeSquareIcon /> {project.tech}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Building2 /> {project.type}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= mockData.length}
          className="hidden sm:flex p-2 bg-white rounded-full hover:bg-muted/80 disabled:opacity-50"
        >
          <ChevronRight />
        </Button>
      </div>

      {/* Dialog Gallery */}
      {selectedProjectId && (
        <Projects
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </>
  );
};

export default Myprojects;
