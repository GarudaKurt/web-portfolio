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
  Github,
  ChevronLeft,
  ChevronRight,
  CodeSquareIcon,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mockData = [
  {
    id: 1,
    title: "Bills Splitter Apps",
    link: "https://github.com/BinaryBloomVault/tractIt",
    live: "https://youtube.com",
    tech: "Figma, React, CSS3, React Native Expo, Zustand, Firebase",
    type: "StartUp Project",
    image: "/images/projects/img_1.png",
  },
  {
    id: 2,
    title: "Ferry Shuttle Booking System",
    link: "https://github.com/BinaryBloomVault/tractIt",
    live: "https://youtube.com",
    tech: "Figma, NextJs, TypeScript, Tailwind, shadcnUI, Django, RestAPI, Simple JWT, SQLite",
    type: "Clients Project",
    image: "/images/projects/img_2.png",
  },
  {
    id: 3,
    title: "Music Player App",
    link: "https://github.com/GarudaKurt/Music-Player/tree/test",
    live: "https://youtube.com",
    tech: "ReactJs, CSS3, NodeJs, ExpressJs, SQLite",
    type: "Clients Project",
    image: "/images/projects/img_3.png",
  },
  {
    id: 4,
    title: "Tourism Guide & Rental Services.",
    link: "https://github.com/GarudaKurt/nextjsWebApp/tree/main",
    live: "https://youtube.com",
    tech: "NextJs, Tailwind, daisyUI, Zustand, Firebase Firestore",
    type: "Clients Project",
    image: "/images/projects/img_4.png",
  },
  {
    id: 5,
    title: "Inventory System for EE Lab.",
    link: "https://github.com",
    live: "https://youtube.com",
    tech: "NextJS, TypeScript, Tailwind, shadcnUI, NodeJS, ExpressJS, SQLite",
    type: "Clients Project",
    image: "/images/projects/img_5.png",
  },
  {
    id: 6,
    title: "Real State landing page",
    link: "https://github.com",
    live: "https://youtube.com",
    tech: "React, TypeScript, Tailwind, shadcnUI",
    type: "Client Project",
    image: "/images/projects/img_6.png",
  },
  {
    id: 7,
    title: "Anti-theft GPS Tracker Mobile App",
    link: "https://github.com/GarudaKurt/mobile_app_basic_screen_UI/tree/anti-theft",
    live: "https://youtube.com",
    tech: "React, React Native Expo, Zustand, Firebase Firestore, CSS3",
    type: "Client Project",
    image: "/images/projects/img_7.png",
  },
  {
    id: 8,
    title: "e-Wallet Mobile App",
    link: "https://github.com/GarudaKurt/mobile_app_basic_screen_UI/tree/eWallet",
    live: "https://youtube.com",
    tech: "React, React Native Expo, Zustand, Firebase Firestore, CSS3",
    type: "Client Project",
    image: "/images/projects/img_6.png",
  },
  {
    id: 9,
    title: "Arduino Based RC Boat Conveyor Waste Collector ",
    link: "https://github.com/GarudaKurt/UCMN-BARKO",
    live: "https://youtube.com",
    tech: "C++, Arduino",
    type: "Client Project",
    image: "/images/projects/img_8.png",
  },
  {
    id: 10,
    title: "Anti-Cheating Students Exam using AI",
    link: "https://github.com/GarudaKurt/UCMN-ANTI-CHEATING",
    live: "https://youtube.com",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, C++",
    type: "Client Project",
    image: "/images/projects/img_9.png",
  },
  {
    id: 11,
    title: "Smart Waste Sorting using AI",
    link: "https://github.com/GarudaKurt/SmartTrashBin-UCB",
    live: "https://youtube.com",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, C++",
    type: "Client Project",
    image: "/images/projects/img_10.png",
  },
  {
    id: 12,
    title: "Many more 30+ Embedded Projects",
    link: "https://github.com/GarudaKurt",
    live: "https://youtube.com",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, C++",
    type: "Client Project",
    image: "/images/projects/img_11.png",
  },
];

const Myprojects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
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
      <div className="bg-galaxy py-8 px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-500 bg-clip-text text-transparent font-bold font-montserrat text-center mb-8">
          PROJECTS
        </h2>
        <h2 className="flex justify-center text-xl font-semibold font-montserrat text-gray-500">
          Things I've built so far in Freelancing
        </h2>
      </div>

      {/* Cards with side buttons */}
      <div className="flex bg-galaxy items-center gap-4 px-6 py-4">
        {/* Prev Button */}
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 bg-white rounded-full hover:bg-muted/80 disabled:opacity-50"
        >
          <ChevronLeft />
        </Button>

        {/* Cards */}
        <div className="overflow-hidden flex-1">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={startIndex} // re-renders animation on index change
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {visibleProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-secondary transition"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={150}
                      height={150}
                      className="rounded-md"
                    />
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
                    <div className="flex items-center font-monserrat gap-2 text-sm text-gray-300">
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
                    <div className="flex items-center font-monserrat gap-2 text-sm text-gray-300">
                      <CodeSquareIcon /> {project.tech}
                    </div>
                    <div className="flex items-center font-monserrat gap-2 text-sm text-gray-300">
                      <Building2 /> {project.type}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= mockData.length}
          className="p-2 bg-white rounded-full hover:bg-muted/80 disabled:opacity-50"
        >
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};

export default Myprojects;
