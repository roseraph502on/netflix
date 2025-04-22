import React from 'react'
import './Slider.css'

import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Alert from '@mui/material/Alert';
import MovieCard from '../MovieCard/MovieCard'

const Slider = ({title,movies}) => {
  return (
    <div>
         <h2>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }}
            >
                {movies.map((movie, index) =>
                    <SwiperSlide id='Movies'>
                        <MovieCard movie={movie} index={index} key={index} />
                    </SwiperSlide>
                )}
            </Swiper>
    </div>
  )
}

export default Slider
