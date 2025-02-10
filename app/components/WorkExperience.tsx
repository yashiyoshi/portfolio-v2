import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiArrowBottomLeft } from "@mdi/js";
import { Experience } from "../types/experience";
import { fetchExperience } from "@/lib/contentful";
import { useQuery } from "@tanstack/react-query";

export default function WorkExperience() {
  const {
    data: experience,
    isLoading,
    error,
  } = useQuery<Experience[]>({
    queryKey: ["experience"],
    queryFn: fetchExperience,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading experience section</p>;
  if (!experience || experience.length === 0) return <p>No experience data available</p>;

  return (
    <div className="flex flex-col gap-16 text-center items-center md:text-start md:items-start">
      {experience.map((exp, index) => (
        <div key={index} className="lg:grid lg:grid-cols-[35%,65%] gap-8">
          <p>
            {exp.startDate || "Unknown Start"} -- {exp.endDate || "Present"}
          </p>
          <div>
            <div className="inline-block text-white group hover:text-primary_1 hover:underline transition-all duration-300 ease-in-out">
              <a href={exp.experienceLink || "#"} target="__blank">
                <span>{exp.experienceTitle || "Untitled Experience"}</span>
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
            </div>
            <div>
              <p>{exp.description || "No description available."}</p>
              <div className="flex flex-wrap gap-2 mt-6 text-primary_3 text-xs items-center justify-center md:justify-start">
                {exp.skills?.length > 0 ? (
                  exp.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="border-primary_3 border-2 rounded-3xl text-center w-max px-6 py-1"
                    >
                      {skill}
                    </div>
                  ))
                ) : (
                  <p>No skills listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
