import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const emailAddress = process.env.MAIL_ADDRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, phone, reason, message } = req.body;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !reason.trim() ||
      !message.trim()
    ) {
      return res.status(403).send('');
    }

    const sendGridMessage = {
      from: emailAddress,
      to: emailAddress,
      subject: `Nova mensagem de contato via portfólio - ${name}`,
      html: `<ul style="list-style:none; font-size:1.1rem; color:#161C22;">
      <li>Nome do cliente: ${name}</li>
      <li>Email: ${email}</li>
      <li>Celular: ${phone}</li>
      <li>Objetivo do contato: ${reason}</li>
      <li>Mensagem:<p>${message}</p></li>
      </ul>`,
      replyTo: email
    };

    await transporter.sendMail(sendGridMessage);

    return res.send('');
  } catch (err) {
    return res.json({
      error: true,
      message: err.message
    });
  }
};
