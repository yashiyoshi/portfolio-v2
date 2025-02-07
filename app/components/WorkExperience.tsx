import Icon from "@mdi/react";
import { mdiArrowTopRight, mdiArrowBottomLeft } from "@mdi/js";
import { experienceData } from "../data/experience";

export default function WorkExperience() {
  return (
    <div className="flex flex-col mt-24 gap-16">
      {experienceData.map(
        ({ date, role, company, description, skills }, index) => (
          <div
            key={index}
            className="md:grid md:grid-cols-[30%,70%] gap-12"
          >
            <p>{date}</p>
            <div>
              <div className="inline-block text-white group hover:text-primary_1 hover:underline transition-all duration-300 ease-in-out">
                <span>
                  {role} @ {company}
                </span>
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
              <div className="">
                <p>{description}</p>
                <div className="flex flex-row gap-2 mt-6 text-primary_3 text-xs">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="border-primary_3 border-2 rounded-3xl text-center px-6 py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
