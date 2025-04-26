"use client";
import React from "react";
import { Logo, NavBar } from "./index";
function Header() {
  return (
    <header className="container flex items-center gap-12 pt-6">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
