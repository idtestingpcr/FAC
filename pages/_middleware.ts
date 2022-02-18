import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {

    const { pathname } = req.nextUrl
    const n = pathname.includes("wp-content/uploads");
    console.log(pathname)
    if (n) {
        const baseweburl = 'https://memed.co.uk'
        return NextResponse.redirect(baseweburl + pathname);
    }

}