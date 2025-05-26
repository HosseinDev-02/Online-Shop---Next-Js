import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbDeviceDesktop, TbPencilHeart } from "react-icons/tb";
import { RiSofaLine } from "react-icons/ri";
import { LuRefrigerator, LuCarFront } from "react-icons/lu";
import { IoShirtOutline } from "react-icons/io5";
import { GiHeartNecklace } from "react-icons/gi";

const getMenuItemsIcon = (link) => {
    if (link.includes("موبایل")) return HiOutlineDevicePhoneMobile;
    if (link.includes("کالای دیجیتال")) return TbDeviceDesktop;
    if (link.includes("خانه و آشپزخانه")) return RiSofaLine;
    if (link.includes("لوازم خانگی برقی")) return LuRefrigerator;
    if (link.includes("آرایشی بهداشتی")) return TbPencilHeart;
    if (link.includes("خودرو و موتورسیکلت")) return LuCarFront;
    if (link.includes("مد و پوشاک")) return IoShirtOutline;
    if (link.includes("طلا و نقره")) return GiHeartNecklace;
};



export { getMenuItemsIcon }