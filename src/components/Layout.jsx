"use client"
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {

    const pathname = usePathname()

    return (
        <>
            <body className="pb-15">
                <Header />
                {children}
                <Footer/>
            </body>
        </>
    );
}
