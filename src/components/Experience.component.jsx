import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
const Experience = () => {

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h1 className="font-bold tracking-tight text-5xl text-left text-white">
      EXPERIENCE
    </h1>

    <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {experiences.map((experience) => (
        <motion.div
          whileHover={{ scale: 0.95, opacity: 1 }}
          key={experience.id}
          className="group relative"
        >
          <div className="flex justify-center h-[250px] w-[250px] overflow-hidden rounded-md bg-gray-900 ">
            <img
              src={experience.imageSrc}
              alt={experience.imageAlt}
              width={200}
              height={100}
              className="object-contain"
              crossOrigin=""
            />
          </div>
          <div className="mt-4 flex flex-col items-center justify-center">
            <h3 className="text-xl text-white font-bold">
              <a href={experience.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {experience.name}
              </a>
            </h3>
            <div className="">
            <p className=" text-white font-thin">{experience.position}</p>
            </div>
            <div className="">
            <p className=" text-white font-thin">{experience.year}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default Experience;
