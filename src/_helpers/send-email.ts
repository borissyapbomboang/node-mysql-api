import { Resend } from 'resend';
const config = require('../../config.json');

const resend = new Resend(process.env.RESEND_API_KEY || config.resendApiKey);

export default async function sendEmail({ to, subject, html, from = process.env.EMAIL_FROM || config.emailFrom }: any) {
    await resend.emails.send({ from, to, subject, html });
}