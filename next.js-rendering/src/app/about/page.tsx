import { cookies } from 'next/headers';

export default function AboutPage() {
  console.log('This is a server component');

  // On a production server this route will be static. (all routes by default are static, but in development server this is not the case)
  // Next.JS will make it a dynamic route if any of the dynamic functions is detected, such as (cookies(), headers(), searchParams).
  // The below code is an example on how you can make this route a dynamic one.
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);

  return <h1>This is the about page. {new Date().toLocaleTimeString()}</h1>;
}
