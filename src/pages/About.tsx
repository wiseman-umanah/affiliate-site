export default function About() {
  return (
    <main className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          About Us
        </h1>

        {/* Introduction */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-white">PropLite</span> – Your Trusted Gateway to Trading & Tech Deals.
        </p>

        {/* Main Body */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          We’re a one-stop platform dedicated to helping you access the top prop trading firms and the best gadget deals in Nigeria.
        </p>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          As official affiliates of Maven Trading, FundedNext, FunderPro, Exness, and Oraimo, our mission is simple:
        </p>

        <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-400 mb-8">
          Make trading accessible. Make gadgets affordable.
        </blockquote>

        {/* What We Do */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300">
          What We Do
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">📈</span>
            <div>
              <h3 className="text-lg font-semibold text-white">Prop Firm Access</h3>
              <p className="text-gray-300">
                We connect you with trusted prop firms that offer up to 85% profit split, fast funding, and low minimum deposits.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">🎧</span>
            <div>
              <h3 className="text-lg font-semibold text-white">Oraimo Gadgets</h3>
              <p className="text-gray-300">
                We promote genuine Oraimo accessories with affiliate links to shop safe and smart.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl">💬</span>
            <div>
              <h3 className="text-lg font-semibold text-white">Support & Discounts</h3>
              <p className="text-gray-300">
                Need help getting started? Want a discount? We’re just a DM away.
              </p>
            </div>
          </li>
        </ul>

        {/* Closing */}
        <p className="text-gray-300 text-lg mt-10 leading-relaxed">
          Whether you’re starting your trading journey or looking for reliable gadgets, PropLite gives you the tools to succeed.
        </p>
      </div>
    </main>
  );
}
