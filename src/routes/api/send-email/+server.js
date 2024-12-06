import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer'; // Install nodemailer: npm install nodemailer

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host
      port: 587, // Replace with your SMTP port
      secure: false, // Use true if the SMTP server requires SSL
      auth: {
        user: 'sophie.gillard11@gmail.com', // Replace with your email
        pass: 'pass', // Replace with your email password
      },
    });

    // Define email options
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender details
      to: 'sophie.gillard11@gmail.com', // Replace with your recipient's email
      subject: 'New Contact Form Submission',
      text: message,
    });

    return json({ success: true });
  } catch (error) {
    console.error(error);
    return json(
      { success: false, error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
