import React from "react";

function HeartEditIcon({ width, height, color, strokeWidth }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.5056 12C21.8256 10.98 22.0156 9.88 22.0156 8.69C22.0156 5.6 19.5256 3.09998 16.4556 3.09998C14.6356 3.09998 13.0256 3.98003 12.0156 5.34003C11.0056 3.98003 9.38562 3.09998 7.57562 3.09998C4.50563 3.09998 2.01562 5.6 2.01562 8.69C2.01562 15.69 8.49563 19.82 11.3956 20.82C11.5656 20.88 11.7856 20.91 12.0156 20.91"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19.2257 15.74L15.6857 19.2801C15.5457 19.4201 15.4157 19.68 15.3857 19.87L15.1957 21.22C15.1257 21.71 15.4657 22.05 15.9557 21.98L17.3057 21.79C17.4957 21.76 17.7657 21.63 17.8957 21.49L21.4357 17.95C22.0457 17.34 22.3357 16.63 21.4357 15.73C20.5457 14.84 19.8357 15.13 19.2257 15.74Z"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
            <path
                d="M18.7156 16.25C19.0156 17.33 19.8556 18.17 20.9356 18.47"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
            />
        </svg>
    );
}

export default HeartEditIcon;
