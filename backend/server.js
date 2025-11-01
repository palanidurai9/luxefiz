import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// POST route for contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create a transporter using Gmail or another service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your app password (not Gmail password)
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "luxefiz@gmail.com", // receiver (you)
      subject: `New message from ${name}: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
