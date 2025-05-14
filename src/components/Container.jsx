export default function Container({ children }) {
    return (
        <div className="container mx-auto px-6 md:px-7">
            {children}
        </div>
    );
}
