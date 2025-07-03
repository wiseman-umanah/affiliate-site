"use client";

import { useEffect, useState } from "react";
import { Search, CreditCard } from "lucide-react";
import { FirmCard } from "../components/FirmCard";
import { databases, Query } from "../lib/appwrite";

type Firm = {
  $id: string;
  name: string;
  tagline: string;
  rating: number;
  minDeposit?: number;
  profitSplit?: number;
  websiteUrl: string;
  faviconDomain: string;
  discountCode?: string;
  description?: string;
};

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [firms, setFirms] = useState<Firm[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFirms() {
      setLoading(true);
      try {
        const res = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DB_ID!,
          import.meta.env.VITE_APPWRITE_COL_ID!,
		  [
			Query.orderDesc("$createdAt")
		  ]
        );
        setFirms(res.documents as unknown as Firm[]);
      } catch (err) {
        console.error("Failed to fetch firms", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFirms();
  }, []);

  const filteredFirms = firms.filter((firm) =>
    firm.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="py-8">
      <div className="text-center px-8 min-h-screen flex pt-56 items-center flex-col bg-gradient-to-b from-[#162452] via-[#0c1524] to-black">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 lg:mb-8">
          Find the Best{" "}
          <span className="text-cyan-300">Futures Trading </span>Prop Firms &{" "}
          <span className="text-cyan-300">Oraimo Discount </span>Deals
        </h2>
        <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Compare top proprietary trading firms with exclusive discounts — and
          get access to premium Oraimo accessories to power your lifestyle on
          and off the charts. All offers available only through our affiliate
          links.
        </p>
      </div>

      <div className="px-8 mb-8 lg:mb-12">
        <div className="relative max-w-4xl mx-auto">
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

      <div className="max-w-[90%] px-8 mx-auto">
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <CreditCard className="w-6 h-6 text-cyan-300" />
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-300">
            Proprietary Trading Firms
          </h3>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading firms...</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirms.map((firm) => (
            <FirmCard key={firm.$id} firm={firm} />
          ))}
        </div>

        {filteredFirms.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No firms found matching your search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
