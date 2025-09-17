'use client';

import { useState } from 'react';
import { submitContactForm } from '../constants/contact-actions';
import { ContactFormState, initialContactFormState } from '../models/contact';

export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialContactFormState);

  const handleAction = async (formData: FormData) => {
    setState((prev) => ({ ...prev, status: 'loading' }));

    try {
      const result = await submitContactForm('', formData);

      if (result.success) {
        setState({
          data: { name: '', email: '', message: '' },
          status: 'success',
          message: result.success,
        });
      } else {
        setState((prev) => ({
          ...prev,
          status: 'error',
          message: result.error || 'Something went wrong. Please try again.',
          data: result.data ? { ...prev.data, ...result.data } : prev.data,
        }));
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        status: 'error',
        message:
          'Something went wrong. Please try again or contact me on LinkedIn.',
      }));
    }
  };

  return (
    <form
      action={handleAction}
      className="card flex flex-col items-center w-full max-w-md mx-auto px-6 py-8 shadow-sm"
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
          value={state.data.name}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              data: { ...prev.data, name: e.target.value },
            }))
          }
          required
          placeholder=" your name"
          className="w-full px-4 py-3 text-textGray min-h-12 border border-primary border-opacity-20 rounded-md text-sm md:text-base bg-white focus:border-primary focus:border-opacity-60 focus:outline-none transition-colors duration-200"
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
          value={state.data.email}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              data: { ...prev.data, email: e.target.value },
            }))
          }
          required
          placeholder=" your@email.com"
          className="w-full px-4 py-3 text-textGray min-h-12 border border-primary border-opacity-20 rounded-md text-sm md:text-base bg-white focus:border-primary focus:border-opacity-60 focus:outline-none transition-colors duration-200"
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
          value={state.data.message}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              data: { ...prev.data, message: e.target.value },
            }))
          }
          placeholder="Type your message here..."
          rows={6}
          className="w-full px-4 py-3 text-textGray min-h-32 border border-primary border-opacity-20 rounded-md text-sm md:text-base bg-white focus:border-primary focus:border-opacity-60 focus:outline-none transition-colors duration-200 resize-vertical"
        />
      </div>

      <button
        className="button mt-2 w-full md:w-auto md:min-w-fit px-6 py-3 text-sm md:text-base"
        type="submit"
        disabled={state.status === 'loading'}
      >
        {state.status === 'loading' ? 'Sending message' : 'Send Message'}
      </button>

      {state.status === 'success' && state.message && (
        <div className="mt-6 w-full p-4 bg-green-50 text-green-700 rounded-md border border-green-200 shadow-sm">
          <p className="text-center text-sm md:text-base">{state.message}</p>
        </div>
      )}
      {state.status === 'error' && state.message && (
        <div className="mt-6 w-full p-4 bg-red-50 text-red-700 rounded-md border border-red-200 shadow-sm">
          <p className="text-center text-sm md:text-base">{state.message}</p>
        </div>
      )}
    </form>
  );
}
