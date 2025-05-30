export default function Container({ children, className }) {
    return (
        <div className={`container mx-auto px-6 md:px-7 ${className}`}>
            {children}
        </div>
    );
}
