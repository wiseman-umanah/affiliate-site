import { useState } from "react";
import { X } from "lucide-react";

interface AddFirmModalProps {
  onClose: () => void;
  onSave: (firm: {
    name: string;
    tagline?: string;
    rating: number;
    websiteUrl: string;
    faviconDomain?: string;
    description?: string;
  }) => void;
  loading: boolean;
}

export function AddFirmModal({ onClose, onSave, loading }: AddFirmModalProps) {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    rating: "",
    websiteUrl: "",
    faviconDomain: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.websiteUrl.trim()) {
      alert("Please provide at least Firm Name and Website URL.");
      return;
    }

    const parsedRating = parseFloat(form.rating);
    if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
      alert("Please enter a valid numeric rating between 0 and 5.");
      return;
    }

    const sanitizeUrl = (url: string) => {
      const trimmed = url.trim();
      if (trimmed.startsWith("http")) return trimmed;
      return `https://${trimmed}`;
    };

    onSave({
      name: form.name.trim(),
      tagline: form.tagline?.trim(),
      rating: parsedRating,
      websiteUrl: sanitizeUrl(form.websiteUrl),
      faviconDomain: form.faviconDomain ? sanitizeUrl(form.faviconDomain) : undefined,
      description: form.description?.trim(),
    });
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
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-white">Add New Firm</h2>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Firm Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g., FundedNext"
              className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">
              Website URL (omit https://)
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-2 rounded-l bg-slate-700 text-gray-400">
                https://
              </span>
              <input
                name="websiteUrl"
                value={form.websiteUrl}
                onChange={handleChange}
                placeholder="example.com"
                className="w-full bg-slate-800 border-t border-b border-r border-slate-600 rounded-r px-3 py-2 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Tagline</label>
            <input
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              placeholder="Empowering traders worldwide"
              className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">
              Favicon Domain (optional)
              <span className="block text-xs text-gray-500">
                Used to fetch site icon
              </span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-2 rounded-l bg-slate-700 text-gray-400">
                https://
              </span>
              <input
                name="faviconDomain"
                value={form.faviconDomain}
                onChange={handleChange}
                placeholder="example.com"
                className="w-full bg-slate-800 border-t border-b border-r border-slate-600 rounded-r px-3 py-2 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Rating (0-5)</label>
            <input
              name="rating"
              type="text"
              value={form.rating}
              onChange={handleChange}
              placeholder="e.g., 4.5"
              className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Optional description..."
              rows={4}
              className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Firm"}
          </button>
        </div>
      </div>
    </div>
  );
}
