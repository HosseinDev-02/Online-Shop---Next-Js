import Layout from "@/components/Layout";
import "../globals.css";


export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <Layout>
                {children}
            </Layout>
        </html>
    );
}
