import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiArrowBottomLeft } from "@mdi/js";
import { projectsData } from "../data/projects";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-12 mt-24">
      {projectsData.map(({ name, description, image, link, technologies }, index) => (
        <div
          key={index}
          className="grid grid-cols-[80%,20%] p-4 rounded-md"
        >
          <div className="flex-col">
            <div className="flex flex-row text-white group hover:text-primary_1 hover:underline transition-all duration-300 ease-in-out">
              <p className="">{name}</p>
              <Icon
                path={mdiArrowTopRight}
                size={0.5}
                className="translate-y-[9px] translate-x-1.5 group-hover:hidden transition-all duration-100 ease-in-out"
              />
              <Icon
                path={mdiArrowBottomLeft}
                size={0.5}
                className="translate-y-[9px] translate-x-1.5 hidden group-hover:block group-hover:scale-125 transition-all duration-100 ease-in-out"
              />


            </div>
            <p>{description}</p>
            <div className="flex flex-row gap-2 mt-6 text-primary_3 text-xs">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="border-primary_3 border-2 rounded-3xl text-center px-6 py-1"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-sm">
            <img
              src={image}
              alt={name}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
