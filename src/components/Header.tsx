"use client";
import React from "react";
import { Logo, NavBar } from "./index";
function Header() {
  return (
    <header className="w-full ">
      <div className="container flex  items-center gap-12 py-[21px]">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
