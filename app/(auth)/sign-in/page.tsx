"use client";

import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";
import { KeyRound, Mail } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import googleLogo from "@/public/devicon_google.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data: ", formData);
    await signIn("credentials", {
      ...formData,
      redirect: false,
    });
    router.push("/editor");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-16">
      {/* Headline */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-oswald text-3xl font-semibold">WELCOME BACK</h1>
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
          Sign In
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
          New here?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-orange-500 hover:text-orange-600"
          >
            Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
}
