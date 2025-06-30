"use client"

import { useState } from "react"
import { Search, CreditCard } from "lucide-react"
import { FirmCard } from "../components/FirmCard"


const tradingFirms = [
  {
	name: "Oraimo Nigeria",
    tagline: "Oraimo Official Online Store",
    rating: 5.0,
	discountCode: "FGIJXETZ",
    websiteUrl: "https://ng.oraimo.com?affiliate_code=f1si5kuq",
	faviconDomain: "oraimo.com",
  description: `How To Use Oraimo NG Discount Code

			Save big on your favorite Oraimo products with our exclusive discount codes. Follow these simple steps to redeem your code:
			Visit the Oraimo Store
			Click here to shop directly on the official Oraimo store.
			Select Your Products
			Browse through the wide range of Oraimo accessories, including earbuds, power banks, smartwatches, and more. Add your favorite items to the shopping cart.
			Go to Checkout
			Once you’re ready, proceed to the checkout page by clicking the cart icon.
			Look for the field labeled “enter discount Code”
			Enter the relevant discount code from Online Discount Network.

			Click “Apply” to validate the coupon
			The discount should be reflected in your order total.
			Proceed to payment online or at delivery and Complete Your Purchase:

			Congratulations! You’ve successfully used an Oraimo discount code.`
  },
  {
    name: "FundedNext",
    tagline: "Empowering Promising Trader Worldwide",
    rating: 4.6,
    minDeposit: 59,
    profitSplit: 90,
    websiteUrl: "https://fundednext.com/?fpr=johnson81",
	faviconDomain: "fundednext.com"
  },
  {
    name: "Maven Trading",
    tagline: "Professional Trading Challenge",
    rating: 4.8,
    minDeposit: 155,
    profitSplit: 80,
    websiteUrl: "https://maventrading.com/?ref=bbyface",
	faviconDomain: "maventrading.com"
  },
  {
    name: "Exness",
    tagline: "Trade With Confidence",
    rating: 4.5,
    minDeposit: 99,
    profitSplit: 85,
    websiteUrl: "https://one.exnesstrack.org/a/c_hj2fo34gxe",
	faviconDomain: "exness.com"
  },
  {
    name: "Funderpro",
    tagline: "Trade With Confidence",
    rating: 4.5,
    minDeposit: 99,
    profitSplit: 85,
    websiteUrl: "https://funderpro.cxclick.com/visit/?bta=39623&brand=funderpro",
	faviconDomain: "funderpro.com"
  }
  
]

function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFirms = tradingFirms.filter((firm) => firm.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
	<main className="py-8">
        <div className="text-center px-4 min-h-screen flex pt-56 items-center flex-col bg-gradient-to-b from-[#162452] via-[#0c1524] to-black">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 lg:mb-8">
			Find the Best <span className="text-cyan-300">Futures Trading </span>Prop Firms & <span className="text-cyan-300">Oraimo Discount </span>Deals
			</h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Compare top proprietary trading firms with exclusive discounts — and get access to premium Oraimo accessories to power your lifestyle on and off the charts. 
			All offers available only through our affiliate links.
          </p>
        </div>

        <div className="px-4 mb-8 lg:mb-12">
          <div className="relative  max-w-4xl mx-auto">
				<input
				type="text"
				placeholder="Search"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
				/>
				<button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#2563EB] hover:bg-cyan-300 text-white p-2 rounded-lg transition-colors">
					<Search className="w-4 h-4" />
				</button>
			</div>
        </div>

        <div className="max-w-[90%] mx-auto">
			<div className="flex items-center gap-3 mb-6 lg:mb-8">
			<CreditCard className="w-6 h-6 text-cyan-300" />
			<h3 className="text-xl lg:text-2xl font-semibold text-gray-300">Proprietary Trading Firms</h3>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
			{filteredFirms.map((firm, idx) => (
				<FirmCard key={idx} firm={firm} />
			))}
			</div>

			{filteredFirms.length === 0 && (
			<div className="text-center py-12">
				<p className="text-gray-400 text-lg">No firms found matching your search.</p>
			</div>
			)}

		</div>
	</main>
  )
}

export default Home;
