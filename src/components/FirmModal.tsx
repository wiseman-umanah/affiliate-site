import { useState } from "react";
import { ExternalLink, X, Trash2 } from "lucide-react";

export interface Firm {
  $id: string;
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
  mode?: "view" | "edit";
  onClose: () => void;
  onSave?: (updated: Firm) => void;
  onDelete?: () => void;
}

export function FirmModal({
  firm,
  mode = "view",
  onClose,
  onSave,
  onDelete,
}: FirmModalProps) {
  const [form, setForm] = useState<Firm>(firm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "rating" ||
        name === "minDeposit" ||
        name === "profitSplit"
          ? Number(value)
          : value,
    }));
  };

  const handleSave = () => {
    if (onSave) {
      const sanitizeUrl = (url: string) =>
        url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`;

      const sanitizedForm = {
        ...form,
        websiteUrl: sanitizeUrl(form.websiteUrl),
        faviconDomain: sanitizeUrl(form.faviconDomain),
      };
      console.log(sanitizedForm);
      onSave(sanitizedForm);
      onClose();
    }
  };

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
          className="absolute top-3 right-3 text-gray-400 hover:text-white z-50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[80vh] overflow-y-auto">
          {/* Sticky Header */}
          {mode === "view" && (
            <div className="sticky top-0 z-30 bg-[#1f2937] border-b border-slate-700 shadow-md p-6">
              <h3 className="text-xl font-bold text-white">{firm.name}</h3>
              <p className="text-gray-400">{firm.tagline}</p>
              {firm.discountCode && (
                <div className="bg-slate-700 border border-cyan-500/30 rounded-lg p-4 mt-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">
                      Discount Code
                    </span>
                  </div>
                  <span className="text-cyan-300 font-bold text-lg">
                    {firm.discountCode}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Modal Content */}
          <div className="p-6 space-y-4">
            {mode === "edit" ? (
              <>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="tagline"
                  value={form.tagline}
                  onChange={handleChange}
                  placeholder="Tagline"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <textarea
                  name="description"
                  value={form.description || ""}
                  onChange={handleChange}
                  placeholder="Description"
                  rows={4}
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="rating"
                  type="number"
                  value={form.rating}
                  onChange={handleChange}
                  placeholder="Rating"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="minDeposit"
                  type="number"
                  value={form.minDeposit || ""}
                  onChange={handleChange}
                  placeholder="Min Deposit"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="profitSplit"
                  type="number"
                  value={form.profitSplit || ""}
                  onChange={handleChange}
                  placeholder="Profit Split"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="discountCode"
                  value={form.discountCode || ""}
                  onChange={handleChange}
                  placeholder="Discount Code"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="websiteUrl"
                  value={form.websiteUrl}
                  onChange={handleChange}
                  placeholder="Website URL"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />
                <input
                  name="faviconDomain"
                  value={form.faviconDomain}
                  onChange={handleChange}
                  placeholder="Favicon Domain"
                  className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
                />

                <button
                  onClick={handleSave}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition mt-4"
                >
                  Save Changes
                </button>

                {onDelete && (
                  <button
                    onClick={() => {
                      if (
                        confirm("Are you sure you want to delete this firm?")
                      ) {
                        onDelete();
                        onClose();
                      }
                    }}
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-lg transition mt-2 flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Firm
                  </button>
                )}
              </>
            ) : (
              <>
                {firm.description && (
                  <p className="text-gray-300 whitespace-pre-line">
                    {firm.description}
                  </p>
                )}

                {firm.minDeposit && firm.profitSplit && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Min Deposit</p>
                      <p className="text-white font-bold text-lg">
                        ${firm.minDeposit}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Profit Split</p>
                      <p className="text-white font-bold text-lg">
                        {firm.profitSplit}%
                      </p>
                    </div>
                  </div>
                )}

                <a
                  href={firm.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2563EB] hover:bg-cyan-300 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 mt-4"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

