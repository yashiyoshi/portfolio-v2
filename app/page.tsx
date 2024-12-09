export default async function Page() {
  return (
    <div className="grid grid-cols-[45%,55%] text-primary_2">
      {/* Left Section (fixed/sticky) */}
      <div className="border-2 border-primary_2 rounded-xl p-8">
        <div className="text-primary_1">
          <p className="font-bold text-5xl">Yassir Utara</p>
          <p>Front-end Hobbyist</p>
          <p>Project Manager</p>
        </div>
        <p className="my-8">
          I build front-end projects on the side, all the while finding new
          hobbies! I'm a curiousity rover
        </p>
        <div>
          <p className="text-primary_1">Status</p>
          {/* add contentful stuff here for STATUS; placeholder for now */}
          <p className="text-indicator_red">• Unavailable</p>
          <div className="indent-4 text-white">
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>

        {/* scroll thing here */}
        <div className="my-12">test</div>
        {/* socials icons here */}
        <footer>
          <p>test</p>
        </footer>
      </div>

      {/* Right Section (scrolling) */}
      <div className="m-8 ml-16">
        <p className="">
          Lorem ipsum dolor sit amet consectetur. Dictum tortor risus
          consectetur aliquet laoreet venenatis ultrices a tortor. Elementum
          facilisi mattis nibh vivamus arcu est libero. Sed in amet orci sed
          quam turpis maecenas dignissim. Congue lacus lectus tincidunt mattis
          suspendisse ut eget. Tempor eu arcu felis neque aenean ultrices enim.
          Vel integer nulla feugiat vulputate vitae molestie massa risus felis.
          Morbi sed augue ac ullamcorper tellus ac tristique eu. Posuere tempus
          at adipiscing aliquam.
        </p>
        <p className="mt-8">
          Nibh fames varius arcu commodo amet dignissim. Est nibh tortor sed
          tellus et urna. Tortor neque integer nunc ac ut pharetra metus
          vestibulum lorem. Imperdiet et amet tempor aenean. Sapien neque
          pellentesque feugiat in enim venenatis. Purus quam in dictum sem
          ullamcorper pretium auctor gravida tellus. Tellus consectetur ut vitae
          quam et in tincidunt sed feugiat. Laoreet ligula auctor ipsum
          ultrices. Nibh risus mus sit tellus integer nunc mauris nibh at. Amet
          condimentum lorem risus lacinia duis in.
        </p>
      </div>
    </div>
  );
}
