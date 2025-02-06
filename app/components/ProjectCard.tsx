import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { projectsData } from "../data/projects";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-12 mt-24">
      {projectsData.map(({ name, description, image, link }, index) => (
        <div key={index} className="grid grid-cols-[80%,20%]">
          <div className="flex-col">
            <p className="text-white">{name}</p>
            <p>{description}</p>
            <a href={link} target="_blank">
              <Icon path={mdiOpenInNew} size={1} className="mt-4" />
            </a>
          </div>
          <div className="w-[100px] h-[100px]">
            <img src={image} alt={name} />
          </div>
        </div>
      ))}
    </div>
  );
}
