"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const AuthSessionProvider = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};
