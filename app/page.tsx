import Image from "next/image";
import myself from "../public/myself2.png";
import nexus from "@/public/nexus.jpeg";
import { FlipWords } from "@/components/ui/flip-words";
import { Timeline } from "@/components/ui/timeline";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { timeLineData } from "./components/data-mock";
import { DescriptionPreview } from "./components/description-preview";
import { menuResumeData } from "./components/data-mock";

export default function Home() {



  return (
    <div className={"flex flex-col w-full items-center padding-inline: 5rem;"}>
      <div className={"grid grid-cols-2 items-center h-screen homePageTitleAnimation"}>
        {/* base title name */}
        <div className={"flex flex-col justify-center gap-4 relative"}>

          <div className={"absolute z-[-10] right-0 bottom-20 neomorphismTest"}>
            <div className={"size-96 relative"}>
              <Image src={myself} alt="Picture of the author" className={"rounded-full object-cover shadow-2xl shadow-gray-950 w-48 mb-5"} fill />
            </div>
          </div>

          <div className={""}>
            <h1 className={"text-5xl"}>Hello, I'm</h1>
            <h1 className={"text-7xl"}>
              <FlipWords className={"p-0 m-0"} words={['Ríchard Lucas', 'testing, 123...']} />
            </h1>
          </div>

          <h1>
            A self-taught polymath and developer, passionately exploring technology and innovation every day.
          </h1>

          <div>
            <InteractiveHoverButton>Contact me</InteractiveHoverButton>
          </div>
        </div>

        {/* cards resumes with links */}
        <div className={"flex flex-col justify-self-end"}>
          {
            menuResumeData.map(element => (
              <div key={element.title} className={"border-b border-secondary p-8"}>
                <DescriptionPreview title={element.title} body={element.body} readMore={element.readMore} readMoreLink={element.readMoreLink} />
              </div>
            ))
          }
        </div>

        {/* ---------------------- tries ---------------------- */}

        {/* -profile pic- */}
        {/* <div className={"flex items-center gap-8"}>
          <div className={"flex flex-col gap-8"}>
            <h1>- 96 finished projects</h1>
            <h1>- Over 50 clients</h1>
            <h1>- 8 years of experience</h1>
            <h1>- any time schedule</h1>
          </div>

          <div className={"size-96 relative"}>
            <Image src={myself} alt="Picture of the author" className={"rounded-full object-cover shadow-2xl shadow-gray-950 w-48 mb-5"} fill />
          </div>
        </div> */}


        {/* projects showcase */}
        {/* <div className={"col-span-2"}>
          <h1 className={"text-4xl"}>Projects</h1>
          <Image src={nexus} alt="dogstein" className={"rounded-xl"} />
          <h1>
            Nexus is a project that I've been working on, it's a platform that allows you to create your own
            personal website with a few clicks
          </h1>
        </div> */}
      </div>

      <Timeline data={timeLineData} />
    </div>
  );
}
