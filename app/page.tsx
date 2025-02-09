"use client";
import { useEffect, useState, useRef } from "react";
import { fetchProfile } from "../lib/contentful";
import { Profile } from "../app/types/profile";
import SocialLinks from "./components/SocialLinks";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    async function getProfile() {
      const profileData = await fetchProfile();
      setProfile(profileData);
    }
    getProfile();

    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust based on when to trigger
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <main className="w-full">
      <div className="flex flex-col md:grid md:grid-cols-[50%,50%] text-primary_2 h-auto md:h-screen text-sm sm:text-base">
        {/* Left Section */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 md:sticky top-0 h-auto md:h-screen">
          <div className="text-primary_1">
            <p className="font-bold text-4xl sm:text-5xl md:text-5xl mb-2">
              Yassir Utara
            </p>
            <p className="text-sm sm:text-base md:text-lg text-primary_1">
              {profile?.mainTitle}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-primary_1">
              {profile?.subTitle}
            </p>
          </div>
          <p className="mt-6 sm:mt-8 text-wrap">{profile?.subheading1}</p>
          {/* <p className="mt-3 sm:mt-4">{profile?.subheading2}</p> */}
          <div className="mt-4">
            <p className="text-primary_1">Status</p>
            <p
              className={`text-${
                profile?.availabilityStatus === true
                  ? "indicator_green"
                  : "indicator_red"
              }`}
            >
              •{" "}
              {profile?.availabilityStatus === true
                ? "Available"
                : "Unavailable"}
            </p>
            <div className="indent-4 text-white text-xs sm:text-sm">
              <p>{profile?.position1}</p>
              <p>{profile?.position2}</p>
              <p>{profile?.position3}</p>
            </div>
          </div>

          {/* Section Indicator */}
          <div className="mt-6 sm:mt-8 hidden md:block">
            {["about", "experience", "projects"].map((section) => (
              <p
                key={section}
                className={`transition-all duration-300 ease-in-out ${
                  activeSection === section ? "text-lg text-primary_1" : ""
                }`}
              >
                {activeSection === section
                  ? `------ ${section.toUpperCase()}`
                  : `--- ${section.toUpperCase()}`}
              </p>
            ))}
          </div>

          <SocialLinks />
          <footer className="pt-12 sm:pt-16">
            <p className="text-xs translate-y-6">
              @ 2025 Proudly made by yours truly using NextJS & Contentful
            </p>
          </footer>
        </div>

        {/* Right Section */}
        <div className="md:overflow-y-auto p-6 sm:p-8 md:p-12 lg:p-16">
          <div id="about" ref={aboutRef} className="pt-4">
            <About />
          </div>

          <Interests />
          <Skills />

          {/* Work Experience Section */}
          <div id="experience" ref={experienceRef} className="pt-16 sm:pt-24">
            <WorkExperience />
          </div>

          {/* Projects Section */}
          <div id="projects" ref={projectsRef} className="pt-16 sm:pt-24">
            <ProjectCard />
          </div>

          {/* Outro/Contact Me Section */}
          <div id="contact" className="py-12 sm:pt-24">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
