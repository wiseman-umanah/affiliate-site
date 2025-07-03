"use client";

import { Building, Hammer, Headphones, Handshake, CheckCircle } from "lucide-react";
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwrnonb");

  return (
    <main className="relative bg-gradient-to-br from-black via-[#0f172a] to-black text-white overflow-hidden py-24 px-8">
      <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 text-lg mb-10">
          We’re always here to help with your questions, offers, or partnerships.
        </p>

        <div className="space-y-4 mb-10">
          {[
            { icon: <Building className="text-cyan-400" />, text: "Prop firm sign-ups (Maven, FunderPro, FundedNext, Exness)" },
            { icon: <Hammer className="text-cyan-400" />, text: "Help setting up your trading account" },
            { icon: <Headphones className="text-cyan-400" />, text: "Oraimo product inquiries" },
            { icon: <Handshake className="text-cyan-400" />, text: "Affiliate support and guidance" },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-xl">{icon}</span>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>

        {state.succeeded && (
          <div className="flex items-center gap-3 mb-6 bg-green-600/10 border border-green-600 rounded p-4">
            <CheckCircle className="text-green-500 w-6 h-6" />
            <p className="text-green-400 font-semibold">
              Thanks for contacting us! We will get back to you soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
