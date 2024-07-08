// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      name: string;
      email?: string | null;
      image?: string | null;
    };
    accessToken?: string;
    error?: unknown;
    token?: { sessionId: string; expires: number };
  }
}
