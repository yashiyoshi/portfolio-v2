"use client";
import { useRef, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../lib/contentful";
import SocialLinks from "./components/SocialLinks";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import { mdiChevronTripleDown } from "@mdi/js";
import WorkExperience from "./components/WorkExperience";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import About from "./components/About";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import Icon from "@mdi/react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true));
    return () => clearTimeout(timer);
  }, []);

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    staleTime: 1000 * 60 * 5,
  });

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const { activeSection, visibleSections } = useIntersectionObserver({
    refs: Object.values(sectionRefs),
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const SectionIndicator = ({ section }: { section: string }) => (
    <p
      className={`transition-all duration-500 ease-in-out transform ${
        activeSection === section
          ? "text-lg text-primary_1 translate-x-2"
          : "translate-x-0"
      }`}
    >
      <span
        className={`transition-all duration-500 ${
          activeSection === section ? "mr-4" : "mr-2"
        }`}
      >
        {activeSection === section ? "------" : "---"}
      </span>
      {section.toUpperCase()}
    </p>
  );

  return (
    <div className="overflow-x-hidden">
      <main
        className={`
      w-full
      transition-all
      duration-1000
      ease-out
      ${isVisible ? "opacity-100" : "opacity-0"}
    `}
      >
        <div className="flex flex-col md:grid md:grid-cols-[50%,50%] text-primary_2 h-auto md:h-screen text-sm sm:text-base">
          {/* Left Section */}
          <div
            className={`
          p-6 sm:p-8 md:p-12 lg:p-16 
          md:sticky top-0 
          h-auto md:h-screen 
          flex flex-col
          transition-all
          duration-1000
          delay-300
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }
        `}
          >
            <div className="">
              <p
                className={`
              font-bold text-nowrap 
              text-5xl sm:text-5xl md:text-4xl lg:text-5xl
              mb-2 gradient-text text-transparent 
              animate-gradient
              transition-all
              duration-1000
              delay-500
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }
            `}
              >
                Yassir Utara
              </p>
              <p
                className={`
              text-sm sm:text-base
              text-primary_1
              transition-all
              duration-1000
              delay-700
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }
            `}
              >
                {profile?.mainTitle}
              </p>
              <p
                className={`
              text-sm sm:text-base
              text-primary_1
              transition-all
              duration-1000
              delay-800
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }
            `}
              >
                {profile?.subTitle}
              </p>
            </div>

            <p
              className={`
            mt-6 sm:mt-8 
            text-wrap
            transition-all
            duration-1000
            delay-900
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
            >
              {profile?.subheading1}
            </p>

            <div
              className={`
            mt-4
            transition-all
            duration-1000
            delay-1000
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
            >
              <p className="text-primary_1">Status</p>
              <p
                className={`${
                  profile?.availabilityStatus
                    ? "text-indicator_green"
                    : "text-indicator_red"
                }`}
              >
                •{" "}
                {profile?.availabilityStatus
                  ? "Available for work"
                  : "Unavailable for work"}
              </p>
              <div className="indent-4 text-white text-xs sm:text-sm">
                <p>{profile?.position1}</p>
                <p>{profile?.position2}</p>
                <p>{profile?.position3}</p>
              </div>
            </div>

            {/* Section Indicator */}
            <div
              className={`
            mt-6 sm:mt-8 
            hidden md:block 
            space-y-2
            transition-all
            duration-1000
            delay-1100
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }
          `}
            >
              {["about", "experience", "projects"].map((section) => (
                <SectionIndicator key={section} section={section} />
              ))}
            </div>

            <div
              className={`
            mt-auto
            transition-all
            duration-1000
            delay-1200
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
            >
              <SocialLinks />
              <footer className="md:py-6 hidden md:block">
                <p className="text-xs">
                  @ 2025 Proudly made by yours truly using NextJS & Contentful
                </p>
              </footer>
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`
          md:overflow-y-auto 
          p-6 sm:p-8 md:p-12 lg:p-16 
          flex flex-col gap-4
          transition-all
          duration-1000
          delay-500
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }
        `}
          >
            {/* About Section */}
            <div
              id="about"
              ref={sectionRefs.about}
              className={`transform transition-all duration-700 ${
                visibleSections.has("about")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <About />
              <div className="mt-12">
                <Interests />
              </div>

              <div className="flex flex-col text-sm text-center items-center justify-center mt-20">
                <p>scroll down c:</p>
                <Icon
                  path={mdiChevronTripleDown}
                  size={1}
                  className="animate-bounce mt-4"
                />
              </div>
            </div>

            {/* Experience Section */}
            <div
              id="experience"
              ref={sectionRefs.experience}
              className={`transform transition-all duration-700 mt-12 pt-16 sm:pt-24 ${
                visibleSections.has("experience")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <WorkExperience />
            </div>

            {/* Projects Section */}
            <div
              id="projects"
              ref={sectionRefs.projects}
              className={`transform transition-all duration-700 mt-12 pt-16 sm:pt-24 ${
                visibleSections.has("projects")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <ProjectCard />
            </div>

            {/* Contact Section */}
            <div
              id="contact"
              ref={sectionRefs.contact}
              className={`transform transition-all duration-700 py-36 sm:pt-24 ${
                visibleSections.has("contact")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Contact />
            </div>

            {/* Mobile Footer */}
            <footer className="md:hidden text-center mt-8">
              <p className="text-xs">
                @ 2025 Proudly made by yours truly using NextJS & Contentful
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
