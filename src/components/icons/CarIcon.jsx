import React from "react";

function CarIcon({ width, height, color, strokeWidth }) {
    return (
        <svg
           width={width}
           height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.511 2.83H8.49098C6.00098 2.83 5.45098 4.07 5.13098 5.59L4.00098 11H20.001L18.871 5.59C18.551 4.07 18.001 2.83 15.511 2.83Z"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.991 19.82C22.101 20.99 21.161 22 19.961 22H18.081C17.001 22 16.851 21.54 16.661 20.97L16.461 20.37C16.181 19.55 16.001 19 14.561 19H9.44096C8.00096 19 7.79096 19.62 7.54096 20.37L7.34096 20.97C7.15096 21.54 7.00096 22 5.92096 22H4.04096C2.84096 22 1.90096 20.99 2.01096 19.82L2.57096 13.73C2.71096 12.23 3.00096 11 5.62096 11H18.381C21.001 11 21.291 12.23 21.431 13.73L21.991 19.82Z"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.00098 8H3.00098"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.001 8H20.001"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.001 3V5"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.501 5H13.501"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.00098 15H9.00098"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.001 15H18.001"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default CarIcon;
