// Because of the concept of Memoization, only the request in this layout file will be sent to the server.
// the other one in the Products page will be gotten from the cache.
// If the same request is sent from different Components, Next.JS will send only the first request in the component tree to the server.
// This Memoization is part of the React library and is not specific to Next.JS
// It only applies to GET method in fetch requests and it only works within the React component tree (does not work with route handlers)

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productResponse = await fetch('http://localhost:3001/products');
  const products = await productResponse.json();

  console.log({ products });

  return (
    <div>
      <h1 className='text-2xl p-4'>Products Page</h1>
      {children}
    </div>
  );
}
