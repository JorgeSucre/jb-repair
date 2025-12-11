const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Configuración del transporter de Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.MAIL_USER, // correo completo
      pass: process.env.MAIL_PASS, // contraseña de app de Gmail
    },
  });

  const mailOptions = {
    from: `"JB Repair" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Correo: ${email}\n\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
