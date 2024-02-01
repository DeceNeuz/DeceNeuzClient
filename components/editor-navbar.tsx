"use client";

import React from "react";
import Logo from "./logo";
import { Input } from "./input";
import { Button } from "./ui/button";
import { PenLine, Rocket, Save } from "lucide-react";
import Link from "next/link";

export default function EditorNavbar() {
  return (
    <div className="flex h-20 w-full items-center justify-center">
      <div className="flex w-full max-w-[1440px] items-center justify-between px-8">
        <div className="flex gap-8">
          <Logo />
        </div>
        <div className="flex gap-4">
          <Button
            variant={"outline"}
            className="flex gap-2 rounded text-sm text-slate-500 hover:border-orange-500 hover:bg-white hover:text-orange-500"
          >
            <Save size={18} />
            Save Draft
          </Button>
          <Button className="flex gap-2 rounded bg-orange-500 text-sm text-white hover:border-orange-600 hover:bg-orange-600">
            <Rocket size={18} />
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
