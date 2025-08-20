import Image from "next/image";
import Techstack from "../tech-stack/techstack";
import Myprojects from "../projects/myprojects";
import Aboutme from "../about-me/aboutme";

const Landing = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 mt-12 gap-8 md:gap-16">
        <div className="space-y-4 text-center md:text-left max-w-md font-montserrat md:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-white flex items-center justify-center md:justify-start gap-2">
            Hi <span>👋</span>,
          </h1>

          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-primary dark:text-white flex items-center justify-center md:justify-start gap-2">
            I&apos;m{" "}
            <span className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ALDREN
            </span>
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-500">
            I am Software | Embedded Engineer
          </p>
        </div>

        <div className="flex justify-center md:mr-16 md:justify-end w-full md:w-auto">
          <div className="p-1 rounded-full ">
            <div className="rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <Myprojects />
        <Techstack />
        <Aboutme />
      </div>
    </div>
  );
};

export default Landing;
