import { categoryItems } from "@/utils/data";
import { getMenuItemsIcon } from "@/utils/funcs";
import Link from "next/link";
import React from "react";

function Categories() {
    return (
        <div className="grow-1 flex pb-15 overflow-hidden">
            <div className="overflow-auto">
                <ul className="flex flex-col text-xxs w-22.5">
                    {categoryItems.map((item) => {
                        const Icon = getMenuItemsIcon(item.title);
                        return (
                            <li
                                className={`py-3 px-2 flex items-center justify-center border-b border-l border-b-neutral-200 ${
                                    item.title.includes("موبایل")
                                        ? "bg-white border-l-white"
                                        : "border-l-neutral-200 bg-neutral-100"
                                }`}
                                key={item.id}
                            >
                                <Link
                                    className={`flex flex-col items-center gap-2 text-center ${
                                        item.title.includes("موبایل") &&
                                        "text-red-500"
                                    }`}
                                    href={item.href}
                                >
                                    <Icon width={16} height={16} />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="p-4 grid grid-cols-3 gap-4">
                {/* Mobile Categories */}
                <div></div>
            </div>
        </div>
    );
}

export default Categories;
