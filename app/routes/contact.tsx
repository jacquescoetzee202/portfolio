import { Form } from '@remix-run/react'
import whatsapp from '../assets/WhatsAppButtonWhiteLarge.svg'

export default function Contact() {
    return (
        <div className='container mx-auto max-w-3xl'>
            <div>
                <h1>Get in touch</h1>
                <p>If you would like to have a chat about a potential job, to find out more about me or anything software & water sports related. Reach me on WhatsApp or fill out the form below and I’ll aim to get back to within a couple of days.</p>
                <div className='text-center'>
                    <a
                        aria-label="Chat on WhatsApp"
                        href="https://wa.me/642904307459"
                        className="group w-fit relative inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-green-500"
                    >
                        <span
                            className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-green-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>
                        <span className="relative block border border-current bg-white px-8 py-3">
                            <img alt="Chat on WhatsApp" src={whatsapp} />
                        </span>
                    </a>
                </div>
            </div>
            <Form id="contact-form" method="post" className='mx-auto max-w-3xl'>
                <div>
                    <label htmlFor='name' className="block font-medium text-gray-700">Name</label>
                    <input
                        aria-label="Name"
                        id='name'
                        name="name"
                        type="text"
                        placeholder="name"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor='email' className="block font-medium text-gray-700">Email</label>
                    <input
                        aria-label="Email"
                        id='email'
                        name="email"
                        type="email"
                        placeholder="email@dreamcompany.com"
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor='message' className="block font-medium text-gray-700">Message</label>
                    <textarea
                        id='message'
                        name="message"
                        rows={6}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm"
                    />
                </div>
                <p>
                    <button type="submit">Let's talk</button>
                    <button type="button">Cancel</button>
                </p>
            </Form>
        </div>
    )
}