import { createClient, Entry } from "contentful";
import { Profile } from "../app/types/profile";

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

