import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type SliderButtonsProps = {
    prev: () => void;
    disabledPrev: boolean;
    next: () => void;
    disabledNext: boolean;
}

export default function SliderButtons({ prev, disabledPrev, next, disabledNext }: SliderButtonsProps) {
    return (
        <>
            <button
                aria-label="Previous slide"
                disabled={disabledPrev}
                onClick={prev}
                className="rounded-full border-2 border-black p-3 transition hover:bg-brandColor-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeftIcon className="size-6" />
            </button>

            <button
                aria-label="Next slide"
                disabled={disabledNext}
                onClick={next}
                className="rounded-full border-2 border-black p-3 transition hover:bg-brandColor-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRightIcon className="size-6" />
            </button>
        </>
    );
}

