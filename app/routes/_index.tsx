import SkillsOverview from "../components/home/SkillsOverview";
// import UnderConstruction from "../components/UnderConstruction";

export default function Index() {
  return (
    <body className="border-x-2 border-black bg-white flex flex-col min-h-screen">
      <div className="bg-brandColor-violet border-b-2 border-black h-16">

      </div>
      <div className="border-b-2 border-black">
        <SkillsOverview />
      </div>
    </body>
);
}
