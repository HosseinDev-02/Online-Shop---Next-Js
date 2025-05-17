import Link from "next/link";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import FlashIcon from "./icons/FlashIcon";
import MedalStarIcon from "./icons/MedalStarIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";
import BasketIcon from "./icons/BasketIcon";

const getSpecialLinksIcon = (link) => {
    if (link.includes("جدیدترین")) return StarIcon;
    if (link.includes("تخفیفات")) return FlashIcon;
    if (link.includes("پرفروش ترین")) return MedalStarIcon;
};

export default function Header() {
    const specialLinks = [
        {
            id: 1,
            title: "جدیدترین محصولات",
            href: "#",
        },
        {
            id: 2,
            title: "تخفیفات ویژه",
            href: "#",
        },
        {
            id: 3,
            title: "پرفروش ترین ها",
            href: "#",
        },
    ];
    const links = [
        {
            id: 1,
            title: "صفحه اصلی",
            href: "/",
        },
        {
            id: 2,
            title: "فروشگاه",
            href: "/store",
        },
        {
            id: 3,
            title: "مقاله ها",
            href: "/blogs",
        },
        {
            id: 4,
            title: "تماس با ما",
            href: "/contact-us",
        },
    ];
    return (
        <header className="bg-white w-full px-36 pt-5">
            {/* Top */}
            <div className="flex justify-between gap-6 h-full">
                {/* Logo */}
                <div className="flex flex-col gap-1">
                    <h2 className="font-RichardRegular text-3xl text-primary tracking-tight">
                        <Link href="/">Digi Market</Link>
                    </h2>
                    <span className="text-sm text-zinc-500 font-IranSansMedium tracking-tight">
                        فروشگاه دیجی مارکت
                    </span>
                </div>
                {/* Search Box */}
                <div className="max-w-[638px] w-full flex items-center gap-2 h-12 rounded-full bg-gray border border-zinc-300 px-3.5">
                    <SearchIcon width={16} height={16} className="shrink-0" />
                    <input
                        className="h-full w-full outline-none text-xs font-IranSansMedium text-zinc-600 placeholder:text-zinc-400"
                        placeholder="جستجو"
                    />
                </div>
                <div className="flex items-center gap-4">
                    {/* User Login / Register Button */}
                    <Link
                        className="flex items-center gap-2 rounded-xl px-4 h-12 bg-white shadow-[0px_0px_20px_2px_#00000014]"
                        href="#"
                    >
                        <span className="font-IranSansMedium">
                            <span className="tracking-tighter">ثبت نام</span> |
                            ورود
                        </span>
                        <UserIcon strokeWidth={"2"} width={24} height={24} />
                    </Link>
                    {/* Cart Btn */}
                    <button className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center relative">
                        <span className="text-xs font-IranSansMedium absolute -left-1 -top-1 text-white bg-black rounded-full w-4 h-4 flex items-center justify-center">
                            0
                        </span>
                        <BasketIcon width={24} height={24} />
                    </button>
                </div>
            </div>
            {/* Bottom */}
            <div className="py-5 bg-gray rounded-full px-10 mt-10 font-IranSansMedium flex items-center justify-between">
                {/* Menu */}
                <ul className="flex items-center gap-4">
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                {/* Special Links */}
                <div className="flex items-center gap-8">
                    {specialLinks.map((link) => {
                        const Icon = getSpecialLinksIcon(link.title);
                        return (
                            <Link
                                className="flex items-center gap-2"
                                key={link.id}
                                href={link.href}
                            >
                                <Icon
                                    strokeWidth="2"
                                    width={16}
                                    height={16}
                                    color={"var(--color-primary)"}
                                />
                                <span>{link.title}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
