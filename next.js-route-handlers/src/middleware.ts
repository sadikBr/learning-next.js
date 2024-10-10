import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Use cookies to handle user preferences.
  const response = NextResponse.next();

  const themePreference = request.cookies.get('theme');
  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  return response;
  // Redirect the user to the home page if he is not logged in.
  // const userLoggedIn = true;

  // if (!userLoggedIn) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
}

// export const config = {
//   matcher: '/comments',
// };
