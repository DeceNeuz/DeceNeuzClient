import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";

const authOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await axios.post(
          "https://dece-neuz-server.onrender.com/login",
          {
            Email: credentials?.email,
            Password: credentials?.password,
          }
        );

        const user = response.data.user;

        if (response.status === 200) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
} satisfies NextAuthOptions;

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
