import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiInstagram } from "@mdi/js";
import { useEffect, useState } from "react";
import { Socials } from "../types/socials";
import { fetchSocials } from "@/lib/contentful";



export default function SocialLinks() {
  const [socials, setSocials] = useState<Socials | null>(null);

  useEffect(() => {
    async function getSocials() {
      const socialsData = await fetchSocials();
      setSocials(socialsData);
    }
    getSocials();
  });


  return (
    <footer className="mt-8 md:mt-12 text-primary_1 flex gap-6">
      <a href={socials?.linkedin} target="__blank">
        <Icon path={mdiLinkedin} size={1} />
      </a>
      <a href={socials?.github} target="__blank">
        <Icon path={mdiGithub} size={1} />
      </a>
      <a href={socials?.instagram} target="__blank">
        <Icon path={mdiInstagram} size={1} />
      </a>
    </footer>
  );
}
