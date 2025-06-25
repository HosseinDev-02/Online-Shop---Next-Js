"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

// استایل‌های مورد نیاز
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/grid';
import ProductBox from "./ProductBox";

const popularProducts = [
    {
        id: 1,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent-2.png",
        href: "#",
    },
    {
        id: 2,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/lenovo.png",
        href: "#",
    },
    {
        id: 3,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/t-shirt-transparent-2.png",
        href: "#",
    },
    {
        id: 4,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent-2.png",
        href: "#",
    },
    {
        id: 5,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        href: "#",
    },
    {
        id: 6,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        href: "#",
    },
    {
        id: 7,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent-2.png",
        href: "#",
    },
    {
        id: 8,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        href: "#",
    },
    {
        id: 9,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        href: "#",
    },
    {
        id: 10,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent-2.png",
        href: "#",
    },
    {
        id: 11,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        href: "#",
    },
    {
        id: 12,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        href: "#",
    },
    {
        id: 13,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent-2.png",
        href: "#",
    },
    {
        id: 14,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        href: "#",
    },
    {
        id: 15,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        href: "#",
    },
];

function PopularProductsSlider() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={8}
            pagination={{
                clickable: true,
            }}
            grid={{
                rows: 2,
                fill: 'row'
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2
                    }
                },
                768: {
                    slidesPerView: 2,
                    grid: {
                        rows: 3
                    }
                },
                1024: {
                    slidesPerView: 3,
                    grid: {
                        rows: 3
                    }
                },
                1280: {
                    slidesPerView: 4,
                    grid: {
                        rows: 3
                    }
                },
            }}
            navigation={true}
            modules={[Navigation, Grid]}
            className="popularProductsSlider !py-5 w-full rounded-xl"
        >
            {popularProducts.map((product, index) => (
                <SwiperSlide key={product.id}>
                   <ProductBox type='popular' index={index} {...product}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PopularProductsSlider;
