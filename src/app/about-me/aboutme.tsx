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
      period: "August 2022 - October 1, 2025",
    },
    {
      title: "Software Developer",
      company: "Aldesa BPO Inc.",
      location: "Cebu City",
      type: "Fulltime",
      tech: "HTML5, CSS3, Bootstrap, Jquery, JavaScript, C# asp.net mvc, SqlServer, Postman",
      period: "October 6, 2026 - March 30, 2026",
    },
    {
      title: "Software Engineer",
      company: "Freelancer",
      location: "Cebu City",
      type: "Parttime",
      tech: "HTML5, CSS3, Bootstrap, ReactJS, TypeScript, NextJS, NodeJS, ExpressJS, Python, RESTAPI, OOP, C#,  C++, Delphi, SQLlite, SQLServer, Firebase",
      period: "November 2022 - Present",
    },
    {
      title: "Embedded Engineer",
      company: "Freelancer",
      location: "Cebu City",
      type: "Parttime",
      tech: "Arduino, ESP32, STM32, Raspberry Pi, IoT, AI Object detection",
      period: "November 2022 - Present",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16">
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
          <AccordionTrigger className="text-xl font-semibold font-montserrat text-white text-justify leading-relaxed">
            Learn More
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 font-montserrat font-bold text-lg text-justify mt-2">
     I have three years of industry experience in C/C++ backend development, primarily focused on embedded systems for Lexmark printers. In addition, I have six months of experience at Aldesa BPO Inc. as a Full-Stack Software Engineer, where I mainly worked on backend development and code maintenance for CRM web applications using the C# ASP.NET MVC framework.
Beyond my professional experience, I also mentor students on their final-year projects as part of my freelance work. I provide guidance in areas such as Embedded Systems, IoT, AI, web applications, and mobile app development.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Work Experience */}
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mt-12 mb-8 text-white">
        Work Experience
      </h2>
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold font-montserrat text-white">
                  {job.title}
                </h3>
                <div className="flex items-center font-montserrat text-gray-300 text-sm mt-1">
                  <Building2 size={14} className="mr-1" /> {job.company}
                  <MapPin size={14} className="ml-4 mr-1" /> {job.location}
                </div>
              </div>
              <Badge
                variant="secondary"
                className={
                  job.type === "Full Time"
                    ? "bg-green-200 hover:bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200"
                    : "bg-green-100 hover:bg-green-100 text-green-700 dark:bg-green-600 dark:text-green-100"
                }
              >
                {job.type}
              </Badge>
            </div>

            <div className="flex items-center font-montserrat text-gray-300 text-sm mt-2">
              <Calendar size={14} className="mr-1" /> {job.period}
            </div>

            {job.tech && (
              <div className="flex flex-wrap items-center font-montserrat mt-2 gap-2">
                <span className="text-sm font-semibold text-gray-300">
                  TechStack:
                </span>
                {job.tech.split(",").map((techItem, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-secondary text-gray-300 font-montserrat border-gray-300 dark:border-gray-500"
                  >
                    {techItem.trim()}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Download Resume Section */}
      <div className="mt-12 flex flex-col items-center">
        <h2 className="text-2xl font-montserrat font-bold mb-4 text-white">
          Download My Resume
        </h2>
        <p className="text-gray-300 font-montserrat font-semibold mb-4 text-center">
          Click the button below to download my resume in PDF format.
        </p>

        <a href="/resumes/ALDREN_LETADA_RESUME.pdf" download>
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
