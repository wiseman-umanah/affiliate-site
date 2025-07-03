"use client";

import { useEffect, useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import { FirmCard } from "../components/FirmCard";
import { AddFirmModal } from "../components/AddFirmModal";
import { useNavigate } from "react-router-dom";
import { account, databases, Query } from "../lib/appwrite";

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

export default function Admin() {
  const navigate = useNavigate();
  const [firms, setFirms] = useState<Firm[]>([]);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        await account.get();
        setCheckingSession(false);
        fetchFirms();
      } catch {
        navigate("/login");
      }
    }
    checkAuth();
  }, [navigate]);

  const fetchFirms = async () => {
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
    } catch (error) {
      console.error("Failed to load firms:", error);
    } finally {
      setLoading(false);
    }
  };

  const addFirm = async (firmData: {
    name: string;
    tagline?: string;
    rating: number;
    websiteUrl: string;
    faviconDomain?: string;
  }) => {
    setLoading(true);
    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DB_ID!,
        import.meta.env.VITE_APPWRITE_COL_ID!,
        "unique()",
        {
          name: firmData.name,
          tagline: firmData.tagline,
          rating: firmData.rating,
          websiteUrl: firmData.websiteUrl,
          faviconDomain: firmData.faviconDomain,
        }
      );
      setShowModal(false);
      fetchFirms();
    } catch (error) {
      console.error("Failed to add firm:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteFirm = async (id: string) => {
    if (!confirm("Are you sure you want to delete this firm?")) return;
    setLoading(true);
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_APPWRITE_DB_ID!,
        import.meta.env.VITE_APPWRITE_COL_ID!,
        id
      );
      fetchFirms();
    } catch (error) {
      console.error("Failed to delete firm:", error);
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
        <p className="ml-2">Loading Admin Panel...</p>
      </main>
    );
  }

  return (
    <main className="bg-black mt-12 text-white min-h-screen px-6 py-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 flex items-center gap-2">
          Admin Dashboard
          {loading && <Loader2 className="w-5 h-5 animate-spin" />}
        </h1>

        <section>
          <h2 className="text-xl font-semibold mb-4">Your Trading Firms</h2>

		<div className="flex justify-between items-center mb-7">
			<button
				onClick={() => setShowModal(true)}
				className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition"
			>
				<Plus className="w-4 h-4" />
				Add New Firm
			</button>

			<button
				onClick={async () => {
				await account.deleteSession("current");
				navigate("/login");
				}}
				className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg"
			>
				Log Out
			</button>
		</div>

          {/* Firms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {firms.map((firm) => (
              <FirmCard
                key={firm.$id}
                firm={firm}
                mode="edit"
                onDelete={() => deleteFirm(firm.$id)}
                onUpdated={fetchFirms}
              />
            ))}
          </div>
        </section>

        {showModal && (
          <AddFirmModal
            onClose={() => setShowModal(false)}
            onSave={addFirm}
            loading={loading}
          />
        )}
      </div>
    </main>
  );
}
