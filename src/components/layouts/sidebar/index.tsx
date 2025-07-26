/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { NavItem } from "@/types/shared";
import { MenuItems } from "./menu-items";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Icon from "@/components/core/icon/icon";
import { useEffect } from "react";

const Sidebar = ({ isDrawerOpen  = false, setIsDrawerOpen  }: { isDrawerOpen: boolean , setIsDrawerOpen:(isOpen: boolean)=>void }) => {
  const pathname = usePathname();

  // Sync isOpen with isToggleDrawer prop from parent
  useEffect(() => {
    setIsDrawerOpen(isDrawerOpen);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        className={clsx(
          "bg-primary-lightest p-4 flex flex-col gap-6 transition-transform duration-300 z-40",
          "w-64 h-full",
          {
            fixed: true,
            "lg:translate-x-0": isDrawerOpen,
            "-translate-x-full": !isDrawerOpen,
          },
          "lg:static lg:translate-x-0"
        )}
      >
        <div className="flex flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Dashboard
          </Link>
          <button
            className={clsx(
              "bg-primary text-white rounded-md lg:hidden p-1 flex items-center justify-center cursor-pointer hover:bg-primary-darker"
            )}
            onClick={toggleDrawer}
          >
            <Icon name={"menu-line"} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {MenuItems.map((item: NavItem) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx("flex items-center gap-2 p-2 rounded ", {
                "bg-primary text-white hover:bg-primary-darker hover:text-white":
                  pathname === item.path,
                "text-primary hover:bg-primary-lighter hover:text-primary-darker":
                  pathname !== item.path,
              })}
            >
              <Icon name={item.icon} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed lg:hidden inset-0 bg-black/50 z-30"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Sidebar;