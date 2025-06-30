"use client";

import InstagramIcon from "../components/icons/Instagram";
import TwitterXIcon from "../components/icons/XLogo";
import WhatsappIcon from "../components/icons/Whatsapp";
import { Mail, Headphones, Building, Hammer, Handshake } from "lucide-react";
import WebsiteIcon from "../components/icons/Website";

export default function Contact() {
  return (
    <main className="relative bg-gradient-to-br from-black via-[#0f172a] to-black text-white overflow-hidden py-24 px-4">
      <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-4 animate-fade-in-up">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 text-lg mb-10 animate-fade-in-up delay-100">
          We’re always here to help with your questions, offers, or partnerships.
        </p>

        <div className="space-y-4 mb-10">
          {[
            { icon: <Building className="text-cyan-400" />, text: "Prop firm sign-ups (Maven, FunderPro, FundedNext, Exness)" },
            { icon: <Hammer className="text-cyan-400" />, text: "Help setting up your trading account" },
            { icon: <Headphones className="text-cyan-400" />, text: "Oraimo product inquiries" },
            { icon: <Handshake className="text-cyan-400" />, text: "Affiliate support and guidance" },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-start gap-4 animate-fade-in-up delay-150">
              <span className="text-xl">{icon}</span>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <ContactLine icon={<Mail className="text-white w-7 h-7"/>} label="Email" value="Bbyfacejohnson@gmail.com" href="mailto:Bbyfacejohnson@gmail.com" />
          <ContactLine icon={<WhatsappIcon className="w-7 h-7"/>} label="WhatsApp" value="+234 904 495 4046" href="https://wa.me/2349044954046" />
          <ContactLine icon={<TwitterXIcon className="w-7 h-7"/>} label="X (Twitter)" value="@bbyface029" href="https://x.com/bbyface029?s=21" />
          <ContactLine icon={<InstagramIcon className="w-7 h-7"/>} label="Instagram" value="@bbyface029" href="https://www.instagram.com/bbyface029?igsh=dnRvNnNtYjdqNnZp&utm_source=qr" />
          <ContactLine icon={<WebsiteIcon className="w-7 h-7" />} label="Website" value="proplite.vercel.app" href="https://proplite.vercel.app" />
        </div>
      </div>
    </main>
  );
}

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <p className="text-gray-300 flex items-center gap-3 group">
      <span className="text-cyan-400 text-xl">{icon}</span>
      <span className="font-semibold text-white">{label}:</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-dotted hover:text-cyan-400 transition-all"
      >
        {value}
      </a>
    </p>
  );
}
