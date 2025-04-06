import nodemailer from 'nodemailer';

export async function POST({ request }) {
  const { name, email, phone, message, subject } = await request.json();

  // // Verify reCAPTCHA response
  // const recaptchaSecret = process.env.RECAPTCHA_SECRET;
  // const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

  // console.log("recaptchaUrl", recaptchaUrl)
  // const recaptchaResponse = await fetch(recaptchaUrl, { method: 'POST' });
  // const recaptchaData = await recaptchaResponse.json();

  // if (!recaptchaData.success) {
  //   console.log('reCAPTCHA verification failed:', recaptchaData['error-codes'], recaptchaData);
  //   return new Response('reCAPTCHA verification failed.', { status: 400 });
  // }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use true for 465, false for other ports
    auth: {
      user: "sophie.gillard11@gmail.com",
      pass: "kegsngapwdlwmgvs",
    },
  });

  const mailOptions = {
    from: "sophie.gillard11@gmail.com",
    to: "sophie.gillard11@gmail.com",
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Message sent successfully.', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to send message.', { status: 500 });
  }

}
