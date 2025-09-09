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
    name?: string;
  }>({ name: '', email: '', message: '' });

  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await submitContactForm('', formData);
      setState(result);
    } catch (error) {
      setState({ error: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action={handleAction} className="flex flex-col items-center">
      <div className="pr-2 pb-2">
        <label htmlFor="name" className="pr-4 text-text">
          Name:
        </label>
        <input
          autoComplete="on"
          type="name"
          id="name"
          name="name"
          defaultValue={state.name}
          required
          placeholder=" your name"
          className="pl-2 mr-1 text-text min-w-80 min-h-10 border border-accent rounded"
        ></input>
      </div>
      <div className="pr-2 pb-2">
        <label htmlFor="email" className="pr-4 text-text">
          Email:
        </label>
        <input
          autoComplete="on"
          type="email"
          id="email"
          name="email"
          defaultValue={state.email}
          required
          placeholder=" your@email.com"
          className="pl-2 text-text min-w-80 min-h-10 border border-accent rounded"
        ></input>
      </div>
      <div className="flex flex-col-2 mr-7">
        <label className="pr-5 pb-2 text-text" htmlFor="message">
          Message:
        </label>
        <textarea
          autoComplete="on"
          id="message"
          name="message"
          required
          defaultValue={state.message}
          placeholder="Type your message here..."
          rows={8}
          className="pl-2 pt-2 mr-3 text-text min-w-80 min-h-80 border border-accent rounded"
        />
      </div>

      <button
        className="button mt-5 max-w-fit"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Sending message' : 'Send Message'}
      </button>

      {state.success && <p className="text-green-500">{state.success}</p>}
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
