import ImageSlider from '@/components/imageSlider';
import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h2>This is a server component</h2>
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
}
