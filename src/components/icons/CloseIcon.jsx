import React from "react";

function CloseIcon({ width, height, color, strokeWidth }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.16992 14.8299L14.8299 9.16992"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.8299 14.8299L9.16992 9.16992"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke={color || "currentColor"}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default CloseIcon;
