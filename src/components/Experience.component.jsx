import { motion } from "framer-motion";
const Experience = () => {
  const experiences = [
    {
      name: "Biotech Farms Inc.",
      position: "DevOps Engineer",
      href: "https://biotechfarms.com/",
      imageSrc:
        "https://media-exp1.licdn.com/dms/image/C560BAQEajk5HTespvQ/company-logo_200_200/0/1605620520732?e=1675900800&v=beta&t=xI-00DIzgVi3X1zsFfsCXu5wUo0sPN_AlIQoI3FRJqM",
      imageAlt: "Biotech Farms",
    },
  ];
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="font-bold tracking-tight text-5xl text-left text-white">
        EXPERIENCE
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {experiences.map((experience, idx) => (
          <motion.div
            whileHover={{ scale: 0.95, opacity: 1 }}
            key={idx}
            className="group relative"
          >
            <div className="min-h-20  w-full overflow-hidden rounded-md bg-gray-900 ">
              <img
                src={experience.imageSrc}
                alt={experience.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                crossOrigin=""
              />
            </div>
            <div className="mt-4 flex justify-center flex-col">
              <h3 className="text-xl text-white font-bold">
                <a href={experience.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {experience.name}
                </a>
              </h3>
              <p className="text-white">{experience.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
