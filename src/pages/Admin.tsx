import { useState } from "react";
import { Plus, Trash2, Send } from "lucide-react";

export default function AdminDashboard() {
  const [links, setLinks] = useState([
    { id: 1, name: "FundedNext", url: "https://fundednext.com/?fpr=johnson81" },
    { id: 2, name: "Oraimo Nigeria", url: "https://ng.oraimo.com?affiliate_code=f1si5kuq" },
  ]);

  const [newLink, setNewLink] = useState({ name: "", url: "" });
  const [emailContent, setEmailContent] = useState("");

  const addLink = () => {
    if (newLink.name && newLink.url) {
      setLinks([...links, { ...newLink, id: Date.now() }]);
      setNewLink({ name: "", url: "" });
    }
  };

  const deleteLink = (id: number) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const sendEmail = () => {
    // This is a placeholder
    alert(`Email sent:\n\n${emailContent}`);
    setEmailContent("");
  };

  return (
    <main className="bg-black text-white min-h-screen py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">🔧 Admin Dashboard</h1>
        <section>
          <h2 className="text-xl font-semibold mb-4">Manage Affiliate Links</h2>

          <div className="space-y-3 mb-6">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between bg-[#1F2937] px-4 py-3 rounded-lg"
              >
                <div>
                  <p className="font-medium">{link.name}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 text-sm break-all"
                  >
                    {link.url}
                  </a>
                </div>
                <button
                  onClick={() => deleteLink(link.id)}
                  className="text-red-500 hover:text-red-400 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Link Name"
              value={newLink.name}
              onChange={(e) => setNewLink({ ...newLink, name: e.target.value })}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="url"
              placeholder="Link URL"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              onClick={addLink}
              className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
              Add Link
            </button>
          </div>
        </section>

        {/* Send Newsletter Email */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Send Newsletter Email</h2>
          <textarea
            placeholder="Write your email content..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            rows={6}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-4"
          ></textarea>
          <button
            onClick={sendEmail}
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition"
          >
            <Send className="w-4 h-4" />
            Send Email
          </button>
        </section>
      </div>
    </main>
  );
}
