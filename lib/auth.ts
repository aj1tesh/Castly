import { db } from "@/drizzle/db";
import { schema } from "@/drizzle/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

// Check for required environment variables
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    console.warn("Missing Google OAuth credentials. Authentication may not work properly.");
}

if (!process.env.NEXT_PUBLIC_BASE_URL) {
    console.warn("Missing NEXT_PUBLIC_BASE_URL. Using default localhost:3000");
}

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema,
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        },
    },
    plugins: [nextCookies()],
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
});