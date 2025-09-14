'use client';

import { useState } from 'react';
import { submitContactForm } from '../constants/contact-actions';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<{
    success?: string;
    error?: string;
    email: string;
    message: string;
    name: string;
  }>({ name: '', email: '', message: '' });

  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const result = await submitContactForm('', formData);
      setState(result);
    } catch (error) {
      setState({
        error:
          'Something went wrong. Please try again or contact me on LinkedIn.',
        name: state.name,
        email: state.email,
        message: state.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      action={handleAction}
      className="flex flex-col items-center w-full max-w-md mx-auto px-4"
    >
      <div className="w-full mb-4">
        <label
          htmlFor="name"
          className="block text-textGray mb-2 text-sm md:text-base"
        >
          Name:
        </label>
        <input
          autoComplete="on"
          type="text"
          id="name"
          name="name"
          defaultValue={state.name}
          required
          placeholder=" your name"
          className="w-full px-3 py-2 text-textGray min-h-10 border border-accent rounded text-sm md:text-base"
        />
      </div>
      <div className="w-full mb-4">
        <label
          htmlFor="email"
          className="block text-textGray mb-2 text-sm md:text-base"
        >
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
          className="w-full px-3 py-2 text-textGray min-h-10 border border-accent rounded text-sm md:text-base"
        />
      </div>
      <div className="w-full mb-6">
        <label
          className="block text-textGray mb-2 text-sm md:text-base"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          autoComplete="on"
          id="message"
          name="message"
          required
          defaultValue={state.message}
          placeholder="Type your message here..."
          rows={6}
          className="w-full px-3 py-2 text-textGray min-h-32 border border-accent rounded text-sm md:text-base resize-vertical"
        />
      </div>

      <button
        className="button mt-2 w-full md:w-auto md:min-w-fit px-6 py-3 text-sm md:text-base"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Sending message' : 'Send Message'}
      </button>

      {state.success && (
        <div className="mt-4 w-full p-2 pt-4 bg-eggshell text-textGray rounded-full border border-white shadow-md">
          <p className="text-center text-sm md:text-base">{state.success}</p>
        </div>
      )}
      {state.error && (
        <div className="mt-4 w-full p-2 pt-4 bg-red-50 text-red-700 rounded-full border border-red-200 shadow-md">
          <p className="text-center text-sm md:text-base">{state.error}</p>
        </div>
      )}
    </form>
  );
}
