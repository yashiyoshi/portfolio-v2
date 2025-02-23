import { useQuery } from "@tanstack/react-query";
import { fetchAbout } from "@/lib/contentful";
import { AboutType } from "../types/about";

export default function About() {
  const { data: about, isLoading, error } = useQuery<AboutType>({
    queryKey: ["about"],
    queryFn: fetchAbout,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading about section</p>;

  return (
    <div className="text-wrap">
      <p>{about?.mainParagraph}</p>
      <p className="mt-6 sm:mt-8">{about?.subParagraph}</p>
    </div>
  );
}
