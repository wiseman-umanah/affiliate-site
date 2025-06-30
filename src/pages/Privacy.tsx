import { CircleCheck, ChartCandlestick, Shield, Lock, Link } from "lucide-react";

export default function Privacy() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500/10 p-3 rounded-full">
            <Shield className="text-[#2563EB]"/>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Privacy Policy
          </h1>
        </div>

        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed">
          At <span className="font-semibold text-white">PropLite</span>, your privacy matters. Below is an overview of how we handle your data with care and transparency.
        </p>

        {/* Policy Points */}
        <div className="grid gap-6">
          {[
            {
              icon: <CircleCheck />,
              text: "We do not collect personal data unless you contact us directly via email, WhatsApp, or a form."
            },
            {
              icon: <ChartCandlestick />,
              text: "We collect anonymous usage statistics (like visits and clicks) to improve our platform."
            },
            {
              icon: <Lock />,
              text: "We never sell or share your personal information with third parties."
            },
            {
              icon: <Link />,
              text: "All affiliate redirects are secure and encrypted."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-[#1F2937] border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition"
            >
              <div className="text-cyan-400 text-xl">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="text-gray-300 text-lg leading-relaxed mt-8">
          If you reach out to us, your details are kept strictly confidential and used only to respond to your inquiry. 
          <br />
          We’re committed to protecting your trust.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
