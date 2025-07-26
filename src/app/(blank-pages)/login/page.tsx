import { Suspense } from "react";
import Login from "@/views/login";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading login form...</div>}>
      <Login />
    </Suspense>
  );
}