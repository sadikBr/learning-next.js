/* eslint-disable @next/next/no-img-element */
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/themeProvider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
  const theme = useTheme();

  const result = clientSideFunction();

  const settings = {
    dots: true,
  };
  return (
    <div className='image-slider-container'>
      <h2
        style={{
          color: theme.colors.primary,
        }}
      >
        Client Image Slider
      </h2>
      <Slider {...settings}>
        <div>
          <img
            src='http://picsum.photos/400/200'
            width={400}
            height={200}
            alt='kitten image'
          />
        </div>
        <div>
          <img
            src='http://picsum.photos/400/200'
            width={400}
            height={200}
            alt='kitten image'
          />
        </div>
        <div>
          <img
            src='http://picsum.photos/400/200'
            width={400}
            height={200}
            alt='kitten image'
          />
        </div>
        <div>
          <img
            src='http://picsum.photos/400/200'
            width={400}
            height={200}
            alt='kitten image'
          />
        </div>
      </Slider>

      {result}
    </div>
  );
}
