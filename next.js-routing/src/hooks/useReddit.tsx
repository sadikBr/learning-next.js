import axios, { AxiosResponse } from 'axios';

import { RedditResponse } from '../interfaces/RedditResponse';
import { useState, useEffect } from 'react';

export type Image = {
  id: string;
  url: string;
  title: string;
  author: string;
};

export default function useReddit(searchTerm: string) {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const REQUEST_URL = `https://www.reddit.com/r/${searchTerm}/.json?limit=200`;

    axios
      .get(REQUEST_URL)
      .then((response: AxiosResponse<RedditResponse>) => {
        const children = response.data.data.children;

        setImages(() => {
          const data = children.map((item) => {
            const url = item.data.url;

            if (
              url.endsWith('.jpg') ||
              url.endsWith('.jpeg') ||
              url.endsWith('.png') ||
              url.endsWith('.gif')
            ) {
              return {
                id: item.data.id,
                url,
                title: item.data.title,
                author: item.data.author,
              };
            }
          });

          const filtered_data = data.filter((item) => item != undefined);

          return filtered_data;
        });
      })
      .catch((error) => console.error(error.message));
  }, [searchTerm]);

  return {
    images,
  };
}
