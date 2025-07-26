"use client";
import Icon from "@/components/core/icon/icon";
import { useLogout } from "@/hooks/useLogOut";
import clsx from "clsx";
import Link from "next/link";

const NavBar = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
const {logout}=useLogout();
  return (
    <div className="sticky top-0 w-full z-[80] pt-4 px-4 backdrop-blur-xl">
        <div className=" flex items-center justify-between bg-primary-lightest rounded-2xl  p-4 ">
      <div className="flex gap-4">
        <button
          className={clsx(
            "bg-primary text-white rounded-md lg:hidden p-1 flex items-center justify-center cursor-pointer hover:bg-primary-darker"
          )}
          onClick={toggleDrawer}
        >
          <Icon name={"menu-line"} />
        </button>
        <Link href="/" className="lg:hidden text-2xl font-bold text-primary cursor-pointer" >Dashboard</Link>
      </div>
      <button onClick={logout} className="cursor-pointer">
        <Icon name={"logout"} />
      </button>
    </div>
    </div>
    
  );
};

export default NavBar;
