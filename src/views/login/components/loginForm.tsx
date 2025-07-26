"use client";
import TextField from "@/components/core/inputs/textField";
import { setCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setCookie("token", JSON.stringify(formData), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
      secure: process.env.NODE_ENV === "production",
    });

    router.push("/");
  };
  return (
    <div className=" overflow-y-scroll">
      <h1 className="text-3xl font-bold text-primary">Login!</h1>
      <p>Please enter your credentials to log in.</p>
      <form className="py-10 w-full px-1 flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextField
            label="Username"
            placeholder="write your username"
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            label="Your Password"
            placeholder="write your password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="text-white mx-auto bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-lg px-16 py-2.5 text-center cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
