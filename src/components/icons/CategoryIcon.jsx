import React from "react";

function CategoryIcon({ width, height, color, strokeWidth, fill }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 25 24"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.0156 10H19.0156C21.0156 10 22.0156 9 22.0156 7V5C22.0156 3 21.0156 2 19.0156 2H17.0156C15.0156 2 14.0156 3 14.0156 5V7C14.0156 9 15.0156 10 17.0156 10Z"
                stroke={ color || 'currentColor' }
                strokeWidth={strokeWidth || '1.5'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.01562 22H7.01562C9.01562 22 10.0156 21 10.0156 19V17C10.0156 15 9.01562 14 7.01562 14H5.01562C3.01562 14 2.01562 15 2.01562 17V19C2.01562 21 3.01562 22 5.01562 22Z"
                stroke={ color || 'currentColor' }
                strokeWidth={strokeWidth || '1.5'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.01562 10C8.22476 10 10.0156 8.20914 10.0156 6C10.0156 3.79086 8.22476 2 6.01562 2C3.80649 2 2.01562 3.79086 2.01562 6C2.01562 8.20914 3.80649 10 6.01562 10Z"
                stroke={ color || 'currentColor' }
                strokeWidth={strokeWidth || '1.5'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.0156 22C20.2248 22 22.0156 20.2091 22.0156 18C22.0156 15.7909 20.2248 14 18.0156 14C15.8065 14 14.0156 15.7909 14.0156 18C14.0156 20.2091 15.8065 22 18.0156 22Z"
                stroke={ color || 'currentColor' }
                strokeWidth={strokeWidth || '1.5'}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default CategoryIcon;
