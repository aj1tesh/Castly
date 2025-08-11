import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers
        });

        if (!session) {
            return NextResponse.redirect(new URL('/sign-in', request.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware authentication error:", error);
        
        // If there's an authentication error, redirect to sign-in
        // This prevents the app from crashing due to auth issues
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"]
}