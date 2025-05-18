import Link from "next/link";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import FlashIcon from "./icons/FlashIcon";
import MedalStarIcon from "./icons/MedalStarIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";
import BasketIcon from "./icons/BasketIcon";
import CopyIcon from "./icons/CopyIcon";
import ColorFIlterIcon from "./icons/ColorFIlterIcon";
import CloseIcon from "./icons/CloseIcon";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import EyeIcon from "./icons/EyeIcon";
import UserSquareIcon from "./icons/UserSquareIcon";
import NoteIcon from "./icons/NoteIcon";
import HeartIcon from "./icons/HeartIcon";
import LocationIcon from "./icons/LocationIcon";
import MessageIcon from "./icons/MessageIcon";
import LogoutIcon from "./icons/LogoutIcon";
import {
    userProfileLinks,
    links,
    specialLinks,
    submenuListItems,
} from "@/utils/data";
import ChevronDownIcon from "./icons/ChevronDownIcon";

const getSpecialLinksIcon = (link) => {
    if (link.includes("جدیدترین")) return StarIcon;
    if (link.includes("تخفیفات")) return FlashIcon;
    if (link.includes("پرفروش ترین")) return MedalStarIcon;
};

const getUserProfileLinksIcon = (link) => {
    if (link.includes("حساب کاربری")) return UserSquareIcon;
    if (link.includes("تاریخچه سفارشات")) return NoteIcon;
    if (link.includes("علاقه مندی ها")) return HeartIcon;
    if (link.includes("آدرس ها")) return LocationIcon;
    if (link.includes("دیدگاه‌ها و نظرات")) return MessageIcon;
    if (link.includes("خروج")) return LogoutIcon;
};

export default function Header() {
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
                    {/* User Wrapper */}
                    <div className="group relative">
                        {/* User Login / Register Button */}
                        <Link
                            className="flex items-center gap-2 rounded-xl px-4 h-12 bg-white shadow-[0px_0px_20px_2px_#00000014]"
                            href="#"
                        >
                            {/* When User LoggedOut */}
                            <span className="font-IranSansMedium hidden">
                                <span className="tracking-tighter">
                                    ثبت نام
                                </span>{" "}
                                | ورود
                            </span>
                            <UserIcon
                                strokeWidth={"2"}
                                width={24}
                                height={24}
                            />
                            {/* When User LoggedIn */}
                            <ChevronDownIcon
                                color="var(--color-primary)"
                                width={16}
                                height={16}
                            />
                        </Link>
                        {/* User Header Content */}
                        <div className="bg-white rounded-md w-[288px] absolute left-0 top-14 shadow invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 overflow-hidden z-20">
                            {/* User Profile Info */}
                            <div className="flex flex-col items-center justify-center gap-2 font-IranSansMedium text-xs h-[248px] bg-gradient-to-b from-[#FEEEE8] to-white">
                                <div className="relative w-[100px] h-[100px]">
                                    <span className="absolute right-0 bottom-0 z-10 bg-white w-8 h-8 rounded-full flex items-center justify-center">
                                        <PlusIcon width={24} height={24} />
                                    </span>
                                    <Image
                                        alt="user-profile-image"
                                        className="object-cover rounded-full"
                                        fill={true}
                                        src="/images/user-profile.jpg"
                                    />
                                </div>
                                <span>حسین رستمی</span>
                                <span>Rostamidev2002@gmail.com</span>
                            </div>
                            {/* User Profile Menu */}
                            <div className="px-8">
                                <ul className="flex flex-col divide-y divide-[#EDEDED]">
                                    {userProfileLinks.map((link) => {
                                        const Icon = getUserProfileLinksIcon(
                                            link.title
                                        );
                                        return (
                                            <li className="py-6" key={link.id}>
                                                <Link
                                                    className="flex items-center gap-2 primary-link"
                                                    href={link.href}
                                                >
                                                    <span>
                                                        <Icon
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <span>{link.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Cart Wrapper */}
                    <div className="relative group">
                        {/* Cart Btn */}
                        <button className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center relative cursor-pointer">
                            <span className="text-xs font-IranSansMedium absolute -left-1 -top-1 text-white bg-black rounded-full h-4 px-1 flex items-center justify-center">
                                3
                            </span>
                            <BasketIcon width={24} height={24} />
                        </button>
                        {/* Cart Content */}
                        <div className="bg-white rounded-md w-[345px] absolute left-0 top-14 shadow opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 delay-100 z-20">
                            {/* Cart Items */}
                            <div className="flex flex-col gap-4 px-4 pt-4 divide-y divide-zinc-600 max-h-[337px] overflow-auto">
                                {/* Cart Item */}

                                <div className="pb-4">
                                    {/* Cart Item Top */}
                                    <div className="flex justify-between gap-5">
                                        {/* Cart Item Image */}
                                        <div className="rounded overflow-hidden relative w-20 h-20">
                                            <span className="absolute right-0 top-0 bg-primary rounded-tr-xl rounded-bl-xl text-white z-10 text-xxs font-IranSansMedium w-10 h-5 flex items-center justify-center">
                                                50%
                                            </span>
                                            <Image
                                                src="/images/products/shoes-2.png"
                                                alt="Shoes"
                                                fill={true}
                                            />
                                        </div>
                                        {/* Cart Item Desc */}
                                        <div className="flex flex-col items-end justify-between grow">
                                            {/* Cart Item Desc Top */}
                                            <div className="flex flex-col gap-2 items-start w-full">
                                                <div className="flex justify-between w-full">
                                                    {/* Item Desc */}
                                                    <h6 className="line-clamp-1 font-IranSansMedium text-sm">
                                                        <Link
                                                            href="#"
                                                            className="primary-link"
                                                        >
                                                            کفش نایک مدل 2024
                                                            Small
                                                        </Link>
                                                    </h6>
                                                    {/* Remove Cart Item Btn */}
                                                    <span>
                                                        <CloseIcon
                                                            width={20}
                                                            height={20}
                                                        />
                                                    </span>
                                                </div>
                                                <span className="text-xs">
                                                    کفش بسکتبال
                                                </span>
                                            </div>
                                            {/* Cart Item Desc Bottom */}
                                            <div className="text-sm font-IranSansMedium flex gap-1">
                                                <span>650,000</span>تومان
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cart Item Bottom Side */}
                                    <div className="flex items-end justify-between mt-4">
                                        {/* Cart Item Size & Color */}
                                        <div className="flex flex-col gap-2">
                                            {/* Item Size */}
                                            <div className="flex items-center gap-2 text-xs">
                                                <CopyIcon
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>سایز 42</span>
                                            </div>
                                            {/* Item Color */}
                                            <div className="flex items-center gap-2 text-xs">
                                                <ColorFIlterIcon
                                                    width={16}
                                                    height={16}
                                                />
                                                <div className="flex">
                                                    <span className="w-4 h-4 rounded-full bg-black"></span>
                                                </div>
                                                <span>مشکی</span>
                                            </div>
                                        </div>
                                        {/* Cart Item Qty Button */}
                                        <div className="inline-flex items-center gap-2 rounded-md border h-10 px-4 font-IranSansMedium">
                                            <span>
                                                <PlusIcon
                                                    height={16}
                                                    width={16}
                                                />
                                            </span>
                                            <span>2</span>
                                            <span>
                                                <MinusIcon
                                                    height={16}
                                                    width={16}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Cart Item */}

                                <div className="pb-4">
                                    {/* Cart Item Top */}
                                    <div className="flex justify-between gap-5">
                                        {/* Cart Item Image */}
                                        <div className="rounded overflow-hidden relative w-20 h-20">
                                            <span className="absolute right-0 top-0 bg-primary rounded-tr-xl rounded-bl-xl text-white z-10 text-xxs font-IranSansMedium w-10 h-5 flex items-center justify-center">
                                                50%
                                            </span>
                                            <Image
                                                src="/images/products/shoes-2.png"
                                                alt="Shoes"
                                                fill={true}
                                            />
                                        </div>
                                        {/* Cart Item Desc */}
                                        <div className="flex flex-col items-end justify-between grow">
                                            {/* Cart Item Desc Top */}
                                            <div className="flex flex-col gap-2 items-start w-full">
                                                <div className="flex justify-between w-full">
                                                    {/* Item Desc */}
                                                    <h6 className="line-clamp-1 font-IranSansMedium text-sm">
                                                        <Link
                                                            href="#"
                                                            className="primary-link"
                                                        >
                                                            کفش نایک مدل 2024
                                                            Small
                                                        </Link>
                                                    </h6>
                                                    {/* Remove Cart Item Btn */}
                                                    <span>
                                                        <CloseIcon
                                                            width={20}
                                                            height={20}
                                                        />
                                                    </span>
                                                </div>
                                                <span className="text-xs">
                                                    کفش بسکتبال
                                                </span>
                                            </div>
                                            {/* Cart Item Desc Bottom */}
                                            <div className="text-sm font-IranSansMedium flex gap-1">
                                                <span>650,000</span>تومان
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cart Item Bottom Side */}
                                    <div className="flex items-end justify-between mt-4">
                                        {/* Cart Item Size & Color */}
                                        <div className="flex flex-col gap-2">
                                            {/* Item Size */}
                                            <div className="flex items-center gap-2 text-xs">
                                                <CopyIcon
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>سایز 42</span>
                                            </div>
                                            {/* Item Color */}
                                            <div className="flex items-center gap-2 text-xs">
                                                <ColorFIlterIcon
                                                    width={16}
                                                    height={16}
                                                />
                                                <div className="flex">
                                                    <span className="w-4 h-4 rounded-full bg-black"></span>
                                                </div>
                                                <span>مشکی</span>
                                            </div>
                                        </div>
                                        {/* Cart Item Qty Button */}
                                        <div className="inline-flex items-center gap-2 rounded-md border h-10 px-4 font-IranSansMedium">
                                            <span>
                                                <PlusIcon
                                                    height={16}
                                                    width={16}
                                                />
                                            </span>
                                            <span>2</span>
                                            <span>
                                                <MinusIcon
                                                    height={16}
                                                    width={16}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Cart Item */}

                                <div className="pb-4">
                                    {/* Cart Item Top */}
                                    <div className="flex justify-between gap-5">
                                        {/* Cart Item Image */}
                                        <div className="rounded overflow-hidden relative w-20 h-20">
                                            <span className="absolute right-0 top-0 bg-primary rounded-tr-xl rounded-bl-xl text-white z-10 text-xxs font-IranSansMedium w-10 h-5 flex items-center justify-center">
                                                50%
                                            </span>
                                            <Image
                                                src="/images/products/shoes-2.png"
                                                alt="Shoes"
                                                fill={true}
                                            />
                                        </div>
                                        {/* Cart Item Desc */}
                                        <div className="flex flex-col items-end justify-between grow">
                                            {/* Cart Item Desc Top */}
                                            <div className="flex flex-col gap-2 items-start w-full">
                                                <div className="flex justify-between w-full">
                                                    {/* Item Desc */}
                                                    <h6 className="line-clamp-1 font-IranSansMedium text-sm">
                                                        <Link
                                                            href="#"
                                                            className="primary-link"
                                                        >
                                                            کفش نایک مدل 2024
                                                            Small
                                                        </Link>
                                                    </h6>
                                                    {/* Remove Cart Item Btn */}
                                                    <span>
                                                        <CloseIcon
                                                            width={20}
                                                            height={20}
                                                        />
                                                    </span>
                                                </div>
                                                <span className="text-xs">
                                                    کفش بسکتبال
                                                </span>
                                            </div>
                                            {/* Cart Item Desc Bottom */}
                                            <div className="text-sm font-IranSansMedium flex gap-1">
                                                <span>650,000</span>تومان
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cart Item Bottom Side */}
                                    <div className="flex items-end justify-between mt-4">
                                        {/* Cart Item Size & Color */}
                                        <div className="flex flex-col gap-2">
                                            {/* Item Size */}
                                            <div className="flex items-center gap-2 text-xs">
                                                <CopyIcon
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>سایز 42</span>
                                            </div>
                                            {/* Item Color */}
                                            <div className="flex items-center gap-2 text-xs">
                                                <ColorFIlterIcon
                                                    width={16}
                                                    height={16}
                                                />
                                                <div className="flex">
                                                    <span className="w-4 h-4 rounded-full bg-black"></span>
                                                </div>
                                                <span>مشکی</span>
                                            </div>
                                        </div>
                                        {/* Cart Item Qty Button */}
                                        <div className="inline-flex items-center gap-2 rounded-md border h-10 px-4 font-IranSansMedium">
                                            <span>
                                                <PlusIcon
                                                    height={16}
                                                    width={16}
                                                />
                                            </span>
                                            <span>2</span>
                                            <span>
                                                <MinusIcon
                                                    height={16}
                                                    width={16}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Open Cart Button */}
                            <Link
                                href="#"
                                className="bg-primary transition-all duration-200 hover:opacity-80 rounded-b-md text-white font-IranSansMedium flex justify-center items-center gap-2 h-12 w-full"
                            >
                                <span>مشاهده سبد خرید</span>
                                <EyeIcon width={24} height={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="py-5 bg-gray rounded-full px-10 mt-10 font-IranSansMedium flex items-center justify-between relative">
                {/* Menu */}
                <ul className="flex items-center gap-4">
                    {links.map((link) => (
                        <li className="group/store" key={link.id}>
                            <Link className="primary-link" href={link.href}>
                                {link.title}
                            </Link>
                            {link.submenu && (
                                <div className="absolute right-0 left-0 top-18 bg-white shadow-[0px_0px_50px_10px_#00000014] rounded-xl transition-all duration-300 delay-100 invisible opacity-0 group-hover/store:visible group-hover/store:opacity-100">
                                    {/* Submenu List Items */}
                                    <div className="py-6 border-l border-[#EDEDED] w-fit">
                                        <ul className="flex flex-col">
                                            {submenuListItems.map(
                                                (listItem) => (
                                                    <li
                                                        className="group primary-link hover:bg-gray-100 "
                                                        key={listItem.id}
                                                    >
                                                        <Link
                                                            className="flex px-10 py-4"
                                                            href={listItem.href}
                                                        >
                                                            {listItem.title}
                                                        </Link>
                                                        <div className="flex flex-col items-start gap-8 p-10 flex-wrap absolute right-[220px] left-0 w-fit transition-all duration-300 top-0 bottom-0 z-20 invisible opacity-0 text-black group-hover:opacity-100 group-hover:visible">
                                                            {listItem.items.map(
                                                                (item) => (
                                                                    <div
                                                                        className="flex flex-col gap-4"
                                                                        key={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        <h6 className="text-primary text-xs">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </h6>
                                                                        <ul className="flex flex-col gap-2 text-sm">
                                                                            {item.links.map(
                                                                                (
                                                                                    link
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            link.id
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            className="primary-link"
                                                                                            href={
                                                                                                link.href
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                link.title
                                                                                            }
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                {/* Special Links */}
                <div className="flex items-center gap-8">
                    {specialLinks.map((link) => {
                        const Icon = getSpecialLinksIcon(link.title);
                        return (
                            <Link
                                className="flex items-center gap-2 link"
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
