import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(request.cookies.get('theme'));

  return new Response('<h1>Profile API Route Handler</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark',
    },
  });
}
