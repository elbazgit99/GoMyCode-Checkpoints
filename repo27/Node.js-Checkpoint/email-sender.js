// email-sender.js

import nodemailer from 'nodemailer'; // Import nodemailer
import 'dotenv/config';              // Load environment variables from .env

// Configure the transporter with your email service details
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' for Gmail accounts
  auth: {
    user: process.env.EMAIL_USER, // Your email address from .env
    pass: process.env.EMAIL_PASS  // Your App Password from .env
  }
});

// Define email options
const mailOptions = {
  from: process.env.EMAIL_USER, // Sender address
  to: process.env.EMAIL_USER,   // Recipient address (can be yourself or another email)
  subject: 'Test Email from Node.js', // Subject line
  text: 'Hello from your Node.js email sender!', // Plain text body
  html: '<b>Hello Node.js!</b><p>This is an email sent from your Node.js application using Nodemailer.</p>' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
