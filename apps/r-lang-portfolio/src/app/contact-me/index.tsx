'use client';

import { useState } from 'react';
import { submitContactForm } from '../constants/contact-actions';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<{
    success?: string;
    error?: string;
    email?: string;
    message?: string;
  }>({ email: '', message: '' });

  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await submitContactForm('', formData);
      setState(result);
    } catch (error) {
      setState({ error: 'Something went wrong. Please try again.' });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action={handleAction}>
      <div>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={state.email}
          required
          placeholder="your@email.com"
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          defaultValue={state.message}
          placeholder="Type your message here..."
          rows={4}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending message' : 'Send Message'}
      </button>

      {state.success && <p className="text-green-500">{state.success}</p>}
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
