"use client";
import { deleteCookie } from "@/utils/cookies";
import { usePathname, useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const pathName=usePathname();

  const logout = async () => {
    try {
      await deleteCookie("token");
      router.push("/login?callbackUrl="+pathName);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { logout };
}
