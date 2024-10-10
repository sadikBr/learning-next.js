'use client';

import useReddit from '@/hooks/useReddit';
import Image from 'next/image';
import Link from 'next/link';

export default function Images({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) {
  const { images } = useReddit(searchTerm);

  return (
    <div className='w-full h-full grid grid-cols-5 gap-3'>
      {images.length !== 0 ? (
        images.map((image) => (
          <Link key={image.id} href={`/images-feed/${image.id}`}>
            <Image
              loading='lazy'
              unoptimized={image.url.endsWith('.gif')}
              className='w-full h-full overflow-hidden object-cover'
              width={250}
              height={190}
              alt={image.title}
              src={image.url}
            />
          </Link>
        ))
      ) : (
        <div>No images to show</div>
      )}
    </div>
  );
}
