import CarIcon from "@/components/icons/CarIcon";
import HeartEditIcon from "@/components/icons/HeartEditIcon";
import MobileIcon from "@/components/icons/MobileIcon";
import MonitorIcon from "@/components/icons/MonitorIcon";
import NecklaceIcon from "@/components/icons/NecklaceIcon";
import RefrigeratorIcon from "@/components/icons/RefrigeratorIcon";
import ShirtIcon from "@/components/icons/ShirtIcon";
import SofaIcon from "@/components/icons/SofaIcon";

const getMenuItemsIcon = (link) => {
    if (link.includes("موبایل")) return MobileIcon;
    if (link.includes("کالای دیجیتال")) return MonitorIcon;
    if (link.includes("خانه و آشپزخانه")) return SofaIcon;
    if (link.includes("لوازم خانگی برقی")) return RefrigeratorIcon;
    if (link.includes("آرایشی بهداشتی")) return HeartEditIcon;
    if (link.includes("خودرو و موتورسیکلت")) return CarIcon;
    if (link.includes("مد و پوشاک")) return ShirtIcon;
    if (link.includes("طلا و نقره")) return NecklaceIcon;
};



export { getMenuItemsIcon }