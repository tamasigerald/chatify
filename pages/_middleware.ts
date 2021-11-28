import type { NextFetchEvent, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    console.log(req);
}
