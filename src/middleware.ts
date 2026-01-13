import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token');
  const isAuthPage = request.nextUrl.pathname === '/entrar';

  // Se não estiver logado e não for a página de login, redireciona para /entrar
  if (!accessToken && !isAuthPage) {
    return NextResponse.redirect(new URL('/entrar', request.url));
  }

  // Se estiver logado e tentar acessar /entrar, redireciona para home
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|public|static).*)'],
};
