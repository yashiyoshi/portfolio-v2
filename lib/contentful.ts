import { createClient, Entry } from "contentful";
import { Profile } from "../app/types/profile";
import { Socials } from "../app/types/socials";
import { AboutType } from "@/app/types/about";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchContentfulEntries<T>(contentType: string): Promise<T[]> {
  const entries = await client.getEntries({ content_type: contentType });
  return entries.items.map((item) => item.fields as T);
}

export async function fetchProfile(): Promise<Profile | null> {
  const profiles = await fetchContentfulEntries<Profile>("profile");
  return profiles.length > 0 ? profiles[0] : null;
}

export async function fetchSocials(): Promise<Socials | null> {
  const socials = await fetchContentfulEntries<Socials>("socials");
  return socials.length > 0 ? socials[0] : null;
}

export async function fetchAbout(): Promise<AboutType | null> {
  const about = await fetchContentfulEntries<AboutType>("about");
  return about.length > 0 ? about[0] : null;
}