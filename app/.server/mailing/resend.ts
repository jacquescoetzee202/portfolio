import { Resend } from "resend";
import { formSubmission } from "../../types/contact";
import escape from "validator/lib/escape";

import { env } from "../env";
import { EmailTemplate } from "./EmailTemplate";

const resend = new Resend(env.RESEND_API_KEY);
const fromAddress = env.RESEND_FROM_ADDRESS;
const toAddress = env.RESEND_TO_ADDRESS;

export async function sendContactMessage({
  name,
  message,
}: Required<formSubmission>) {
  const escapedMessage = escape(message);
  const escapedName = escape(name);

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: [toAddress],
    subject: `Portfolio site contact: ${escapedName}`,
    react: EmailTemplate({ name: escapedName, message: escapedMessage }),
  });

  if (error) {
    return console.error({ error });
  }

  console.log(`Email succesfully sent, id: ${data?.id}`);
}
