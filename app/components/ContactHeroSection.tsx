import whatsapp from "../assets/WhatsAppButtonWhiteLarge.svg";

export default function ContactHeroSection() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 mb-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
        Get in touch
      </h1>
      <p>
        If you would like to have a chat about a potential job, to find out more
        about me or anything software & water sports related. Reach me on
        WhatsApp or fill out the form below and I’ll aim to get back to within a
        couple of days.
      </p>
      <div className="text-center">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/642904307459"
          className="group inline-block rounded-full bg-gradient-to-r from-green-400 to-green-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        >
          <span className="block rounded-full bg-white px-6 group-hover:bg-transparent">
            <img
              alt="Chat on WhatsApp"
              src={whatsapp}
              className="group-hover:fill-white"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
