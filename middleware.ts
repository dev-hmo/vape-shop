import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Security headers for all responses
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // CSP header for basic protection
  response.headers.set(
    "Content-Security-Policy",
    "frame-ancestors 'none';"
  );

  // Note: Checkout auth protection is handled client-side via ProtectedRoute
  // because the auth state lives in localStorage (not cookies/sessions).
  // For production with server-side auth, you'd check cookies here:
  //
  // if (pathname.startsWith("/checkout")) {
  //   const authToken = request.cookies.get("auth_token");
  //   if (!authToken) {
  //     return NextResponse.redirect(new URL("/auth/login?redirect=checkout", request.url));
  //   }
  // }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
