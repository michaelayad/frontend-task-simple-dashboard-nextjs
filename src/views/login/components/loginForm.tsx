"use client";
import TextField from "@/components/core/inputs/textField";
import { setCookie } from "@/utils/cookies";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "michaelayad", password: "pass1234" });
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    const mockToken = btoa(JSON.stringify(formData)); 
    setCookie("token", mockToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
      secure: process.env.NODE_ENV === "production",
    });

    setError(null);
    router.push(callbackUrl);
  };

  return (
    <div className="  overflow-y-scroll">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">Login</h1>
          <p className="text-gray-600">
            Please enter your credentials to log in.
          </p>
        </div>
        <form
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <div>
            <TextField
              label="Username"
              placeholder="Enter your username"
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
              aria-label="Username input"
            />
          </div>
          <div>
            <TextField
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              aria-label="Password input"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-lg px-5 py-2.5 text-center transition-colors duration-200 disabled:opacity-50"
            disabled={!formData.username || !formData.password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
