import { createClient } from "contentful";
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

export async function fetchProfile(): Promise<Profile> {
  const profiles = await fetchContentfulEntries<Profile>("profile");
  if (profiles.length === 0) throw new Error("Profile not found");
  return profiles[0];
}

export async function fetchSocials(): Promise<Socials> {
  const socials = await fetchContentfulEntries<Socials>("socials");
  if (socials.length === 0) throw new Error("Socials not found");
  return socials[0];
}

export async function fetchAbout(): Promise<AboutType> {
  const about = await fetchContentfulEntries<AboutType>("about");
  if (about.length === 0) throw new Error("About section not found");
  return about[0];
}
