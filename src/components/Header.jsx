import Link from "next/link";
import Image from "next/image";
import { BiStar, BiMedal, BiUser, BiHeart, BiMap, BiPlus, BiMinus, BiCategoryAlt, BiShow } from "react-icons/bi"
import { PiNotepad, PiXSquare } from "react-icons/pi"
import { AiOutlineLogout } from "react-icons/ai"
import { LuSearch } from "react-icons/lu"
import { RiColorFilterLine, RiHome5Line } from "react-icons/ri"
import { IoFlashOutline, IoNotificationsOutline, IoChevronDownOutline } from "react-icons/io5";
import { TbCopy, TbMessageDots, TbShoppingBag, TbUserSquareRounded } from "react-icons/tb";
import {
    userProfileLinks,
    links,
    specialLinks,
    categoryItems,
} from "@/utils/data";
import { getMenuItemsIcon } from "@/utils/funcs";

const getSpecialLinksIcon = (link) => {
    if (link.includes("جدیدترین")) return BiStar;
    if (link.includes("تخفیفات")) return IoFlashOutline;
    if (link.includes("پرفروش ترین")) return BiMedal;
};

const getUserProfileLinksIcon = (link) => {
    if (link.includes("حساب کاربری")) return TbUserSquareRounded;
    if (link.includes("تاریخچه سفارشات")) return PiNotepad;
    if (link.includes("علاقه مندی ها")) return BiHeart;
    if (link.includes("آدرس ها")) return BiMap;
    if (link.includes("دیدگاه‌ها و نظرات")) return TbMessageDots;
    if (link.includes("خروج")) return AiOutlineLogout;
};



export default function Header() {
    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:block bg-white w-full px-8 lg:px-20 xl:px-36 pt-5">
                {/* Top */}
                <div className="flex justify-between gap-6 h-full">
                    {/* Logo */}
                    <div className="flex flex-col gap-1 shrink-0">
                        <h2 className="font-RichardRegular text-3xl text-primary tracking-tight">
                            <Link href="/">Digi Market</Link>
                        </h2>
                        <span className="text-sm text-zinc-500 font-IranSansMedium tracking-tight">
                            فروشگاه دیجی مارکت
                        </span>
                    </div>
                    {/* Search Box */}
                    <div className="max-w-[638px] w-full flex items-center gap-2 h-12 rounded-full bg-gray border border-zinc-300 px-3.5">
                        <LuSearch
                            size={20}
                            className="shrink-0"
                        />
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
                                <BiUser
                                    size={24}
                                />
                                {/* When User LoggedIn */}
                                <IoChevronDownOutline
                                    color="var(--color-primary)"
                                    size={16}
                                />
                            </Link>
                            {/* User Header Content */}
                            <div className="bg-white rounded-md w-[288px] absolute left-0 top-14 shadow invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 overflow-hidden z-20">
                                {/* User Profile Info */}
                                <div className="flex flex-col items-center justify-center gap-2 font-IranSansMedium text-xs h-[248px] bg-gradient-to-b from-[#FEEEE8] to-white">
                                    <div className="relative w-[100px] h-[100px]">
                                        <span className="absolute right-0 bottom-0 z-10 bg-white w-8 h-8 rounded-full flex items-center justify-center">
                                            <BiPlus size={24} />
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
                                            const Icon =
                                                getUserProfileLinksIcon(
                                                    link.title
                                                );
                                            return (
                                                <li
                                                    className="py-6"
                                                    key={link.id}
                                                >
                                                    <Link
                                                        className="flex items-center gap-2 primary-link"
                                                        href={link.href}
                                                    >
                                                        <span>
                                                            <Icon
                                                                size={24}
                                                            />
                                                        </span>
                                                        <span>
                                                            {link.title}
                                                        </span>
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
                                <TbShoppingBag size={24} />
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
                                                                کفش نایک مدل
                                                                2024 Small
                                                            </Link>
                                                        </h6>
                                                        {/* Remove Cart Item Btn */}
                                                        <span>
                                                            <PiXSquare
                                                                size={20}
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
                                                    <TbCopy
                                                        size={16}
                                                    />
                                                    <span>سایز 42</span>
                                                </div>
                                                {/* Item Color */}
                                                <div className="flex items-center gap-2 text-xs">
                                                    <RiColorFilterLine
                                                        size={16}
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
                                                    <BiPlus
                                                        size={16}
                                                    />
                                                </span>
                                                <span>2</span>
                                                <span>
                                                    <BiMinus
                                                        size={16}
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
                                                                کفش نایک مدل
                                                                2024 Small
                                                            </Link>
                                                        </h6>
                                                        {/* Remove Cart Item Btn */}
                                                        <span>
                                                            <PiXSquare
                                                                size={20}
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
                                                    <TbCopy
                                                        size={16}
                                                    />
                                                    <span>سایز 42</span>
                                                </div>
                                                {/* Item Color */}
                                                <div className="flex items-center gap-2 text-xs">
                                                <RiColorFilterLine
                                                        size={16}
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
                                                    <BiPlus size={16}/>
                                                </span>
                                                <span>2</span>
                                                <span>
                                                    <BiMinus size={16}/>
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
                                                                کفش نایک مدل
                                                                2024 Small
                                                            </Link>
                                                        </h6>
                                                        {/* Remove Cart Item Btn */}
                                                        <span>
                                                            <PiXSquare
                                                                size={20}
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
                                                    <TbCopy
                                                        size={16}
                                                    />
                                                    <span>سایز 42</span>
                                                </div>
                                                {/* Item Color */}
                                                <div className="flex items-center gap-2 text-xs">
                                                <RiColorFilterLine
                                                        size={16}
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
                                                    <BiPlus
                                                        size={16}
                                                    />
                                                </span>
                                                <span>2</span>
                                                <span>
                                                    <BiMinus
                                                        size={16}
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
                                    <BiShow size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className="py-5 bg-gray rounded-full px-5 lg:px-10 mt-10 font-IranSansMedium flex justify-between relative">
                    {/* Menu */}
                    <ul className="flex items-center gap-4 text-sm lg:text-base">
                        {links.map((link) => (
                            <li className={link.title.includes('فروشگاه') && "group/store"} key={link.id}>
                                <Link className="primary-link" href={link.href}>
                                    {link.title}
                                </Link>
                                {link.submenu && (
                                    <div className="absolute right-0 left-0 top-18 bg-white shadow-[0px_0px_50px_10px_#00000014] rounded-xl transition-all duration-300 delay-100 invisible opacity-0 group-hover/store:visible group-hover/store:opacity-100">
                                        {/* Submenu List Items */}
                                        <div className="py-6 border-l border-[#EDEDED] w-fit">
                                            <ul className="flex flex-col">
                                                {categoryItems.map(
                                                    (listItem) => {
                                                        const Icon =
                                                            getMenuItemsIcon(
                                                                listItem.title
                                                            );
                                                        return (
                                                            <li
                                                                className="group primary-link hover:bg-gray-100 "
                                                                key={
                                                                    listItem.id
                                                                }
                                                            >
                                                                <Link
                                                                    className="flex px-10 py-4 gap-2 items-center"
                                                                    href={
                                                                        listItem.href
                                                                    }
                                                                >
                                                                    <Icon
                                                                        size={20}
                                                                    />
                                                                    <span>
                                                                        {
                                                                            listItem.title
                                                                        }
                                                                    </span>
                                                                </Link>
                                                                <div className="flex flex-col items-start gap-y-10 gap-x-20 p-10 flex-wrap absolute right-[220px] left-0 w-fit transition-all duration-300 top-0 bottom-0 z-20 invisible opacity-0 text-black group-hover:opacity-100 group-hover:visible">
                                                                    {listItem.items.map(
                                                                        (
                                                                            item
                                                                        ) => (
                                                                            <div
                                                                                className="flex flex-col gap-5"
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
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    {/* Special Links */}
                    <div className="flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
                        {specialLinks.map((link) => {
                            const Icon = getSpecialLinksIcon(link.title);
                            return (
                                <Link
                                    className="flex items-center gap-2 link"
                                    key={link.id}
                                    href={link.href}
                                >
                                    <Icon
                                        size={16}
                                        color={"var(--color-primary)"}
                                    />
                                    <span>{link.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </header>
            {/* Mobile Header */}
            <>
                {/* Mobile Header */}
                <div className="py-4 px-4 flex md:hidden items-center gap-2">
                    <div className="w-full flex items-center gap-2 h-12 rounded-full bg-gray border border-zinc-300 px-3.5">
                        <LuSearch
                            size={20}
                            className="shrink-0"
                        />
                        <input
                            className="h-full w-full outline-none text-xs font-IranSansMedium text-zinc-600 placeholder:text-zinc-400"
                            placeholder="جستجو"
                        />
                    </div>
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <span className="text-xs font-IranSansMedium absolute left-0 top-0 text-white bg-red-400 rounded-full h-4 w-4 flex items-center justify-center">
                            2
                        </span>
                        <IoNotificationsOutline size={32} />
                    </div>
                </div>
                {/* Mobile Menu Links */}
                <div className="fixed left-0 right-0 bottom-0 w-full py-2 bg-white flex md:hidden items-center justify-around text-xs font-IranSansMedium px-4 shadow-[0px_0px_20px_2px_#00000014] text-[#606060]">
                    <Link className="flex flex-col items-center gap-1" href="#">
                        <RiHome5Line size={24} />
                        <span>خانه</span>
                    </Link>
                    <Link
                        className="flex flex-col items-center gap-1"
                        href="/categories"
                    >
                        <BiCategoryAlt size={24} />
                        <span>دسته بندی ها</span>
                    </Link>
                    <Link className="flex flex-col items-center gap-1" href="#">
                        <BiUser size={24} />
                        <span>حساب کاربری</span>
                    </Link>
                </div>
            </>
        </>
    );
}
