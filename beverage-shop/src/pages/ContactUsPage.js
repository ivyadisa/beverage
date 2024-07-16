import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUsPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          setError('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error.text);
        }
      );
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>Enter your Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>Enter a valid email address</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>Enter your message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn-custom w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
}
