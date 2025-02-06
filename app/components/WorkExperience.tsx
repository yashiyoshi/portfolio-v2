import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";
import { experienceData } from "../data/experience";

export default function WorkExperience() {
  return (
    <div className="flex flex-col mt-24 gap-12">
      {experienceData.map(({ date, role, company, description, skills }, index) => (
        <div key={index} className="grid grid-cols-[30%,70%]">
          <p>{date}</p>
          <div>
            <div className="flex flex-row">
              <p className="text-white">{role} @ {company}</p>
              <Icon path={mdiArrowTopRight} size={0.5} className="text-white translate-y-[9px] translate-x-1.5" />
            </div>
            <p>{description}</p>
            <div className="flex flex-row gap-2 mt-6 text-primary_3 text-xs">
              {skills.map((skill, idx) => (
                <div key={idx} className="border-primary_3 border-2 rounded-3xl text-center px-6 py-1">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
