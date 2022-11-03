import { skills } from "../data/skills";

const SkillSet = () => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="font-bold tracking-tight text-5xl text-left text-white">
        SKILLS SET
      </h1>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-7 xl:gap-x-8">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative">
            <div className="min-h-20  w-full overflow-hidden rounded-md bg-gray-900 group-hover:opacity-75 ">
              <img
                src={skill.imageSrc}
                alt={skill.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                crossOrigin=""
              />
            </div>
            <div className="mt-4 flex justify-center">
              <h3 className="text-xl text-white font-bold">
                <a href={skill.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {skill.name}
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
