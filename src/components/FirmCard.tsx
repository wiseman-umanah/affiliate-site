import { useState } from "react";
import { Star } from "lucide-react";
import { FirmModal } from "./FirmModal";

interface Firm {
  name: string;
  tagline: string;
  description?: string;
  rating: number;
  minDeposit?: number;
  profitSplit?: number;
  discountCode?: string;
  websiteUrl: string;
  faviconDomain: string;
}

export function FirmCard({ firm }: { firm: Firm }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="bg-[#2B2E36] border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <img
              src={`https://www.google.com/s2/favicons?domain=${firm.faviconDomain}&sz=64`}
              alt={`${firm.name} logo`}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex items-center gap-1 bg-slate-700 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white font-semibold text-sm">{firm.rating}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white font-bold text-xl mb-2">{firm.name}</h4>
          <p className="text-gray-400 text-sm">{firm.tagline}</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-[#2563EB] hover:bg-cyan-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
        >
          See More
        </button>
      </div>

      {showModal && <FirmModal firm={firm} onClose={() => setShowModal(false)} />}
    </>
  );
}
