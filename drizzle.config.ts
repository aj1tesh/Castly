import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: "./.env" });

export default defineConfig({
    schema: "./drizzle/schema.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.XATA_DATABASE_URL || "https://Ajitesh-Singh-s-workspace-vhrieu.ap-southeast-2.xata.sh/db/Castly",
    },
});