import Header from "@/components/Header";
import React from "react";
import '../../globals.css'

function CategoriesLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className="h-screen flex flex-col">
                <Header />
                {children}
            </body>
        </html>
    );
}

export default CategoriesLayout;
