import whatsapp from '../assets/WhatsAppButtonWhiteLarge.svg'

export default function Contact() {
    return (
        <div>
            <h1>Get in touch</h1>
            <p>If you would like to have a chat about a potential job, to find out more about me or anything software & water sports related. Reach me on WhatsApp or fill out the form below and I’ll aim to get back to within a couple of days.</p>
            <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/642904307459"
                className="group relative inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-green-500"
            >
                <span
                    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-green-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>
                <span className="relative block border border-current bg-white px-8 py-3">
                    <img alt="Chat on WhatsApp" src={whatsapp} />
                </span>
            </a>
        </div>
    )
}