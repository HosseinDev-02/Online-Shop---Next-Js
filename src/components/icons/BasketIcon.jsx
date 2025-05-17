import React from "react";

function BasketIcon({ width, height, color, strokeWidth, className }) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || '1.5'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.99983 22H14.9998C19.0198 22 19.7398 20.39 19.9498 18.43L20.6998 12.43C20.9698 9.99 20.2698 8 15.9998 8H7.99983C3.72983 8 3.02983 9.99 3.29983 12.43L4.04983 18.43C4.25983 20.39 4.97983 22 8.99983 22Z"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || '1.5'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.4955 12H15.5045"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || '1.5'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.49451 12H8.50349"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || '1.5'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default BasketIcon;
