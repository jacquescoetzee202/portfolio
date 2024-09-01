import { Form } from '@remix-run/react'
import whatsapp from '../assets/WhatsAppButtonWhiteLarge.svg'
import StockButton from '../components/StockButton'

export default function Contact() {
    return (
        <div className='container mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8 is'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 sm:text-5xl'>Get in touch</h1>
                <p>If you would like to have a chat about a potential job, to find out more about me or anything software & water sports related. Reach me on WhatsApp or fill out the form below and I’ll aim to get back to within a couple of days.</p>
                <div className='text-center'>
                    <a
                        aria-label="Chat on WhatsApp"
                        href="https://wa.me/642904307459"
                        className="group inline-block rounded-full bg-gradient-to-r from-green-400 to-green-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    >
                        <span
                            className="block rounded-full bg-white px-6 group-hover:bg-transparent"
                        >
                            <img alt="Chat on WhatsApp" src={whatsapp} className='group-hover:fill-white'/>
                        </span>
                        {/* className="group w-fit relative inline-block text-sm font-medium text-green-600 focus:outline-none focus:ring active:text-green-500" */}
                    </a>
                </div>
            </div>
            <Form id="contact-form" method="post" className='grid grid-cols-1 gap-x-8 gap-y-6'>
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
                    <StockButton className='w-full'>
                        Let's talk
                    </StockButton>
                </p>
            </Form>
        </div>
    )
}