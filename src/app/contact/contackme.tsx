const ContactMe = () => {
  return (
    <>
      <div className="bg-white dark:bg-black transition-colors duration-500 py-12 px-6 md:px-16">
        <h2 className="text-4xl font-monserrat font-bold bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-8">
          Let's Connect
        </h2>
        <p className="text-xl font-semibold text-gray-500 text-justify leading-relaxed mb-4">
          I am currently seeking new opportunities as a Junior Front-End or
          Full-Stack Engineer. I have developed a strong interest in website
          development and spend my free time learning modern front-end
          frameworks like React and Next.js, as well as back-end technologies
          such as Python Django.
        </p>
        <p className="text-xl font-semibold text-gray-500 text-justify leading-relaxed mb-4">
          Through freelance projects, I have gained hands-on experience building
          web applications, and I am eager to bring my skills into the tech
          industry. I am motivated to take on challenging roles that help me
          grow and improve as a web developer.
        </p>
        <p className="text-xl font-semibold text-gray-500 text-justify leading-relaxed">
          If you have a project or opportunity in mind, I would love to connect:
          <span className="font-bold text-blue-600">
            {" "}
            letadaaldren@gmail.com
          </span>
        </p>
      </div>
    </>
  );
};

export default ContactMe;
