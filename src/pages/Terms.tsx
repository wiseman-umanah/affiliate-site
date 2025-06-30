export default function Terms() {
  return (
    <main className="bg-gradient-to-br from-[#0f172a] to-[#020617] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-fade-in">
        	Terms of Use
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Welcome to Proplite. By accessing our platform, you agree to the terms below. Please read them carefully.
          </p>
        </section>

        <section className="bg-[#1e293b] border border-blue-900/50 rounded-2xl shadow-xl px-6 py-8 space-y-8 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Affiliate Disclosure</h3>
              <p className="text-gray-300 text-sm">
                Some links are affiliate links. We may earn a commission if you purchase through them, at no additional cost to you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">No Financial Advice</h3>
              <p className="text-gray-300 text-sm">
                All content on this site is for informational purposes only. We do not offer financial or trading advice.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">External Sites</h3>
              <p className="text-gray-300 text-sm">
                We are not responsible for third-party content, actions, or privacy practices on sites we link to.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Accuracy of Information</h3>
              <p className="text-gray-300 text-sm">
                We strive to keep our content accurate and updated, but we do not guarantee completeness or correctness.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-base">
            Questions or feedback about these terms?{" "}
            <a
              href="/contact"
              className="text-cyan-400 hover:text-cyan-300 underline transition"
            >
              Contact us
            </a>{" "}
            — we’re always here to help.
          </p>
        </div>
      </div>
    </main>
  );
}
