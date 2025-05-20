import React from "react";

function HomeIcon({ width, height, color, strokeWidth, fill }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 18V15"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || '1.5'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.0698 2.82009L3.13978 8.37009C2.35978 8.99009 1.85978 10.3001 2.02978 11.2801L3.35978 19.2401C3.59978 20.6601 4.95978 21.8101 6.39978 21.8101H17.5998C19.0298 21.8101 20.3998 20.6501 20.6398 19.2401L21.9698 11.2801C22.1298 10.3001 21.6298 8.99009 20.8598 8.37009L13.9298 2.83009C12.8598 1.97009 11.1298 1.97009 10.0698 2.82009Z"
                stroke={color || 'currentColor'}
                strokeWidth={strokeWidth || '1.5'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default HomeIcon;
