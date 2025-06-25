"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// استایل‌های مورد نیاز
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import ProductBox from "./ProductBox";

const amazingProducts = [
    {
        id: 1,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/lenovo.png",
        price: 1_500_000,
        offer: 50,
        href: "#",
    },
    {
        id: 2,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        price: 2_400_000,
        offer: 42,
        href: "#",
    },
    {
        id: 3,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        price: 11_200_00,
        offer: 46,
        href: "#",
    },
    {
        id: 4,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/lenovo.png",
        price: 5_400_000,
        offer: 35,
        href: "#",
    },
    {
        id: 5,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        price: 6_700_000,
        offer: 29,
        href: "#",
    },
    {
        id: 6,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        price: 3_250_000,
        offer: 40,
        href: "#",
    },
    {
        id: 7,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/smart-watch-transparent.webp",
        price: 24_750_000,
        offer: 35,
        href: "#",
    },
    {
        id: 8,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/mobile-transparent.webp",
        price: 18_900_000,
        offer: 26,
        href: "#",
    },
];

function AmazingOffersSlider() {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={8}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1080: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                },
            }}
            navigation={true}
            modules={[Navigation]}
            className="amazingProductsSlider !p-5 w-full bg-primary rounded-xl"
        >
            <SwiperSlide className="!h-auto">
                <div className="flex flex-col items-center justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <div className="">
                            <Image
                                className="text-white"
                                width={88}
                                height={88}
                                src="/images/amazing.svg"
                                alt="amazing_shape"
                            />
                        </div>
                        <div className="font-IranSansBold text-xs text-black flex gap-0.5">
                            <span className="bg-white rounded flex items-center justify-center w-6.5 h-6.5">
                                09
                            </span>
                            <span className="flex items-center justify-center h-6.5 text-white text-lg">
                                :
                            </span>
                            <span className="bg-white rounded flex items-center justify-center w-6.5 h-6.5">
                                23
                            </span>
                            <span className="flex items-center justify-center h-6.5 text-white text-lg">
                                :
                            </span>
                            <span className="bg-white rounded flex items-center justify-center w-6.5 h-6.5">
                                12
                            </span>
                        </div>
                        <div className="">
                            <Image
                                className="text-white"
                                width={80}
                                height={80}
                                src="/images/percent-shape.svg"
                                alt="amazing_shape"
                            />
                        </div>
                    </div>
                    <Link
                        className="flex items-center gap-1 font-IranSansMedium text-white text-xs py-3"
                        href="#"
                    >
                        <span>مشاهده همه</span>
                        <BiChevronLeft size={10} />
                    </Link>
                </div>
            </SwiperSlide>
            {amazingProducts.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductBox type='amazing' {...product}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default AmazingOffersSlider;
