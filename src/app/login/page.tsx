"use client";

import React, { useState } from "react";
import { useLoginMutation } from "@/services/authApiSlice";
import { setCredentials } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      console.log("Serverdan kelgan res:", res);
      dispatch(setCredentials({ access: res.token, refresh: res.token }));
      router.push("/jobs");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-semibold mb-4">Login</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Your username"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        >
          {isLoading ? "Logging in…" : "Login"}
        </button>
      </form>
    </main>
  );
}
