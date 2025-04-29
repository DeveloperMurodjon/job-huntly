"use client";

import React, { useState } from "react";
import { useRegisterMutation } from "@/services/authApiSlice";
import { setCredentials } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await register({ username, password }).unwrap();
      console.log("Serverdan kelgan res:", res);
      if (res.token && res.refreshToken) {
        dispatch(
          setCredentials({ access: res.token, refresh: res.refreshToken })
        );
        localStorage.setItem("accessToken", res.token);
        localStorage.setItem("refreshToken", res.refreshToken);
      }
      router.push("/jobs");
    } catch (err: any) {
      console.error("Register error:", err?.data || err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded shadow"
      >
        <h1 className="text-2xl font-semibold mb-4">Register</h1>

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
            placeholder="Create username"
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
            placeholder="password"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
        >
          {isLoading ? "Registering…" : "Register"}
        </button>
      </form>
    </main>
  );
}
