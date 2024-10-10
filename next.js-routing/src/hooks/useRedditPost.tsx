import { RedditResponse } from '@/interfaces/RedditResponse';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Image } from './useReddit';

export default function useRedditPost(searchTerm: string, postId: string) {
  const [post, setPost] = useState<Image>({
    id: '',
    title: '',
    author: '',
    url: '',
  });

  useEffect(() => {
    const REQUEST_URL = `https://www.reddit.com/r/${searchTerm}/comments/${postId}.json`;

    axios.get(REQUEST_URL).then((response: AxiosResponse<RedditResponse[]>) => {
      const postRes = response.data[0].data.children[0].data;

      setPost(() => ({
        id: postRes.id,
        title: postRes.title,
        author: postRes.author,
        url: postRes.url,
      }));
    });
  }, [postId, searchTerm]);

  return {
    post,
  };
}
