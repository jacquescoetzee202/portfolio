import { Form, useActionData, Outlet } from "@remix-run/react";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import whatsapp from "../assets/WhatsAppButtonWhiteLarge.svg";
import StockButton from "../components/StockButton";
import ContactHeroSection from "../components/ContactHeroSection";
import type { formSubmission } from "../types/contact";
import { sendContactMessage } from "../.server/mailing/resend";

function validateEmail(email: string) {
  /* Regular expression pattern for validating email addresses
   ** - ensuring that the email has characters before and after the @
   ** - and ends .{anydomain}
   */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

function validateMessage(message: string): [boolean, string] {
  console.log({ messageLength: message.length });
  if (!message.length) return [false, "Please enter a message"];
  if (message.length > 10000)
    return [
      false,
      "Wow, that's a long message! Please contact me via WhatsApp instead where we can have chat or call.",
    ];
  return [true, ""];
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const name = String(formData.get("name")) ?? "";
  const email = String(formData.get("email"));
  const message = String(formData.get("message")) ?? "";

  const errors: formSubmission = {};

  if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address (e.g., user@example.com)";
  }

  if (!name.length) {
    errors.name = "Please enter a name";
  }

  const [isValidMessage, messageError] = validateMessage(message);

  console.log({isValidMessage,messageError});

  if (!isValidMessage) {
    errors.message = messageError;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  await sendContactMessage({ name, message, email });

  return redirect("./success");
};

export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <>
      <ContactHeroSection />
      <Outlet />
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
            aria-label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className="my-1 w-full rounded-md border-gray-200 shadow-sm"
          />
          {actionData?.errors?.name ? (
            <p className="font-medium text-red-500">
              <em>{actionData?.errors.name}</em>
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            aria-label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="email@dreamcompany.com"
            className="my-1 w-full rounded-md border-gray-200 shadow-sm"
          />
          {actionData?.errors?.email ? (
            <p className="font-medium text-red-500">
              <em>{actionData?.errors.email}</em>
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="my-1 w-full rounded-md border-gray-200 shadow-sm"
          />
          {actionData?.errors?.message ? (
            <p className="font-medium text-red-500">
              <em>{actionData?.errors.message}</em>
            </p>
          ) : null}
        </div>
        <p>
          <StockButton className="w-full">Let's talk</StockButton>
        </p>
      </Form>
    </>
  );
}
