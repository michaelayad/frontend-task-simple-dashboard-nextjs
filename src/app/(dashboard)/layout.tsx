"use client";
import NavBar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleDrawer = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" h-screen flex flex-row w-full">
      <Sidebar isDrawerOpen={isSidebarOpen} setIsDrawerOpen={setIsSidebarOpen} />
      <div className="flex-1 h-full overflow-y-scroll ">
        <NavBar toggleDrawer={toggleDrawer} />
        <div className="p-4 w-full">{children}</div>
      </div>
    </div>
  );
}
