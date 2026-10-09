import nodemailer from "nodemailer";
async function POST({ request }) {
  const { name, email, phone, message, subject } = await request.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    // Use true for 465, false for other ports
    auth: {
      user: "sophie.gillard11@gmail.com",
      pass: "kegsngapwdlwmgvs"
    }
  });
  const mailOptions = {
    from: "sophie.gillard11@gmail.com",
    to: "sophie.gillard11@gmail.com",
    subject,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    return new Response("Message sent successfully.", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to send message.", { status: 500 });
  }
}
export {
  POST
};
