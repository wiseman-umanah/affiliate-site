"use client";
import { useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    account.get().then(
      () => navigate("/admin"),
      () => {}
    );
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await account.createEmailPasswordSession(email, password);
      navigate("/admin");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen px-8 bg-black text-white flex flex-col items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded-lg space-y-4 w-full max-w-sm"
      >
        <h1 className="text-xl font-bold">Admin Login</h1>
        {error && <p className="text-red-400">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded w-full"
        >
          Log In
        </button>
      </form>
    </main>
  );
}
