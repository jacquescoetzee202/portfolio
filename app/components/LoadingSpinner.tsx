import { Transition } from "@headlessui/react";

interface LoadingSpinnerProps {
  active: boolean;
  className?: string;
}

export default function LoadingSpinner({
  active,
  className,
}: LoadingSpinnerProps) {
  return (
    <Transition show={active}>
      <div
        className="transition duration-1000 ease-in-out data-[closed]:opacity-0"
      >
        <span className="w-6 h-6 border-2 border-slate-500 border-solid border-b-transparent rounded-full inline-block animate-spin"></span>
      </div>
    </Transition>
  );
}
