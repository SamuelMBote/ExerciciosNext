import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`${request.nextUrl.pathname}`);
  return NextResponse.redirect(new URL('/', request.url));
}
export const config = { matcher: ['/entrar'] };
