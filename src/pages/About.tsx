import ParticlesSphereCard from "../components/Particles"
import { TrendingUp, Headphones, MessageCircle, Rocket } from "lucide-react";


export default function About() {
  return (
    <main className="bg-gradient-to-b from-black via-[#0c1524] to-black text-white px-6 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Hero Section */}
        <section className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to <span className="text-cyan-400">PropLite</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted gateway to <span className="text-white font-medium">Prop Trading</span> & <span className="text-white font-medium">Tech Deals</span> in Nigeria.
          </p>
          <blockquote className="text-cyan-300 italic mt-4">
            "Make trading accessible. Make gadgets affordable."
          </blockquote>
        </section>

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300">
              Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed">
              PropLite is your one-stop hub for accessing the most rewarding proprietary trading firms and top-tier gadget discounts. We’re proudly partnered with industry leaders like:
              <br />
              <span className="text-white font-medium">
                Maven Trading, FundedNext, FunderPro, Exness, and Oraimo.
              </span>
            </p>
          </div>

          <div className="w-full animate-fade-in">
            <ParticlesSphereCard />
          </div>
        </section>

        {/* What We Do */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-cyan-300">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#1F2937] p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition duration-300 shadow-md">
              <div className="text-4xl mb-4"><TrendingUp /></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Prop Firm Access</h3>
              <p className="text-gray-300 text-sm">
                We help you connect with trusted firms offering up to <strong className="text-white">85% profit split</strong>, low minimum deposits, and fast funding setups.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1F2937] p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition duration-300 shadow-md">
              <div className="text-4xl mb-4"><Headphones /></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Oraimo Gadgets</h3>
              <p className="text-gray-300 text-sm">
                We promote original Oraimo accessories with affiliate-backed discounts — shop smart, shop safe.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1F2937] p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition duration-300 shadow-md">
              <div className="text-4xl mb-4"><MessageCircle /></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Support & Discounts</h3>
              <p className="text-gray-300 text-sm">
                New to trading? Confused about product links? Need a discount? Our team is just a DM away — always ready to assist.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center pt-12">
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Whether you're taking your first step into the trading world or searching for affordable tech, PropLite is built to help you succeed. Let’s grow together.
          </p>
          <p className="text-cyan-400 mt-4 flex items-center justify-center gap-2 font-semibold">
            Ready to explore? <Rocket />
          </p>
        </section>
      </div>
    </main>
  );
}
