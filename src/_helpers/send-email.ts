import { Resend } from 'resend';
const config = require('../../config.json');

const resend = new Resend(config.resendApiKey);

export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
    await resend.emails.send({ from, to, subject, html });
}