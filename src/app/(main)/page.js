import AmazingOffersSlider from "@/components/AmazingOffersSlider";
import BannerSlider from "@/components/BannerSlider";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const categories = [
        {
            id: 1,
            title: "کتاب، لوازم تحریر و هنر",
            image: "/images/categories/book.jpg",
        },
        {
            id: 2,
            title: "آرایشی بهداشتی",
            image: "/images/categories/Cosmetics.jpg",
        },
        {
            id: 3,
            title: "کالای دیجیتال",
            image: "/images/categories/Digital-goods.jpg",
        },
        {
            id: 4,
            title: "لوازم خانگی برقی",
            image: "/images/categories/Electric-household-appliances.jpg",
        },
        {
            id: 5,
            title: "مد و پوشاک",
            image: "/images/categories/Fashion-and-clothing.jpg",
        },
        {
            id: 6,
            title: "طلا و نقره",
            image: "/images/categories/gold-and-silver.jpg",
        },
        {
            id: 7,
            title: "تجهیزات پزشکی و سلامت",
            image: "/images/categories/Medical-and-health-equipment.jpg",
        },
        {
            id: 8,
            title: "موبایل",
            image: "/images/categories/mobile.jpg",
        },
        {
            id: 9,
            title: "محصولات بومی و محلی",
            image: "/images/categories/Native-and-local-products.jpg",
        },
        {
            id: 10,
            title: "سوپر مارکت آنلاین",
            image: "/images/categories/supermarket.jpg",
        },
        {
            id: 11,
            title: "ابزار آلات و تجهیزات",
            image: "/images/categories/Tools-and-equipment.jpg",
        },
        {
            id: 12,
            title: "کالای کارکرده",
            image: "/images/categories/Used-goods.jpg",
        },
    ];

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
                <div className="relative h-20 md:h-[106px] flex items-center justify-center my-10">
                    <Image
                        src="/header-shape.png"
                        alt="shape"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Buy by Categories */}
                <section className="text-center">
                    <h3 className="font-IranSansMedium text-xl mb-8">
                        خرید براساس دسته بندی
                    </h3>
                    <div className="grid grid-rows-2 grid-flow-col py-10 gap-8 md:gap-10 overflow-y-hidden overflow-x-auto">
                        {/* Category Item */}
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href="#"
                                className="flex items-center flex-col gap-2"
                            >
                                <span className="w-16 md:w-24 h-16 md:h-24 rounded-full flex relative">
                                    <Image
                                        className="object-cover w-full h-full"
                                        fill
                                        alt={category.title}
                                        objectFit="cover"
                                        src={category.image}
                                    />
                                </span>
                                <span className="font-IranSansMedium text-xs text-nowrap">
                                    {category.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
                {/* Amazing Offers */}
                <section className="mt-10">
                    <AmazingOffersSlider/>
                </section>
            </Container>
        </>
    );
}
