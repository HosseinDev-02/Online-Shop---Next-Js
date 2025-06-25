import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryItem({ href, image, title }) {
    return (
        <Link
            href={href}
            className="flex items-center flex-col gap-2"
        >
            <span className="w-16 md:w-24 h-16 md:h-24 rounded-full flex relative">
                <Image
                    className="object-cover w-full h-full"
                    fill
                    alt={title}
                    objectFit="cover"
                    src={image}
                />
            </span>
            <span className="font-IranSansMedium text-xs text-nowrap">
                {title}
            </span>
        </Link>
    );
}

export default CategoryItem;
