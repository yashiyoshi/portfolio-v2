import SocialLinks from "./components/SocialLinks";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import ProjectCard from "./components/ProjectCard";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col md:grid md:grid-cols-[45%,55%] text-primary_2 h-screen text-xs md:text-base">
        {/* Left Section */}
        <div className="p-8 md:p-16 md:sticky top-0 h-min">
          <div className="text-primary_1">
            <p className="font-bold text-6xl">Yassir Utara</p>
            <p>Junior Project Manager</p>
            <p>Front-end Hobbyist</p>
          </div>
          <p className="mt-8">
            I build front-end projects on the side, manage projects, and enjoy
            life
          </p>
          <p className="mt-4">A curiosity rover</p>
          <div className="mt-4">
            <p className="text-primary_1">Status</p>
            <p className="text-indicator_red">• Unavailable</p>
            <div className="indent-4 text-white">
              <p>Part-time Project Manager @ Mugna Tech</p>
              <p>Business Owner @ Chi Boards</p>
              <p>Full-time kuya @ Utara House</p>
            </div>
          </div>
          <SocialLinks />
        </div>

        {/* Right Section */}
        <div className="md:overflow-y-auto p-8 md:p-16">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dictum tortor risus
              consectetur aliquet laoreet venenatis ultrices a tortor. Elementum
              facilisi mattis nibh vivamus arcu est libero. Sed in amet orci sed
              quam turpis maecenas dignissim. Congue lacus lectus tincidunt
              mattis suspendisse ut eget. Tempor eu arcu felis neque aenean
              ultrices enim. Vel integer nulla feugiat vulputate vitae molestie
              massa risus felis. Morbi sed augue ac ullamcorper tellus ac
              tristique eu. Posuere tempus at adipiscing aliquam.
            </p>
            <p className="mt-8">
              Nibh fames varius arcu commodo amet dignissim. Est nibh tortor sed
              tellus et urna. Tortor neque integer nunc ac ut pharetra metus
              vestibulum lorem. Imperdiet et amet tempor aenean. Sapien neque
              pellentesque feugiat in enim venenatis.
            </p>
          </div>
          <Interests />
          <Skills />
          <WorkExperience />
          <ProjectCard />
          <footer>
            <p className="mt-12 text-xs translate-y-8">
              @ 2025 Proudly made by yours truly using NextJS & Contentful
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
