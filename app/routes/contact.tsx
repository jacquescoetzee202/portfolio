import { Form } from "@remix-run/react";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import whatsapp from "../assets/WhatsAppButtonWhiteLarge.svg";
import StockButton from "../components/StockButton";
import ContactHeroSection from "../components/ContactHeroSection";

interface formSubmission {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string) {
  /* Regular expression pattern for validating email addresses
   ** - ensuring that the email has characters before and after the @
   ** - and ends .{anydomain}
   */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

export const action = async ({ request }: ActionFunctionArgs) => {
  // get entries
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));

  // validate the values
  const errors: formSubmission = {};

  if (!validateEmail(email)) {
    errors.email = "Invalid email address ensure the email contains ";
  }

  if (!name.length) {
    errors.name = "Please enter a name";
  }

  if(!message.length){

  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  // send the email ?
  // success response route
  // fail response route
  // sucess or fail responses, toast ?
  // Redirect to dashboard if validation is successful
  return redirect("");
};

export default function Contact() {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:px-8 is">
      <ContactHeroSection />
      <Form
        id="contact-form"
        method="post"
        className="grid grid-cols-1 gap-x-8 gap-y-6"
      >
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            required
            aria-label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            required
            aria-label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="email@dreamcompany.com"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={6}
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm"
          />
        </div>
        <p>
          <StockButton className="w-full">Let's talk</StockButton>
        </p>
      </Form>
    </div>
  );
}
