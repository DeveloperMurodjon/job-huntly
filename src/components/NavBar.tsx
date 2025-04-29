"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/services/store/store";
import { logOut } from "@/features/auth/authSlice";
import { ModeToggle } from "./index";

export default function NavBar() {
  const pathname = usePathname();
  const access = useSelector((state: RootState) => state.auth.access);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("refreshToken");
    router.push("/login");
  };

  return (
    <nav className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left menu */}
        <div className="flex gap-6">
          <Link href="/jobs">
            <p
              className={
                pathname === "/jobs"
                  ? "border-b-2 border-brands-primary pb-1 font-epilogue"
                  : "pb-1 font-epilogue"
              }
            >
              Find Jobs
            </p>
          </Link>

          {access && (
            <Link href="/jobs/your">
              <p
                className={
                  pathname === "/jobs/your"
                    ? "border-b-2 border-brands-primary pb-1 font-epilogue"
                    : "pb-1 font-epilogue"
                }
              >
                Your Jobs
              </p>
            </Link>
          )}

          <Link href="/specialists">
            <p
              className={
                pathname === "/specialists"
                  ? "border-b-2 border-brands-primary pb-1 font-epilogue"
                  : "pb-1 font-epilogue"
              }
            >
              Find Specialists
            </p>
          </Link>

          {access && (
            <Link href="/specialists/your">
              <p
                className={
                  pathname === "/specialists/your"
                    ? "border-b-2 border-brands-primary pb-1 font-epilogue"
                    : "pb-1 font-epilogue"
                }
              >
                Your Specialists
              </p>
            </Link>
          )}
        </div>

        {/* Right menu */}
        <div className="flex items-center gap-4">
          {!access ? (
            <>
              <Link href="/login">
                <p className="px-4 py-2">Login</p>
              </Link>
              <Link href="/register">
                <p className="px-4 py-2 font-epilogue">Register</p>
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white font-epilogue bg-red-500 rounded"
            >
              Logout
            </button>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
