import { ExternalLink } from "lucide-react"
import type { ReferralOffer } from "../types/ReferralOffer"

interface ReferralCardProps {
  offer: ReferralOffer
}

export default function ReferralCard({ offer }: ReferralCardProps) {
  return (
    <div
      className={`group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${offer.color} hover:border-blue-200 bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden`}
    >
      <div className="text-center pb-4 pt-6 px-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src={offer.logo || "/placeholder.svg"}
              alt={`${offer.platform} logo`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Platform Name */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {offer.platform}
        </h3>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6">
        {/* Description */}
        <p className="text-gray-600 text-center leading-relaxed mb-6">{offer.description}</p>

        {/* Claim Offer Button */}
        <a href={offer.offerUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg group-hover:scale-105 flex items-center justify-center gap-2">
            Claim Offer
            <ExternalLink className="h-4 w-4" />
          </button>
        </a>
      </div>
    </div>
  )
}
