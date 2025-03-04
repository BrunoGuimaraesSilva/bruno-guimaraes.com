import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { adminEmailTemplate, clientEmailTemplate } from './templates/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const { data: adminEmailData, error: adminEmailError } = await resend.emails.send({
        from: 'bruno-guimaraes.com <no-reply@bruno-guimaraes.com>',
        to: ['bruno.sil16441@gmail.com'],
        subject: `Message from ${name}`,
        html: adminEmailTemplate(name, email, message),
      });

      if (adminEmailError) {
        return res.status(400).json(adminEmailError);
      }

      const { data: clientEmailData, error: clientEmailError } = await resend.emails.send({
        from: 'bruno-guimaraes.com <no-reply@bruno-guimaraes.com>',
        to: [email], // Send email to the client's email address
        subject: `We have received your message, ${name}`,
        html: clientEmailTemplate(name, message),
      });

      if (clientEmailError) {
        return res.status(400).json(clientEmailError);
      }

      return res.status(200).json({
        adminEmail: adminEmailData,
        clientEmail: clientEmailData,
      });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};
