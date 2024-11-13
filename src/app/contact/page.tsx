'use client';

import { useState } from "react";

export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("There was an error sending your message.");
      }
    } catch (error) {
      setStatusMessage("There was an error sending your message.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="bg-gray-500 flex flex-col items-center justify-center h-screen w-screen px-4 py-8">
  <h1 className="text-3xl font-semibold text-slate-800 mb-6">Contact Me</h1>
  <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4">
    <div className="space-y-2">
      <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
      ></textarea>
    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 disabled:bg-blue-300"
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>
  </form>
  {statusMessage && <p className="mt-4 text-center text-sm text-slate-600">{statusMessage}</p>}
</main>

  );
};