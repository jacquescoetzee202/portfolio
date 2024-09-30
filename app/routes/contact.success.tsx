import { CheckIcon } from "@heroicons/react/24/outline";

export default function ContactSuccess() {
  return (
    <div role="alert" className="rounded border-s-4 border-green-500 bg-green-50 p-4 mb-8">
      <div className="flex items-center gap-2 text-green-800">
        <CheckIcon className="size-6"/>
        <strong className="block font-medium"> Your message has been successfully sent! </strong>
      </div>
      <p className="mt-2 text-sm text-green-700">
        Thank you for reaching out! I will get back to you within a couple of days via the email address you provided.
      </p>
    </div>
  );
}
