import Navbar from "@/components/Navbar"
import { ReactNode } from "react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Layout({ children }: { children: ReactNode }) {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    
    return (
        <div>
            <Navbar user={session?.user} />
            {children}
        </div>
    );
}