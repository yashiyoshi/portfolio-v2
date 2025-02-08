import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub, mdiInstagram } from "@mdi/js";

const socialLinks = [
  { href: "https://linkedin.com/in/ysrutara", icon: mdiLinkedin },
  { href: "https://github.com/ysrutara", icon: mdiGithub },
  { href: "https://instagram.com/ysrutara", icon: mdiInstagram },
];

export default function SocialLinks() {
  return (
    <footer className="mt-8 md:mt-12 text-primary_1 flex gap-6">
      {socialLinks.map(({ href, icon }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <Icon path={icon} size={1} />
        </a>
      ))}
    </footer>
  );
}
