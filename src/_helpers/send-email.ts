import nodemailer from 'nodemailer';
const config = require('../../config.json');

export default async function sendEmail({ to, subject, html, from = config.emailFrom }: any) {
    const transporter = nodemailer.createTransport({
        ...config.smtpOptions,
        connectionTimeout: 10000, // ✅ 10 seconds
        greetingTimeout: 10000,   // ✅ 10 seconds
        socketTimeout: 10000      // ✅ 10 seconds
    });
    await transporter.sendMail({ from, to, subject, html });
}

const transporter = nodemailer.createTransport({
    ...config.smtpOptions,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    tls: {
        rejectUnauthorized: false // ✅ fixes SSL issues
    }
});