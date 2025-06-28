"use client";
import Icon from "@mdi/react";
import { mdiBadminton, mdiGolfTee, mdiGamepad, mdiDumbbell, mdiTelevisionClassic } from "@mdi/js";
import { useEffect, useState } from "react";

const interests = [
  { path: mdiBadminton, label: "Badminton" },
  { path: mdiGolfTee, label: "Golf" },
  { path: mdiDumbbell, label: "Gym" },
  { path: mdiGamepad, label: "Gaming" },
  { path: mdiTelevisionClassic, label: "TV Shows/Movies" },
];

export default function Interests() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-primary_1 text-center mt-12">
      <p>Interests</p>
      <div 
        className="relative w-full overflow-hidden group mt-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex animate-infinite-scroll group-hover:paused">
          {[...interests, ...interests].map(({ path, label }, index) => (
            <div key={`${label}-${index}`} className="flex flex-col items-center mx-8 flex-shrink-0">
              <Icon path={path} size={1.5} />
              <p className="text-sm mt-2 text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
