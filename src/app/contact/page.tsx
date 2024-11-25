"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold text-white">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-black dark:text-white"
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 dark:text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 dark:text-white"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 disabled:bg-blue-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {statusMessage && (
        <p className="mt-4 text-center text-sm text-slate-600">
          {statusMessage}
        </p>
      )}
      <div className="flex flex-row">
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/about">About</Link>
        </Button>
      </div>
    </main>
  );
}
