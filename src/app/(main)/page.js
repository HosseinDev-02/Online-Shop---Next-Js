import AmazingOffersSlider from "@/components/AmazingOffersSlider";
import BannerSlider from "@/components/BannerSlider";
import CategoryItem from "@/components/CategoryItem";
import Container from "@/components/Container";
import PopularProductsSlider from "@/components/PopularProductsSlider";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

const categories = [
    {
        id: 1,
        title: "کتاب، لوازم تحریر و هنر",
        image: "/images/categories/book.jpg",
        href: '#'
    },
    {
        id: 2,
        title: "آرایشی بهداشتی",
        image: "/images/categories/Cosmetics.jpg",
        href: '#'
    },
    {
        id: 3,
        title: "کالای دیجیتال",
        image: "/images/categories/Digital-goods.jpg",
        href: '#'
    },
    {
        id: 4,
        title: "لوازم خانگی برقی",
        image: "/images/categories/Electric-household-appliances.jpg",
        href: '#'
    },
    {
        id: 5,
        title: "مد و پوشاک",
        image: "/images/categories/Fashion-and-clothing.jpg",
        href: '#'
    },
    {
        id: 6,
        title: "طلا و نقره",
        image: "/images/categories/gold-and-silver.jpg",
        href: '#'
    },
    {
        id: 7,
        title: "تجهیزات پزشکی و سلامت",
        image: "/images/categories/Medical-and-health-equipment.jpg",
        href: '#'
    },
    {
        id: 8,
        title: "موبایل",
        image: "/images/categories/mobile.jpg",
        href: '#'
    },
    {
        id: 9,
        title: "محصولات بومی و محلی",
        image: "/images/categories/Native-and-local-products.jpg",
        href: '#'
    },
    {
        id: 10,
        title: "سوپر مارکت آنلاین",
        image: "/images/categories/supermarket.jpg",
        href: '#'
    },
    {
        id: 11,
        title: "ابزار آلات و تجهیزات",
        image: "/images/categories/Tools-and-equipment.jpg",
        href: '#'
    },
    {
        id: 12,
        title: "کالای کارکرده",
        image: "/images/categories/Used-goods.jpg",
        href: '#'
    },
];


export default function Home() {
    return (
        <>
            {/* Header Slider */}
            <div className="md:container md:mx-auto px-0 md:px-7">
                <div className="h-full w-full mt-5">
                    <BannerSlider />
                </div>
            </div>
            <Container>
                {/* Shopping By Categories */}
                <section className="relative h-20 md:h-[106px] flex items-center justify-center my-10">
                    <Image
                        src="/header-shape.png"
                        alt="shape"
                        fill
                        className="object-cover"
                    />
                </section>
                {/* Buy by Categories */}
                <section className="text-center">
                    <h3 className="font-IranSansMedium text-xl mb-8">
                        خرید براساس دسته بندی
                    </h3>
                    <div className="grid grid-rows-2 grid-flow-col py-10 gap-8 md:gap-10 overflow-y-hidden overflow-x-auto">
                        {/* Category Item */}
                        {categories.map((category) => (
                            <CategoryItem key={category.id} {...category}/>
                        ))}
                    </div>
                </section>
                {/* Amazing Offers */}
                <section className="mt-10">
                    <AmazingOffersSlider />
                </section>
                {/* Popular Products */}
                <section className="mt-10">
                    <div className="relative mb-8 flex items-center justify-between lg:justify-center">
                        <h3 className="font-IranSansMedium text-xl text-center">
                            پرفروشترین کالاها
                        </h3>
                        <Link
                            href="#"
                            className="primary-link flex items-center gap-1 font-IranSansMedium text-sm lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:my-auto"
                        >
                            <span>
                            مشاهده همه
                            </span>
                            <BiChevronLeft size={16}/>
                        </Link>
                    </div>
                    <PopularProductsSlider/>
                </section>
            </Container>
        </>
    );
}
