import { Resend } from 'resend';
import { formSubmission } from '../../types/contact';
import type { ReactNode } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

/** TODO
 * - create html template
 * - sanitize message for html template 'express-validator'
 * - escape any html characters put in by user 'he' npm package
**/
  
export async function sendContactMessage({name, message} : formSubmission){
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: `Portfolio site contact: ${name}`,
        html: `<p>${message}</p>`,
    });

    if (error) {
        return console.error({ error });
    }
    
    console.log({ data });
}
