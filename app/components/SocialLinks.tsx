import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiInstagram } from "@mdi/js";
import { useQuery } from "@tanstack/react-query";
import { fetchSocials } from "@/lib/contentful";
import { Socials } from "../types/socials";

export default function SocialLinks() {
  const { data: socials, isLoading, error } = useQuery<Socials>({
    queryKey: ["socials"],
    queryFn: fetchSocials,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading socials</p>;

  return (
    <footer className="mt-8 md:mt-12 text-primary_1 flex gap-6">
      <a href={socials?.linkedin} target="__blank" className="hover:text-primary_3 transition-colors duration-300">
        <Icon path={mdiLinkedin} size={1} />
      </a>
      <a href={socials?.github} target="__blank" className="hover:text-primary_3 transition-colors duration-300">
        <Icon path={mdiGithub} size={1} />
      </a>
      <a href={socials?.instagram} target="__blank" className="hover:text-primary_3 transition-colors duration-300">
        <Icon path={mdiInstagram} size={1} />
      </a>
    </footer>
  );
}
