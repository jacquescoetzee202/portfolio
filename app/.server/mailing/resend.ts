import { Resend } from 'resend';
import { formSubmission } from '../../types/contact';
import type { ReactNode } from "react";

import { EmailTemplate } from './EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromAddress = process.env.RESEND_FROM_ADDRESS ?? 'Acme <onboarding@resend.dev>';
const toAddress = process.env.RESEND_TO_ADDRESS ?? 'delivered@resend.dev';

/** TODO
 * - sanitize message for html template 'express-validator'
 * - escape any html characters put in by user 'he' npm package
**/
  
export async function sendContactMessage({name, message} : Required<formSubmission>){
    const { data, error } = await resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        subject: `Portfolio site contact: ${name}`,
        react: EmailTemplate({name,message}),
    });

    if (error) {
        return console.error({ error });
    }
    
    console.log({ data });
}
