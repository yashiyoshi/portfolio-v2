import { mdiHeart } from "@mdi/js";
import Icon from "@mdi/react";

export default function Contact() {
  return (
    <div className="text-center items-center flex flex-col">
      <p className="text-primary_1">Don't be a Stranger</p>
      <p>Let's make something exciting together</p>
      <Icon path={mdiHeart} size={0.75} className="mt-2"></Icon>
      <p className="mt-8">
        If you have an opportunity or any project that would benefit from my
        involvement, feel free to reach me at at any of my socials on the left. I'll
        be delighted to talk to you :)
      </p>
      <p>
        You may email me at <a href="mailto:yassirutara@gmail.com" className="text-primary_3">yassirutara@gmail.com</a> or you can check out my
        socials below!
      </p>
    </div>
  );
}
