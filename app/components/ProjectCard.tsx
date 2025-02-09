import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiArrowBottomLeft } from "@mdi/js";
import { projectsData } from "../data/projects";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-12">
      {projectsData.map(
        ({ name, description, image, link, technologies }, index) => (
          <div key={index} className="flex flex-col p-4 rounded-md">
            <div className="relative w-full h-0 pb-[50%] overflow-hidden rounded-sm bg-red-100">
              <img
                src={image}
                alt={name}
                className="absolute top-0 left-0 w-[1000px] h-[400px] object-cover"
              />
            </div>
            <div className="flex-col">
              <div className="inline-block text-white group hover:text-primary_1 hover:underline transition-all duration-300 ease-in-out">
                <span>{name}</span>
                <span className="inline-block">
                  <Icon
                    path={mdiArrowTopRight}
                    size={0.5}
                    className="translate-y-[2.5px] translate-x-1 group-hover:hidden transition-all duration-100 ease-in-out"
                  />
                  <Icon
                    path={mdiArrowBottomLeft}
                    size={0.5}
                    className="translate-y-[2.5px] translate-x-1 hidden group-hover:block group-hover:scale-125 transition-all duration-100 ease-in-out"
                  />
                </span>
              </div>
              <p className="mr-4">{description}</p>
              <div className="flex flex-wrap gap-2 mt-6 text-primary_3 text-xs">
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
          </div>
        )
      )}
    </div>
  );
}
