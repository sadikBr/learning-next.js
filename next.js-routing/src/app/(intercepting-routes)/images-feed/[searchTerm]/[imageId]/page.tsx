'use client';

import useRedditPost from '@/hooks/useRedditPost';
import Image from 'next/image';

export default function ImagePage({
  params: { imageId, searchTerm },
}: {
  params: { imageId: string; searchTerm: string };
}) {
  const { post } = useRedditPost(searchTerm, imageId);

  return (
    <div className='w-full h-full flex justify-center'>
      {post.id && (
        <div className='w-auto h-fit flex flex-col items-center'>
          <Image
            loading='lazy'
            unoptimized={post.url.endsWith('.gif')}
            className='w-full h-full overflow-hidden object-cover mb-4'
            width={256}
            height={384}
            alt={post.title}
            src={post.url}
          />

          <h2 className='font-bold text-xl mb-2'>{post.title}</h2>
          <p className='text-teal-200 font-extrabold'>{post.author}</p>
        </div>
      )}
    </div>
  );
}
