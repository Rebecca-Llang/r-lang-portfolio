import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'rebeccalang50@gmail.com',
      subject: 'New Contact Form Submission from Portfolio',
      text: `Email: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(
      {
        success:
          'Email sent successfully! I look forward to replying promptly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  );
}
