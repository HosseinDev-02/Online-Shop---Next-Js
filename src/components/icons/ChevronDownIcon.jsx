import React from "react";

function ChevronDownIcon({ width, height, color, strokeWidth }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.94995"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ChevronDownIcon;
