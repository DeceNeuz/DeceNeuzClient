"use client";

import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";
import { AtSign, KeyRound, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import googleLogo from "@/public/devicon_google.png";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16">
      {/* Headline */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-oswald text-3xl font-semibold">JOIN US TODAY</h1>
        <p className="text-center font-normal text-slate-500">
          Redefining Journalism for Tomorrow.
        </p>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          name="username"
          icon={<AtSign size={18} />}
        />
        <Input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          icon={<Mail size={18} />}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          icon={<KeyRound size={18} />}
        />
        <Button
          className="mt-6 w-full max-w-80 rounded bg-orange-500 px-8 py-2 text-sm hover:bg-orange-600"
          type="submit"
        >
          Sign Up
        </Button>
        <Button
          variant={"outline"}
          className="w-full max-w-80 rounded bg-transparent px-8 py-2 text-sm text-slate-500"
          type="submit"
        >
          <Image src={googleLogo} alt="Google Logo" className="mr-3" />
          Continue with Google
        </Button>
        <div className="mt-4 text-sm text-slate-500 ">
          Have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-orange-500 hover:text-orange-600"
          >
            Sign in here
          </Link>
        </div>
      </form>
    </div>
  );
}
