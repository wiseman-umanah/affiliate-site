"use client"

import { useState } from "react"
import { Search, ExternalLink, Star, CreditCard } from "lucide-react"
import "./App.css"
import { Header } from "./components/Header"

const tradingFirms = [
  {
    name: "FundedNext",
    tagline: "Empowering Promising Trader Worldwide",
    rating: 4.6,
    minDeposit: 59,
    profitSplit: 90,
    discountCode: "ERAGON",
    discountValue: "-110% Reward%",
    websiteUrl: "https://fundednext.com/?fpr=johnson81",
    couponUrl: "https://fundednext.com/coupon",
  },
  {
    name: "Maven Trading",
    tagline: "Professional Trading Challenge",
    rating: 4.8,
    minDeposit: 155,
    profitSplit: 80,
    discountCode: "PROP20",
    discountValue: "-20% Discount",
    websiteUrl: "https://maventrading.com/?ref=bbyface",
    couponUrl: "https://ftmo.com/coupon",
  },
  {
    name: "Exness",
    tagline: "Trade With Confidence",
    rating: 4.5,
    minDeposit: 99,
    profitSplit: 85,
    discountCode: "MFF15",
    discountValue: "-15% Off",
    websiteUrl: "https://one.exnesstrack.org/a/c_hj2fo34gxe",
    couponUrl: "https://myforexfunds.com/coupon",
  },
  {
    name: "Funderpro",
    tagline: "Trade With Confidence",
    rating: 4.5,
    minDeposit: 99,
    profitSplit: 85,
    discountCode: "MFF15",
    discountValue: "-15% Off",
    websiteUrl: "https://funderpro.cxclick.com/visit/?bta=39623&brand=funderpro",
    couponUrl: "https://myforexfunds.com/coupon",
  },
]

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFirms = tradingFirms.filter((firm) => firm.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-black">
		<Header />

      {/* Main Content */}
      <main className="py-8">
        {/* Hero Section */}
        <div className="text-center min-h-screen flex pt-56 items-center flex-col bg-gradient-to-b from-[#162452] via-[#0c1524] to-black">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 lg:mb-8">
			Find the Best <span className="text-cyan-300">Futures Trading </span>Prop Firms
			</h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Compare the best proprietary trading firms and brokers with exclusive discounts and bonuses available only
            through our links.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 lg:mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search firms or brokers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#2563EB] hover:bg-cyan-300 text-white p-2 rounded-lg transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-[90%] mx-auto">
			<div className="flex items-center gap-3 mb-6 lg:mb-8">
			<CreditCard className="w-6 h-6 text-cyan-300" />
			<h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Proprietary Trading Firms</h3>
			</div>

			{/* Trading Firms Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
			{filteredFirms.map((firm, idx) => (
				<div
				key={idx}
				className="bg-[#2B2E36] border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
				>
				{/* Header with Logo and Rating */}
				<div className="flex items-start justify-between mb-4">
					<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
					<img
						src={`https://www.google.com/s2/favicons?domain=${new URL(firm.websiteUrl).hostname}&sz=64`}
						alt={`${firm.name} logo`}
						className="w-8 h-8 object-contain"
					/>
					</div>
					<div className="flex items-center gap-1 bg-slate-700 px-2 py-1 rounded-lg">
					<Star className="w-4 h-4 text-yellow-400 fill-current" />
					<span className="text-white font-semibold text-sm">{firm.rating}</span>
					</div>
				</div>

				{/* Firm Info */}
				<div className="mb-6">
					<h4 className="text-white font-bold text-xl mb-2">{firm.name}</h4>
					<p className="text-gray-400 text-sm">{firm.tagline}</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 gap-4 mb-6">
					<div>
					<p className="text-gray-400 text-sm mb-1">Min Deposit</p>
					<p className="text-white font-bold text-lg">${firm.minDeposit}</p>
					</div>
					<div>
					<p className="text-gray-400 text-sm mb-1">Profit Split</p>
					<p className="text-white font-bold text-lg">{firm.profitSplit}%</p>
					</div>
				</div>

				{/* Discount Code */}
				<div className="bg-slate-700 border border-cyan-500/30 rounded-lg p-4 mb-6">
					<div className="flex items-center gap-2 mb-2">
					<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
					<span className="text-gray-400 text-sm">Discount Code</span>
					</div>
					<div className="flex items-center justify-between">
					<span className="text-cyan-300 font-bold text-lg">{firm.discountCode}</span>
					<span className="text-cyan-400 text-sm">{firm.discountValue}</span>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="space-y-3">
					<a
					href={firm.websiteUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="w-full bg-[#2563EB] hover:bg-cyan-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
					>
					Visit Website
					<ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</a>
				</div>
				</div>
			))}
			</div>

			{/* No Results */}
			{filteredFirms.length === 0 && (
			<div className="text-center py-12">
				<p className="text-gray-400 text-lg">No firms found matching your search.</p>
			</div>
			)}

		</div>
      </main>
    </div>
  )
}

export default App
