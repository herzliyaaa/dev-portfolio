import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="font-bold tracking-tight text-5xl text-left text-white">
        PROJECTS
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {projects.map((project) => (
          <motion.div
            whileHover={{ scale: 0.95, opacity: 1 }}
            key={project.id}
            className="group relative"
          >
            <div className="min-h-20  w-full overflow-hidden rounded-md bg-gray-900 ">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                crossOrigin=""
              />
            </div>
            <div className="mt-4 flex justify-center">
              <h3 className="text-xl text-white font-bold">
                <a href={project.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {project.name}
                </a>
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
