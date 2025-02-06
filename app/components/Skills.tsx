import Icon from "@mdi/react";
import { mdiBadminton, mdiGolfTee, mdiGamepad, mdiDumbbell, mdiTelevisionClassic } from "@mdi/js";

const interests = [
  { path: mdiBadminton, label: "Badminton" },
  { path: mdiGolfTee, label: "Golf" },
  { path: mdiDumbbell, label: "Gym" },
  { path: mdiGamepad, label: "Gaming" },
  { path: mdiTelevisionClassic, label: "TV Shows/Movies" },
];

export default function Skills() {
  return (
    <div className="text-primary_1 text-center mt-12">
      <p>Interests</p>
      <div className="flex gap-16 mt-4 justify-center items-center">
        {interests.map(({ path, label }) => (
          <div key={label} className="flex flex-col items-center">
            <Icon path={path} size={1.5} />
            <p className="text-sm mt-2 text-white">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
