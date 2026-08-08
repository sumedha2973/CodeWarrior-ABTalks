import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import MobileBottomNav from "../components/common/MobileBottomNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-1 w-full max-w-md mx-auto px-4 pb-20 pt-4 md:max-w-4xl md:pb-8">
        <Outlet />
      </main>
      <MobileBottomNav />
    </div>
  );
}