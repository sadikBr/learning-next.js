import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({
  params: { productId },
}: Props): Metadata => {
  return {
    title: `Product ${productId}`,
  };
};

export default function Product({ params: { productId } }: Props) {
  return <h1>This is the product {productId} details page.</h1>;
}
