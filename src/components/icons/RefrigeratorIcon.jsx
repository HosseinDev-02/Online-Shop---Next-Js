import React from "react";

function RefrigeratorIcon({ width, height, color, strokeWidth }) {
    return (
        <svg
            stroke={color || "currentColor"}
            fill="none"
            strokeWidth={ '1.5' }
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"></path>
            <path d="M5 10h14"></path>
            <path d="M15 7v6"></path>
        </svg>
    );
}

export default RefrigeratorIcon;
