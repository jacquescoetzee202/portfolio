import constructionSvg from "../assets/undraw_under_construction.svg";

interface UnderConstructionProps {
  pageName: string;
}

export default function UnderConstruction({
  pageName,
}: UnderConstructionProps) {
  return (
    <div className="flex flex-col bg-slate-50 px-4">
      <div className="text-center">
        <img
          alt="under construction icon"
          src={constructionSvg}
          className="m-auto w-3/4 pb-12 lg:w-1/2 lg:pb-16"
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">{`Uh-oh! you have just entered the ${pageName} page construction site`}</h1>
        <p className="mt-4 text-gray-500">{`The ${pageName} page is currently under construction, come back when the structure is complete and it has been decorated.`}</p>
      </div>
    </div>
  );
}
