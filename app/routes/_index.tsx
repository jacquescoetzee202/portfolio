import Hero from "../components/home/Hero";
import SkillsOverview from "../components/home/SkillsOverview";
import Testimonials from "../components/home/testimonials/Testimonials";
import useHydrated from "../hooks/useHydrated";

export default function Index() {
  const hydrated = useHydrated();

  return (
    <body className="border-x-2 border-black flex flex-col min-h-screen">
      <div className="bg-brandColor-violet border-b-2 border-black py-24 sm:py-32">
        <Hero />
      </div>
      <div className="border-b-2 border-black py-24 sm:py-32">
        <SkillsOverview />
      </div>
      <div className="bg-brandColor-yellow border-b-2 border-black py-24 sm:py-32 px-12 sm:px-24">
        {hydrated && <Testimonials />}
      </div>
    </body>
  );
}
