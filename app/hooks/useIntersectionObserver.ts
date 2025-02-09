import { useEffect, useState, RefObject } from "react";

interface UseIntersectionObserverProps {
  refs: RefObject<HTMLElement>[];
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  refs,
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    console.log("Current visible sections:", Array.from(visibleSections));
    console.log("Current active section:", activeSection);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;

        setVisibleSections((prev) => {
          const updated = new Set(prev);
          if (entry.isIntersecting) {
            updated.add(sectionId);
          } else {
            updated.delete(sectionId);
          }
          return updated;
        });

        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refs, threshold, rootMargin]);

  return { activeSection, visibleSections };
};
