import {
  SiJavascript,
  SiCplusplus,
  SiDjango,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiPostman,
  SiTypescript,
  SiUbuntu,
  SiFigma,
  SiArduino,
  SiRaspberrypi,
  SiExpo,
  SiTailwindcss,
  SiShadcnui,
  SiDaisyui,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGitlab,
  FaGithub,
  FaPython,
} from "react-icons/fa";

const techs = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "ShadcnUI", icon: <SiShadcnui />, color: "#6366F1" },
  { name: "DaisyUI", icon: <SiDaisyui />, color: "#F9A8D4" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "NodeJs", icon: <FaNodeJs />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#b7afafff" },
  { name: "React Native Expo", icon: <SiExpo />, color: "#b7afafff" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitLab", icon: <FaGitlab />, color: "#FC6D26" },
  { name: "GitHub", icon: <FaGithub />, color: "#b7afafff" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Linux", icon: <SiUbuntu />, color: "#239120" },
  { name: "Python", icon: <FaPython />, color: "#1088e4ff" },
  { name: "Django", icon: <SiDjango />, color: "#b7afafff" },
  { name: "C++", icon: <SiCplusplus />, color: "#1088e4ff" },
  { name: "MySQL", icon: <SiMysql />, color: "#1088e4ff" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Arduino", icon: <SiArduino />, color: "#00979D" },
  { name: "Raspberry Pi", icon: <SiRaspberrypi />, color: "#A22846" },
];

const Techstack = () => {
  return (
    <div className=" py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl text-gray-400 font-bold text-center mb-8">
        EXPERIENCE WITH
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {techs.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center group">
            <div
              className="text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <span className="mt-2 text-sm font-semibold font-montserrat text-primary dark:text-white md:text-base">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
