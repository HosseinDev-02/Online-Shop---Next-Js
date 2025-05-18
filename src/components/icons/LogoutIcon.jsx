import React from "react";

function LogoutIcon({ width, height, color, strokeWidth }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.44 14.62L20 12.06L17.44 9.5"
                strokeMiterlimit="10"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.76001 12.0601H19.93"
                strokeMiterlimit="10"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4"
                strokeMiterlimit="10"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default LogoutIcon;
