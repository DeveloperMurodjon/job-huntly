"use client";

import { useDispatch } from "react-redux";
import { logOut } from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("refreshToken");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
