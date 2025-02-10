import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiArrowBottomLeft } from "@mdi/js";
import Image from "next/image";
import { Projects } from "../types/projects";
import { fetchProjects } from "@/lib/contentful";
import { useQuery } from "@tanstack/react-query";

export default function ProjectCard() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<Projects[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects</p>;
  if (!projects || projects.length === 0) return <p>No project data available</p>;

  return (
    <div className="flex flex-col gap-12">
      {projects.map((project, index) => {
        const imageUrl = project.image?.fields?.file?.url;

        return (
          <div key={index} className="flex flex-col p-4 rounded-md">
            {imageUrl && (
              <div className="relative w-full h-0 pb-[50%] overflow-hidden rounded-sm bg-red-100">
                <Image
                  src={`https:${imageUrl}`}
                  alt={project.title}
                  width={1000}
                  height={400}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-col mt-4">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white group hover:text-primary_1 hover:underline transition-all duration-300 ease-in-out"
              >
                <span>{project.title}</span>
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
              </a>
              <p className="mr-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6 text-primary_3 text-xs">
                {project.technologies.map((tech: string, idx: number) => (
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
        );
      })}
    </div>
  );
}
