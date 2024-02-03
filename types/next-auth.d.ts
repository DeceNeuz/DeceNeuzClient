import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      CreatedAt: string;
      Email: string;
      ID: number;
      UserName: string;
    };
  }
}
