# Next.JS learning process and steps.

## Next.JS App Router

## Next.JS Route Handlers

## Next.JS Rendering

- ### CSR - Client Side Rendering
- ### SSR - Server Side Rendering
- ### Suspense for SSR
- ### Server and Client Components
- ### Static and Dynamic Rendering
- ### Streaming
- ### Server and Client Composition Patterns

  - Server Components

    - Fetching Data.
    - Directly accessing backend resources.
    - Protecting sensitive information (like access tokens and API keys) on the server.
    - Keeping large dependencies server-side, which helps in reducing client-side JavaScript.

    - Server Component Patterns:

      - To make a function or set of functions (some code!) available only on the server and not allowed in the client, and throw an error is case it is used in the client we use the the "server-only" package (see [utils](./next.js-rendering/src/utils/server-utils.ts) folder for an example)
      - To use a third party package library that requires client features inside the server only code, we can encapsulate it within a client component then use it (see the [ImageSlider](./next.js-rendering/src/compenents/imageSlider.tsx) example then the slider is used within [server-route](./next.js-rendering/src/app/server-route/page.tsx) which is a Server Component)
      - To use context providers within your Next.JS app you must create the context provider in a separate Client Component then wrap the application with it, keep in mind that the Server Components within the provider will remain Server Components and won't be affected. (see the [ThemeProvider](./next.js-rendering/src/compenents/themeProvider.tsx) example and its implementation in the [client-route](./next.js-rendering/src/app/client-route/page.tsx) folder and this theme provided is used for the whole application see [RootLayout](./next.js-rendering/src/app/layout.tsx))

  - Client Components

    - Adding interactivity.
    - Handling event listeners (such as onClick(), onChange(), etc).
    - Managing state and lifecycle effects (using hooks like useState(), useEffect(), useReducer()).
    - Using Browser exclusive APIs.
    - Using custom hooks.
    - Using React class components.

    - Client Components Patterns:

      - To make a function or set of functions (some code!) available only on the client and not allowed in the server, and throw an error is case it is used in the server we use the the "client-only" package (see [utils](./next.js-rendering/src/utils/client-utils.ts) folder for an example)
      - It is recommended to make the Client Components as low as possible in the Components Tree (if possible to make them a leaf Components and no Component below them, it will be the best case). when making a component a Client Component using 'use client' directive every child component of the parent will be transferred into Client Components

  - Patterns that can be used between Client and Server components (Server and Client components interactions).

    - We can use a Server component inside a Server Component.
    - We can use a Client component inside a Server Component.
    - We can use a Client component inside a Client Component.
    - We can not use a Server component inside a Client Component directly, but we can use a workaround in case we need to invoke a Server component inside a Client component. The workaround is to use the Server component as a Child of the Client component (see the example in the [Interleaving](./next.js-rendering/src/app/interleaving/page.tsx) route)

## Next.JS Data Fetching
