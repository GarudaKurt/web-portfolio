"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Aboutme = () => {
  const workExperience = [
    {
      title: "Junior Firmware Engineer",
      company: "Lexmark",
      location: "Cebu City",
      type: "Full Time",
      tech: "Embedded C/C++, Python, CMake, Git, Gitlab, Gerrit, Coverity, Valgrind, Jenkins, Bash/Shell Scripting, Linux",
      period: "August 2022 - Present",
    },
    {
      title: "Software Engineer",
      company: "Freelancer",
      location: "Cebu City",
      type: "Parttime",
      tech: "HTML5, CSS3, Bootstrap, ReactJS, TypeScript, NextJS, NodeJS, ExpressJS, Python, Django, RESTAPI, OOP, Java, C#, Arduino, C++, SQLite, MySQL, Firebase",
      period: "November 2022 - Present",
    },
    {
      title: "University Working Scholar",
      company: "University Of Cebu",
      location: "Cebu City",
      type: "Fulltime",
      period: "April 2018 - Dec 2021",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16">
      {/* About Me */}
      <h2 className="text-3xl md:text-5xl bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-300 bg-clip-text text-transparent font-bold font-montserrat text-start mb-8">
        ABOUT ME
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="aboutme">
          <AccordionTrigger className="text-xl font-semibold font-montserrat text-secondary dark:text-gray-300 text-justify leading-relaxed">
            Learn More
          </AccordionTrigger>
          <AccordionContent className="text-secondary dark:text-gray-300 font-montserrat font-bold text-lg text-justify mt-2">
            I have three years of industry experience in C/C++ development,
            primarily focused on embedded systems. I am also a self-taught web
            developer, driven by a strong passion for front-end and full-stack
            development. I have gained hands-on experience with modern
            frameworks such as React.js and Next.js through freelance projects,
            as well as back-end development using Node.js, Express.js, and the
            Django framework (Python) for building RESTful APIs. Additionally, I
            have experience with React Native (Expo) for cross-platform mobile
            app development, and prior exposure to Delphi and C# for desktop
            applications. Beyond development, I enjoy mentoring students on
            their final-year projects in areas such as Embedded Systems, IoT,
            AI, web applications, and mobile app development.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Work Experience */}
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mt-12 mb-8 text-primary dark:text-white">
        Work Experience
      </h2>
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold font-montserrat text-primary dark:text-white">
                  {job.title}
                </h3>
                <div className="flex items-center font-montserrat text-secondary dark:text-gray-300 text-sm mt-1">
                  <Building2 size={14} className="mr-1" /> {job.company}
                  <MapPin size={14} className="ml-4 mr-1" /> {job.location}
                </div>
              </div>
              <Badge
                variant="secondary"
                className={
                  job.type === "Full Time"
                    ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200"
                    : "bg-green-100 text-green-700 dark:bg-green-600 dark:text-green-100"
                }
              >
                {job.type}
              </Badge>
            </div>

            <div className="flex items-center font-montserrat text-secondary dark:text-gray-300 text-sm mt-2">
              <Calendar size={14} className="mr-1" /> {job.period}
            </div>

            {job.tech && (
              <div className="flex flex-wrap items-center font-montserrat mt-2 gap-2">
                <span className="text-sm font-semibold text-secondary dark:text-gray-300">
                  TechStack:
                </span>
                {job.tech.split(",").map((techItem, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-secondary dark:text-gray-300 font-montserrat border-gray-300 dark:border-gray-500"
                  >
                    {techItem.trim()}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mt-12 mb-8 text-primary dark:text-white">
        Education
      </h2>
      <div className="border-b pb-4">
        <h3 className="text-lg font-bold font-montserrat text-secondary dark:text-gray-300">
          Bachelor of Science in Computer Engineering
        </h3>
        <div className="flex flex-col font-montserrat font-semibold sm:flex-row sm:items-center text-secondary dark:text-gray-400 text-sm mt-2 gap-2">
          <div className="flex items-center">
            <MapPin size={14} className="mr-1" /> University of Cebu - Main
            Campus
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" /> April 2018 - July 2022
          </div>
        </div>
      </div>

      {/* Download Resume Section */}
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-2xl font-montserrat font-bold mb-4 text-primary dark:text-white">
          Download My Resume
        </h2>
        <p className="text-secondary dark:text-gray-300 font-montserrat font-semibold mb-4 text-center">
          Click the button below to download my resume in PDF format.
        </p>

        <a href="/resumes/aletada_resume.pdf" download>
          <Button
            variant="default"
            className="flex items-center gap-2 bg-pink-500 text-white hover:bg-pink-600"
          >
            <Download size={20} />
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Aboutme;
