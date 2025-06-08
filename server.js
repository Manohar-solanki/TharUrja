const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configure your SMTP transporter (update with your SMTP service)
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP host
    port: 465, // or 587
    secure: true, // true for 465, false for 587
    auth: {
      user: 'your_email@example.com', // SMTP username
      pass: 'your_smtp_password',     // SMTP password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: '"TharUrja Contact" <your_email@example.com>',
      to: 'info@tharurja.com', // Replace with your receiving email
      subject: 'New Contact Form Submission from TharUrja',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Email failed to send' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
