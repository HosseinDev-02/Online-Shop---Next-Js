"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

// استایل‌های مورد نیاز
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/grid';
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

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
        image: "/images/products/lenovo.png",
        href: "#",
    },
    {
        id: 6,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/t-shirt-transparent-2.png",
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
        image: "/images/products/lenovo.png",
        href: "#",
    },
    {
        id: 9,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/t-shirt-transparent-2.png",
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
        image: "/images/products/lenovo.png",
        href: "#",
    },
    {
        id: 12,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/t-shirt-transparent-2.png",
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
        image: "/images/products/lenovo.png",
        href: "#",
    },
    {
        id: 15,
        title: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
        image: "/images/products/t-shirt-transparent-2.png",
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
                    <Link
                        className="flex items-center gap-2 py-4 relative before:absolute before:left-0 before:right-0 before:w-3/4 before:h-px before:bg-gradient-to-r before:from-neutral-50 before:via-neutral-100 before:to-neutral-50 before:top-full before:mx-auto before:rounded before:content-['']"
                        href={product.href}
                    >
                        <div className="relative shrink-0 w-28 h-20">
                            <Image
                                src={product.image}
                                fill
                                alt={product.title}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-IranSansBold text-xl">
                                {index + 1}
                            </span>
                            <h6 className="line-clamp-2 text-sm max-w-[250px] w-full">
                                {product.title}
                            </h6>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PopularProductsSlider;
