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
import { useState, useEffect } from "react";
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
    title: "Classroom Manangement",
    link: "https://github.com/GarudaKurt/Music-Player/tree/test",
    live: "https://studentsattendace.vercel.app/signin",
    tech: "NextJs, Tailwind, shadcnUI, Firebase",
    type: "Clients Project",
    image: "/images/figma/classroom/image_3.png",
  },
  {
    id: 4,
    title: "Music Player App",
    link: "https://github.com/GarudaKurt/Music-Player/tree/test",
    live: "https://music-player-theta-one-93.vercel.app/playlist",
    tech: "ReactJs, CSS3, NodeJs, ExpressJs, SQLite",
    type: "Clients Project",
    image: "/images/figma/musicplayer/home.png",
  },
  {
    id: 5,
    title: "Toursim & Rental Services.",
    link: "https://github.com/GarudaKurt/nextjsWebApp/tree/main",
    live: "https://nextjs-web-app-eight.vercel.app/",
    tech: "NextJs, Tailwind, daisyUI, Zustand, Firebase Firestore",
    type: "Clients Project",
    image: "/images/figma/tourism/landing.png",
  },
  {
    id: 6,
    title: "Inventory System for EE Lab.",
    link: "https://github.com/GarudaKurt/UCMN-EE-STUDENTS-WEB-APP-INVENTORY",
    live: "https://ucmn-ee-students-web-app-inventory.vercel.app/",
    tech: "NextJS, TypeScript, Tailwind, shadcnUI, Zustand",
    type: "Clients Project",
    image: "/images/figma/inventory/add.png",
  },
  {
    id: 7,
    title: "Kiosk Machine Smart BMI IoT",
    link: "https://github.com/GarudaKurt/mandaue-shs-smart-bmi",
    live: "https://smartbmi.vercel.app/",
    tech: "NextJs, shadcnUI, firebase",
    type: "Client Project",
    image: "/images/figma/kioskbmi/img_1.png",
  },
  {
    id: 8,
    title: "Inventory Management Dashboard with Email Notification",
    link: "https://github.com/GarudaKurt/ctu-inventory-system",
    live: "https://inventorymanagement-git-main-garudakurts-projects.vercel.app/",
    tech: "NextJs, ShadcnUI, SQLite, NodeJs",
    type: "Client Project",
    image: "/images/figma/inventory-management/img_2.png",
  },
  {
    id: 9,
    title: "Smart Fan IoT Control",
    link: "https://github.com/GarudaKurt/UCB-IOT-SMART-FAN-CONTROL",
    live: "https://smartfancontrol.vercel.app/",
    tech: "NextJs, acernityUI, Firebase",
    type: "Client Project",
    image: "/images/figma/smartfan/image.png",
  },
  {
    id: 10,
    title: "Energy Monitoring IoT App",
    link: "https://github.com/GarudaKurt/ucmn-ee-energy-monitoring-iot-app",
    live: "https://ucmn-ee-energy-monitoring-iot-app.vercel.app/",
    tech: "NextJs, acernityUI, Firebase",
    type: "Client Project",
    image: "/images/figma/energymonitoring/image.png",
  },
  {
    id: 11,
    title: "Many more 50+ Embedded Projects",
    link: "https://github.com/GarudaKurt",
    live: "#",
    tech: "Python, Google Colab, Rasperry Pi, Arduino, ESP32, C++",
    type: "Client Project",
    image: "/images/projects/img_11.png",
  },
];

// Hook to get responsive visible count based on window width
const useVisibleCount = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);       
      else if (w < 1024) setVisibleCount(2); 
      else setVisibleCount(4);               
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCount;
};

const Myprojects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const visibleCount = useVisibleCount();

  useEffect(() => {
    setStartIndex((prev) =>
      Math.min(prev, Math.max(0, mockData.length - visibleCount))
    );
  }, [visibleCount]);

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
  const isAtStart = startIndex === 0;
  const isAtEnd = startIndex + visibleCount >= mockData.length;

  return (
    <div>
      {/* Header */}
      <div className="bg-black transition-colors duration-500 py-8 px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl bg-gradient-to-tr from-blue-500 via-orange-500 to-orange-500 bg-clip-text text-transparent font-bold font-montserrat text-center mb-8">
          PROJECTS
        </h2>
        <h2 className="flex justify-center text-center text-xl font-semibold font-montserrat text-gray-500">
          Things I&apos;ve built so far in Freelancing
        </h2>
      </div>

      {/* Project Cards */}
      <div className="flex bg-black items-center gap-2 sm:gap-4 px-2 sm:px-6 py-4">
        {/* Prev Button — visible on ALL screen sizes */}
        <Button
          onClick={handlePrev}
          disabled={isAtStart}
          className="flex-shrink-0 p-2 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full hover:bg-muted/80 disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        <div className="overflow-hidden flex-1 min-w-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={startIndex}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid gap-4 sm:gap-6"
              style={{
                gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
              }}
            >
              {visibleProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer border-0 bg-secondary p-3 sm:p-6 transform hover:scale-105 hover:shadow-2xl"
                >
                  <CardHeader className="p-0 pb-2 sm:pb-4">
                    <CardTitle className="text-sm sm:text-lg text-white font-semibold leading-snug">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative flex justify-center p-0 pb-2 sm:pb-4">
                    <div className="w-full aspect-square max-w-[10rem] sm:max-w-[12rem] relative rounded-md overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                      />
                    </div>

                    {/* Overlay View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 rounded-md">
                      <Button
                        onClick={() => setSelectedProjectId(project.id)}
                        className="text-white border-white border px-3 py-1 text-sm hover:bg-white hover:text-black"
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start gap-1 sm:gap-2 p-0">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <Link
                        href={project.link}
                        className="underline hover:text-blue-400 truncate"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </Link>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                      <ImagePlayIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <Button
                        variant="link"
                        onClick={() => setSelectedProjectId(project.id)}
                        className="underline text-gray-300 hover:text-blue-400 p-0 h-auto text-xs sm:text-sm"
                      >
                        View Gallery
                      </Button>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                      <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <Link
                        href={project.live}
                        className="underline hover:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </Link>
                    </div>
                    <div className="flex items-start gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                      <CodeSquareIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.tech}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
                      <Building2 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{project.type}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button — visible on ALL screen sizes */}
        <Button
          onClick={handleNext}
          disabled={isAtEnd}
          className="flex-shrink-0 p-2 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full hover:bg-muted/80 disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      {/* Dot indicators for mobile navigation */}
      <div className="flex justify-center gap-1.5 bg-black pb-4 sm:hidden">
        {Array.from({ length: Math.ceil(mockData.length / visibleCount) }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i * visibleCount > startIndex ? 1 : -1);
              setStartIndex(Math.min(i * visibleCount, mockData.length - visibleCount));
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === Math.floor(startIndex / visibleCount)
                ? "bg-orange-500"
                : "bg-gray-600"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {/* Dialog Gallery */}
      {selectedProjectId && (
        <Projects
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  );
};

export default Myprojects;