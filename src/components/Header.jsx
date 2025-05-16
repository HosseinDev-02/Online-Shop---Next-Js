import Link from "next/link";
import StarIcon from "../../public/images/icons/star.svg";
import FlashIcon from "../../public/images/icons/flash.svg";
import MedalStarIcon from "../../public/images/icons/medal-star.svg";
import Image from "next/image";

export default function Header() {
    const specialLinks = [
        {
            id: 1,
            title: "جدیدترین محصولات",
            icon: StarIcon,
            href: "#",
        },
        {
            id: 2,
            title: "تخفیفات ویژه",
            icon: FlashIcon,
            href: "#",
        },
        {
            id: 3,
            title: "پرفروشترین محصولات",
            icon: MedalStarIcon,
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
            <div className="flex items-center gap-6 h-full">
                {/* Logo */}
                <div className="flex flex-col gap-1">
                    <h2 className="font-RichardRegular text-3xl text-primary tracking-tight">
                        <Link href="/">Digi Market</Link>
                    </h2>
                    <span className="text-sm text-zinc-500 font-IranYekanMedium tracking-tight">
                        فروشگاه دیجی مارکت
                    </span>
                </div>
            </div>
            {/* Bottom */}
            <div className="py-5 bg-gray rounded-full px-10 mt-10 font-IranYekanMedium flex items-center justify-between">
                {/* Menu */}
                <ul className="flex items-center gap-4">
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    {specialLinks.map((link) => (
                        <Link
                            className="flex items-center gap-2"
                            key={link.id}
                            href={link.href}
                        >
                            <Image src={link.icon} width={16} height={16} />
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
