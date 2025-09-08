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
    return { error: 'Email service not configured' };
  }

  const { email, message } = extractFormData(formData);

  if (!validateRequired(email) || !validateRequired(message)) {
    return { error: 'Email and message are required' };
  }

  if (!validateEmail(email!)) {
    return { error: 'Please enter a valid email address' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'rebeccalang50@gmail.com',
      subject: 'New Contact Form Submission from Portfolio',
      text: `Email: ${email}\nMessage: ${message}`,
    });

    return {
      success: 'Email sent successfully! I look forward to replying promptly.',
      message: '',
      email: '',
    };
  } catch (error) {
    return {
      error: 'Failed to send email. Please try again.',
      email,
      message,
    };
  }
}
