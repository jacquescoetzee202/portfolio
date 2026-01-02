import {
  ArrowPathRoundedSquareIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function SkillsOverview() {
  const startDate = new Date("2015-04-15");
  const now = new Date();
  const monthsDiff =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  const carearYears = Math.floor(monthsDiff / 12);
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          Ready to add value to your team
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Key Skills
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          I have developed a range of skills in my {carearYears}yr working
          career. With well rounded experience ranging from technical
          knowledge to soft skills and management. Delivering projects that add value to both business and end users.
          Working towards and ultimately seeing improvement in both myself and
          others is my motivation.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="relative pl-16">
            <dt className="text-base/7 font-semibold text-gray-900">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-brandColor-yellow">
                <CodeBracketIcon className="size-6" />
              </div>
              Full Stack
            </dt>
            <dd className="mt-2 text-base/7 text-gray-600">
              Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
              aliquet hac quis. Id hac maecenas ac donec pharetra eget.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base/7 font-semibold text-gray-900">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-brandColor-violet">
                <ChatBubbleLeftRightIcon className="size-6" />
              </div>
              Colaboration
            </dt>
            <dd className="mt-2 text-base/7 text-gray-600">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget. Sem sodales gravida quam turpis enim lacus amet.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base/7 font-semibold text-gray-900">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-brandColor-red">
                <WrenchScrewdriverIcon className="size-6" />
              </div>
              Perfromance & Maintenance
            </dt>
            <dd className="mt-2 text-base/7 text-gray-600">
              Skilled in maintaining and optimizing event-driven microservices architectures with comprehensive observability metrics. Experienced managing and maintaining software releases for agriculture robotics, collaborating across software, firmware, network, and hardware teams to ensure reliable deployments.
            </dd>
          </div>
          <div className="relative pl-16">
            <dt className="text-base/7 font-semibold text-gray-900">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-brandColor-green">
                <ArrowPathRoundedSquareIcon className="size-6" />
              </div>
              Agile
            </dt>
            <dd className="mt-2 text-base/7 text-gray-600">
              Morbi viverra dui mi arcu sed. Tellus semper adipiscing
              suspendisse semper morbi. Odio urna massa nunc massa.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
