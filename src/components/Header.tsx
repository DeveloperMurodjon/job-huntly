"use client";
import React from "react";
import { Logo, NavBar } from "./index";
function Header() {
  return (
    <header className="border-b py-4">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
