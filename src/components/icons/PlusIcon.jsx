import React from "react";

function PlusIcon({ height, width, strokeWidth, color }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 12H18"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 18V6"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default PlusIcon;
