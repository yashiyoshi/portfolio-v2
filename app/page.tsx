import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "@mdi/react";
import {
  mdiBadminton,
  mdiGolfTee,
  mdiGamepad,
  mdiDumbbell,
  mdiTelevisionClassic,
} from "@mdi/js";

export default async function Page() {
  return (
    <div className="grid grid-cols-[45%,55%] text-primary_2 h-screen m-12">
      {/* Left Section (sticky) */}
      <div className="border-2 border-primary_2 rounded-xl p-8 sticky top-12 h-min">
        <div className="text-primary_1">
          <p className="font-bold text-5xl">Yassir Utara</p>
          <p>Junior Project Manager</p>
          <p>Front-end Hobbyist</p>
        </div>
        <p className="mt-8">
          I build front-end projects on the side, all the while finding new
          hobbies!
        </p>
        <p className="mt-4">A curiosity rover</p>
        <div className="mt-4">
          <p className="text-primary_1">Status</p>
          {/* Add Contentful stuff here for STATUS; placeholder for now */}
          <p className="text-indicator_red">• Unavailable</p>
          <div className="indent-4 text-white">
            {/* positions */}
            <p>Part-time Project Manager @ Mugna Tech</p>
            <p>Business Owner @ Chi Boards</p>
            <p>Full-time kuya @ Utara House</p>
          </div>
        </div>

        {/* scroll thing here */}
        <div className="mt-8 text-primary_1">------ ABOUT</div>
        <div className=" text-primary_2">--- EXPERIENCE</div>
        <div className=" text-primary_2">--- PROJECTS</div>
        {/* Socials icons here */}
        <footer className="mt-24 text-primary_1 flex gap-6">
          <a href="https://instagram.com/ysrutara" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="h-6" />
          </a>
          <a href="https://instagram.com/ysrutara" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="h-6" />
          </a>
          <a href="https://instagram.com/ysrutara" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="h-6" />
          </a>
        </footer>
      </div>

      {/* Right Section (scrolling) */}
      <div className="m-8 ml-16 overflow-y-auto">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum tortor risus
            consectetur aliquet laoreet venenatis ultrices a tortor. Elementum
            facilisi mattis nibh vivamus arcu est libero. Sed in amet orci sed
            quam turpis maecenas dignissim. Congue lacus lectus tincidunt mattis
            suspendisse ut eget. Tempor eu arcu felis neque aenean ultrices
            enim. Vel integer nulla feugiat vulputate vitae molestie massa risus
            felis. Morbi sed augue ac ullamcorper tellus ac tristique eu.
            Posuere tempus at adipiscing aliquam.
          </p>
          <p className="mt-8">
            Nibh fames varius arcu commodo amet dignissim. Est nibh tortor sed
            tellus et urna. Tortor neque integer nunc ac ut pharetra metus
            vestibulum lorem. Imperdiet et amet tempor aenean. Sapien neque
            pellentesque feugiat in enim venenatis.
          </p>
        </div>
        {/* Interests */}
        <div className="text-primary_1 text-center mt-12">
          <p>Interests</p>
          <div className="flex gap-16 mt-4 justify-center items-center">
            <div className="flex flex-col items-center">
              <Icon path={mdiBadminton} size={1.5} />
              <p className="text-sm mt-2 text-white">Badminton</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiGolfTee} size={1.5} />
              <p className="text-sm mt-2 text-white">Golf</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiDumbbell} size={1.5} />
              <p className="text-sm mt-2 text-white">Gym</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiGamepad} size={1.5} />
              <p className="text-sm mt-2 text-white">Gaming</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiTelevisionClassic} size={1.5} />
              <p className="text-sm mt-2 text-white">TV Shows/Movies</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="text-primary_1 text-center mt-12">
          <p>Interests</p>
          <div className="flex gap-16 mt-4 justify-center items-center">
            <div className="flex flex-col items-center">
              <Icon path={mdiBadminton} size={1.5} />
              <p className="text-sm mt-2 text-white">Badminton</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiGolfTee} size={1.5} />
              <p className="text-sm mt-2 text-white">Golf</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiDumbbell} size={1.5} />
              <p className="text-sm mt-2 text-white">Gym</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiGamepad} size={1.5} />
              <p className="text-sm mt-2 text-white">Gaming</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon path={mdiTelevisionClassic} size={1.5} />
              <p className="text-sm mt-2 text-white">TV Shows/Movies</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>

        </div>
      </div>
    </div>
  );
}
