export default function Contact() {
  return (
    <main className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          📞 Contact Us
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Need help, questions, or discount codes? We’re here to assist with:
        </p>

        {/* Services */}
        <ul className="space-y-6 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">✅</span>
            <p className="text-gray-300">
              Prop firm sign-ups (Maven, FunderPro, FundedNext, Exness)
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">⚙️</span>
            <p className="text-gray-300">
              Setting up your trading account
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🎧</span>
            <p className="text-gray-300">
              Oraimo product inquiries
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🤝</span>
            <p className="text-gray-300">
              Affiliate support and guidance
            </p>
          </li>
        </ul>

        {/* Contact Details */}
        <div className="space-y-4 text-gray-300">
          <p>
            📩 <span className="text-cyan-400 font-semibold">Email:</span>{" "}
            <a
              href="mailto:Bbyfacejohnson@gmail.com"
              className="underline hover:text-cyan-400 transition"
            >
              Bbyfacejohnson@gmail.com
            </a>
          </p>
          <p>
            📱 <span className="text-cyan-400 font-semibold">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/2349044954046"
              className="underline hover:text-cyan-400 transition"
            >
              +234 904 495 4046
            </a>
          </p>
          <p>
            🐦 <span className="text-cyan-400 font-semibold">X:</span>{" "}
            <a
              href="https://x.com/bbyface029?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-400 transition"
            >
              @bbyface029
            </a>
          </p>
          <p>
            📸 <span className="text-cyan-400 font-semibold">Instagram:</span>{" "}
            <a
              href="https://www.instagram.com/bbyface029?igsh=dnRvNnNtYjdqNnZp&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-400 transition"
            >
              @bbyface029
            </a>
          </p>
          <p>
            🌍 <span className="text-cyan-400 font-semibold">Website:</span>{" "}
            <a
              href="https://proplite.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-400 transition"
            >
              proplite.vercel.app
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
