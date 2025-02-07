import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";
import { projectsData } from "../data/projects";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-12 mt-24 ">
      {projectsData.map(({ name, description, image, link, technologies }, index) => (
        <div
          key={index}
          className="grid grid-cols-[80%,20%] p-4 rounded-md hover:bg-red-100"
        >
          <div className="flex-col">
            <div className="flex flex-row">
              <p className="text-white">{name}</p>
              <Icon
                path={mdiArrowTopRight}
                size={0.5}
                className="text-white translate-y-[9px] translate-x-1.5"
              />
            </div>
            <p>{description}</p>
            <div className="flex flex-row gap-2 mt-6 text-primary_3 text-xs">
              {technologies.map((technologies, idx) => (
                <div
                  key={idx}
                  className="border-primary_3 border-2 rounded-3xl text-center px-6 py-1"
                >
                  {technologies}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <img src={image} alt={name} />
          </div>
        </div>
      ))}
    </div>
  );
}
