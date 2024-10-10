export default async function Product() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h2>Product</h2>;
}
