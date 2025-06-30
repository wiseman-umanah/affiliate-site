export default function Terms() {
  return (
    <main className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          📃 Terms of Use
        </h1>

        {/* Introduction */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          By using this website, you agree to the following terms:
        </p>

        {/* Terms List */}
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🔗</span>
            <p className="text-gray-300">
              <strong>Affiliate Disclosure:</strong> All links on this site are affiliate links. When you click and make a purchase or register, we may earn a commission at no extra cost to you.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">💡</span>
            <p className="text-gray-300">
              <strong>No Financial Advice:</strong> We do not provide financial, investment, or trading advice. Always do your own research before signing up for any prop firm.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🌐</span>
            <p className="text-gray-300">
              <strong>External Websites:</strong> We are not responsible for the content, actions, or services of third-party websites we link to.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">📝</span>
            <p className="text-gray-300">
              <strong>Content Accuracy:</strong> While we do our best to keep information up-to-date, we do not guarantee accuracy or completeness.
            </p>
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-300 text-lg mt-10 leading-relaxed">
          Your use of this site means you accept these terms.
        </p>
      </div>
    </main>
  );
}
