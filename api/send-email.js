import nodemailer from "nodemailer";
import { z } from "zod";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10kb",
    },
  },
};

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3)
    .max(100)
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/),

  email: z.string().trim().email().max(255),

  message: z.string().trim().min(10).max(5000),

  company: z.string().optional(),
});

export default async function handler(req, res) {
  // Handle CORS preflight (safe even if not needed)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form submission" });
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot spam protection
  if (company) {
    return res.status(200).json({ ok: true });
  }

  try {
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error("Missing MAIL_USER or MAIL_PASS environment variables");

      return res.status(500).json({
        error: "Mail service configuration error",
      });
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const subject = `Nuevo mensaje de ${name}`;

    const text = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nuevo lead desde jb.repair</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const mailOptions = {
      from: `"JB Repair" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
