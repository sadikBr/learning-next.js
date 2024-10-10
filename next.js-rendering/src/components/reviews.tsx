export default async function Reviews() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h2>Product Reviews</h2>;
}
