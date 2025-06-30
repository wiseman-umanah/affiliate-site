export default function Privacy() {
  return (
    <main className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          🔒 Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          We respect your privacy. Here’s how we handle your data:
        </p>

        {/* Policy Points */}
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">✅</span>
            <p className="text-gray-300">
              We do not collect personal data unless you voluntarily contact us via email, WhatsApp, or form.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">📊</span>
            <p className="text-gray-300">
              We may collect anonymous analytics (e.g. number of visits, clicks) to improve our services.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🔒</span>
            <p className="text-gray-300">
              We will never sell, rent, or share your personal information.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🔗</span>
            <p className="text-gray-300">
              All affiliate activity and redirects are handled securely.
            </p>
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-300 text-lg mt-10 leading-relaxed">
          If you contact us directly, your details will be kept private and used only to respond to your inquiry.
        </p>
      </div>
    </main>
  );
}
