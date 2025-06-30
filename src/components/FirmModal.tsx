import { ExternalLink, X } from "lucide-react";

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

interface FirmModalProps {
  firm: Firm;
  onClose: () => void;
}

export function FirmModal({ firm, onClose }: FirmModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1f2937] border border-slate-700 rounded-xl w-full max-w-md relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content wrapper with scroll */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <h3 className="text-xl font-bold text-white mb-2">{firm.name}</h3>
          <p className="text-gray-400 mb-4">{firm.tagline}</p>

          {firm.description && (
            <p className="text-gray-300 whitespace-pre-line mb-4">{firm.description}</p>
          )}

          {firm.minDeposit && firm.profitSplit && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Min Deposit</p>
                <p className="text-white font-bold text-lg">${firm.minDeposit}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Profit Split</p>
                <p className="text-white font-bold text-lg">{firm.profitSplit}%</p>
              </div>
            </div>
          )}

          {firm.discountCode && (
            <div className="bg-slate-700 border border-cyan-500/30 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-400 text-sm">Discount Code</span>
              </div>
              <span className="text-cyan-300 font-bold text-lg">{firm.discountCode}</span>
            </div>
          )}

          <a
            href={firm.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2563EB] hover:bg-cyan-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
