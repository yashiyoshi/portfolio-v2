import { useEffect, useState } from "react";
import { fetchAbout } from "@/lib/contentful";
import { AboutType } from "../types/about";

export default function About() {
  const [about, setAbout] = useState<AboutType | null>(null);

  useEffect(() => {
    async function getAbout() {
      const aboutData = await fetchAbout();
      setAbout(aboutData);
    }
    getAbout();
  }, []);

  return (
    <div className="text-wrap text-center">
      <p>{about?.mainParagraph}</p>
      <p className="mt-6 sm:mt-8">{about?.subParagraph}</p>
    </div>
  );
}
