'use server';

import { Resend } from 'resend';
import {
  extractFormData,
  validateEmail,
  validateRequired,
} from '../utils/validation';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function submitContactForm(
  previousState: string,
  formData: FormData
) {
  if (!resend) {
    return {
      error: 'Email service not configured',
      name: '',
      email: '',
      message: '',
    };
  }

  const { email, message, name } = extractFormData(formData);

  if (
    !validateRequired(name) ||
    !validateRequired(email) ||
    !validateRequired(message)
  ) {
    return {
      error: 'Name, email and message are required',
      name: name || '',
      email: email || '',
      message: message || '',
    };
  }

  if (!validateEmail(email!)) {
    return {
      error: 'Please enter a valid email address',
      name: name || '',
      email: email || '',
      message: message || '',
    };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'rebeccalang50@gmail.com',
      subject: 'New Contact Form Submission from Portfolio',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      success: 'Email sent successfully! I look forward to replying promptly.',
      name: '',
      message: '',
      email: '',
    };
  } catch (error) {
    return {
      error: 'Failed to send email. Please try again.',
      name: name || '',
      email: email || '',
      message: message || '',
    };
  }
}
