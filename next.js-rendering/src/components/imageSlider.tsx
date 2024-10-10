/* eslint-disable @next/next/no-img-element */
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className='image-slider-container'>
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
    </div>
  );
}
