"use client"

import { useState } from "react"
import { Search, ExternalLink, Star, CreditCard } from "lucide-react"
import "./App.css"
import { Header } from "./components/Header"

const tradingFirms = [
  {
    id: 1,
    name: "FundedNext",
    logo: "/placeholder.svg?height=60&width=60",
    tagline: "Empowering Promising Trader Worldwide",
    rating: 4.6,
    minDeposit: 59,
    profitSplit: 90,
    discountCode: "ERAGON",
    discountValue: "-110% Reward%",
    websiteUrl: "https://fundednext.com",
    couponUrl: "https://fundednext.com/coupon",
  },
  {
    id: 2,
    name: "FTMO",
    logo: "/placeholder.svg?height=60&width=60",
    tagline: "Professional Trading Challenge",
    rating: 4.8,
    minDeposit: 155,
    profitSplit: 80,
    discountCode: "PROP20",
    discountValue: "-20% Discount",
    websiteUrl: "https://ftmo.com",
    couponUrl: "https://ftmo.com/coupon",
  },
  {
    id: 3,
    name: "MyForexFunds",
    logo: "/placeholder.svg?height=60&width=60",
    tagline: "Trade With Confidence",
    rating: 4.5,
    minDeposit: 99,
    profitSplit: 85,
    discountCode: "MFF15",
    discountValue: "-15% Off",
    websiteUrl: "https://myforexfunds.com",
    couponUrl: "https://myforexfunds.com/coupon",
  },
]

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFirms = tradingFirms.filter((firm) => firm.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-black bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
		<Header />

      {/* Main Content */}
      <main className="px-4 py-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-cyan-300 mb-4 lg:mb-6">Prop Firms & Brokers</h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Compare the best proprietary trading firms and brokers with exclusive discounts and bonuses available only
            through our links.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 lg:mb-12 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search firms or brokers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <CreditCard className="w-6 h-6 text-cyan-300" />
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Proprietary Trading Firms</h3>
        </div>

        {/* Trading Firms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredFirms.map((firm) => (
            <div
              key={firm.id}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Header with Logo and Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src={firm.logo || "/placeholder.svg"}
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
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={firm.couponUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  See Coupon
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
      </main>
    </div>
  )
}

export default App
