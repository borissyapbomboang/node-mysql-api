"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sendEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config = require('../../config.json');
async function sendEmail({ to, subject, html, from = config.emailFrom }) {
    const transporter = nodemailer_1.default.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html });
}
