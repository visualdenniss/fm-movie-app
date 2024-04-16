import { NextResponse } from 'next/server'
import { auth } from './lib/auth';

// const isLoggedIn = true; 

export async function middleware(request) {
    const session = await auth(); 
    if(session) {
        return NextResponse.redirect(new URL("/user/bookmarks", request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/bookmarked"]
}