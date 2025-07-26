import { NextRequest, NextResponse } from 'next/server';

const LOGIN_PAGE_URL = '/login';
const HOME_PAGE_URL = '/dashboard';

export async function middleware(request: NextRequest) {
    const token = request.cookies.has('token');
    const { pathname } = request.nextUrl;

    if (pathname === LOGIN_PAGE_URL && token) {
        const url = new URL(HOME_PAGE_URL, request.url);
        return NextResponse.redirect(url);
    }

    if (!token && pathname !== LOGIN_PAGE_URL) {
        const url = new URL(LOGIN_PAGE_URL, request.url);
        url.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(url);
    }

    if ( pathname == "/") {
        const url = new URL(HOME_PAGE_URL, request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - all items inside the public folder
         *    - images (public images)
         *    - next.svg (Next.js logo)
         *    - vercel.svg (Vercel logo)
         */
        '/((?!api|_next|_next/static|_next/image|media|favicon.ico|hook-examples|menu-examples|images|next.svg|vercel.svg).*)'
    ],
};