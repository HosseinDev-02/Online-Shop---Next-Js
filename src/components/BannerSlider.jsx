"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// استایل‌های مورد نیاز
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
function BannerSlider() {

    const banners = [
        '/images/banners/banner-1.jpg',
        '/images/banners/banner-2.jpg',
        '/images/banners/banner-3.jpg',
    ]

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[400px] lg:h-[500px] xl:h-[600px] w-full"
        >
            {
                banners.map(banner => (
                    <SwiperSlide key={banner}>
                        <Image className="object-cover md:rounded" fill src={banner} alt={banner}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default BannerSlider;
