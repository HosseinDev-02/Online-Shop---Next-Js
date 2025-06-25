import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductBox(props) {
    console.log(props)
    if (props.type === "amazing") {
        return (
            <Link
                href={props.href}
                className="block font-IranSansMedium bg-white px-2 py-3"
            >
                <span className="absolute left-0 top-3 bg-primary/10 text-primary text-sm py-1 px-1.5 rounded-r-xl">
                    {props.offer}%
                </span>
                <div className="relative w-full h-36.5">
                    <Image
                        className="object-cover md:rounded"
                        fill
                        src={props.image}
                        alt={props.title}
                    />
                </div>
                <div className="mt-3">
                    <h5 className="text-sm line-clamp-2">{props.title}</h5>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                            <span>
                                {(
                                    props.price -
                                    props.price * (props.offer / 100)
                                ).toLocaleString()}
                            </span>
                            <span className="text-xs hidden sm:inline">
                                تومان
                            </span>
                        </div>
                        <span className="line-through text-neutral-400">
                            {props.price.toLocaleString()}
                        </span>
                    </div>
                </div>
            </Link>
        );
    }

    if (props.type === "popular") {
        return (
            <Link
                className="flex items-center gap-2 py-4 relative before:absolute before:left-0 before:right-0 before:w-3/4 before:h-px before:bg-gradient-to-r before:from-neutral-50 before:via-neutral-100 before:to-neutral-50 before:top-full before:mx-auto before:rounded before:content-['']"
                href={props.href}
            >
                <div className="relative shrink-0 w-28 h-20">
                    <Image src={props.image} fill alt={props.title} />
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-IranSansBold text-xl">
                        {props.index + 1}
                    </span>
                    <h6 className="line-clamp-2 text-sm max-w-[250px] w-full">
                        {props.title}
                    </h6>
                </div>
            </Link>
        );
    }
}

export default ProductBox;
