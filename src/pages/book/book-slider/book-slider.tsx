import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/thumbs';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import classes from './book-slider.module.scss';
import { Pagination, Scrollbar, Thumbs } from 'swiper';
import useSwiperRef from './useSwiperRef';
import classNames from 'classnames';
import { Image, ImageType } from '../../../components/ui/image/image';
import {IBookDetail} from "../../../models/IBookDetail";

export interface BookSliderProps {
  bookItem: IBookDetail;
}

export const BookSlider: FC<BookSliderProps> = ({ bookItem }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const [paginationEl, paginationRef] = useSwiperRef();

  return (
    <>
      <Swiper
          data-test-id='slide-big'
        modules={[Pagination, Thumbs]}
        className={classes.swiper}
        pagination={{
          clickable: true,
          el: paginationEl,
          bulletClass: classNames('swiper-pagination-bullet'),
          bulletActiveClass: classNames(classes['bulletActive']),
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          slideThumbActiveClass: classNames(classes.thumbActive),
        }}
      >
        {bookItem.images.map((i, index) => (
          <SwiperSlide key={index + 1}>
            <Image type={ImageType.preview} url={i.url} />
          </SwiperSlide>
        ))}
        <div ref={paginationRef} className={classes.paginationContainer}></div>
      </Swiper>
      <div className={classNames(classes.swiperThumb)}>
        <Swiper
          className={classes.swiperThumbWrapper}
          modules={[Scrollbar, Thumbs]}
          spaceBetween={30}
          slidesPerView={5}
          onSwiper={setThumbsSwiper}
          scrollbar={{
              draggable: true,
              snapOnRelease: true,
          }}
        >
          {bookItem.images.map((i, index) => (
            <SwiperSlide className={classNames(classes.thumb)} key={index + 1} data-test-id='slide-mini'>
              <Image type={ImageType.previewMini} url={i.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
