import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react.es'
import { useState } from 'react'

import SliderButtons from './SliderButtons'
import type { Colleague } from './TestimonialCard'
import profileImage from "../../../assets/jc_black_and_white.jpeg";
import TestimonialCard from './TestimonialCard'

const colleaguesArray: Colleague[] = [
  {
    firstName: 'Elon',
    lastName: 'Musk',
    imagePath: profileImage,
    title: 'Agent of Chaos',
    company: 'Tesla',
    testimonial: 'Jacques has been a valued member of the team, his ability to think outside the box has allowed us to push the boundaries of what is possible.'
  },
  {
    firstName: 'Mr',
    lastName: 'Blobby',
    imagePath: profileImage,
    title: 'Blob Manager',
    company: 'Blob Industries',
    testimonial: 'Jacques has always like to think of himself as a bit of a blob, and I have to agree.'
  },
  {
    firstName: 'Angela',
    lastName: 'Merkel',
    imagePath: profileImage,
    title: 'Chancellor',
    company: 'Germany',
    testimonial: 'As Jacques is not a German citizen, I cannot provide a testimonial. Stop waisting my time.'
  }
];


export default function Testimonials() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>(
    {
      initial: 0,
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'center',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
  )

  return (
    <section>
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Feedback from My Colleagues...
            </h2>

            <p className="mt-4 text-gray-700">
              I have learned alot from working alongside Colleagues, feedback provides a great chance to learn from things you might have blind spots on. Thanks to those for taking the time to repond :)
            </p>

            {loaded && instanceRef.current && (
              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <SliderButtons
                  prev={() => instanceRef.current?.prev()}
                  disabledPrev={currentSlide === 0}
                  next={() => instanceRef.current?.next()}
                  disabledNext={currentSlide === instanceRef.current.track.details.slides.length - 1}
                />
              </div>
            )}
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0 relative">
            <ul ref={sliderRef} className="keen-slider">
              {colleaguesArray.map((colleague) => (
                <li key={colleague.firstName} className="keen-slider__slide">
                  <TestimonialCard {...colleague} />
                </li>
              ))}
            </ul>
            <div className="absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <SliderButtons
              prev={() => instanceRef.current?.prev()}
              disabledPrev={currentSlide === 0}
              next={() => instanceRef.current?.next()}
              disabledNext={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </div>
        )}
      </div>
    </section>
  )
};
