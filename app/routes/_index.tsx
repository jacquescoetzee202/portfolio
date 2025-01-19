import Hero from "../components/home/Hero";
import SkillsOverview from "../components/home/SkillsOverview";
// import UnderConstruction from "../components/UnderConstruction";

export default function Index() {
  return (
    <body className="border-x-2 border-black bg-white flex flex-col min-h-screen">
      <div className="bg-brandColor-violet border-b-2 border-black py-24 sm:py-32">
        <Hero />
      </div>
      <div className="border-b-2 border-black py-24 sm:py-32">
        <SkillsOverview />
      </div>
    </body>
);
}
