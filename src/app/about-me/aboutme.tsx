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
    title: "Firmware Engineer",
    company: "Lexmark",
    location: "Cebu City",
    type: "Full-Time",
    period: "August 2022 - October 2025",
    tech: "Embedded C/C++, Python, Linux, CMake, Git, GitLab, Gerrit, Jenkins, Coverity, Valgrind, Bash, Shell Scripting",
    responsibilities: [
      "Developed and maintained embedded firmware for commercial printer platforms using C/C++.",
      "Implemented firmware enhancements, resolved software defects, and optimized system performance.",
      "Worked closely with cross-functional engineering teams throughout the software development lifecycle.",
      "Performed debugging, code reviews, static analysis, and memory profiling to ensure software quality."
    ]
  },
  {
    title: "Software Engineer",
    company: "Aldesa BPO Inc.",
    location: "Cebu City",
    type: "Full-Time",
    period: "October 2025 - April 2026",
    tech: "C#, ASP.NET MVC, ASP.NET Core, Entity Framework, SQL Server, REST API, Azure, HTML5, CSS3, JavaScript, Bootstrap, jQuery, Bitbucket, Jira, Postman",
    responsibilities: [
      "Developed and maintained enterprise CRM web applications using ASP.NET MVC and C#.",
      "Implemented backend business logic and RESTful APIs for new system features.",
      "Maintained legacy .NET applications and optimized SQL Server databases and stored procedures.",
      "Collaborated with stakeholders to design and deliver scalable software solutions."
    ]
  },
  {
    title: "Freelance Software & Embedded Systems Engineer",
    company: "Self-Employed",
    location: "Remote",
    type: "Part-Time",
    period: "November 2022 - Present",
    tech: "Embedded C/C++, C#, Python, React, Next.js, TypeScript, Node.js, ASP.NET Core, STM32, ESP32, Arduino, Raspberry Pi, PostgreSQL, SQL Server, Firebase, Supabase, OpenCV, YOLOv8, Git",
    responsibilities: [
      "Designed and developed custom embedded systems using STM32, ESP32, Arduino, and Raspberry Pi.",
      "Built IoT, automation, and robotics solutions integrating sensors, Bluetooth, Wi-Fi, and cloud platforms.",
      "Developed firmware, backend APIs, and full-stack web applications tailored to client requirements.",
      "Implemented AI-powered computer vision applications using Python, OpenCV, YOLOv8, and MediaPipe.",
      "Integrated relational and cloud databases including PostgreSQL, SQL Server, Firebase, and Supabase.",
      "Worked directly with clients from requirements gathering through development, testing, deployment, and ongoing support."
    ]
  }
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
I am a Software and Firmware Engineer with nearly four years of professional experience specializing in embedded systems, firmware development, and full-stack software engineering. My expertise includes developing embedded software using C/C++, building backend applications with C# ASP.NET MVC, and designing scalable web applications using modern JavaScript frameworks such as React and Next.js.          </AccordionContent>
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

        <a href="/resumes/aldren-resume.pdf" download>
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
