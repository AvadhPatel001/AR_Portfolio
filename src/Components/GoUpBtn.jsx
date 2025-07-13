import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react";

const GoUpBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button onClick={scrollToTop} className={`group fixed bottom-10 right-10 p-3 rounded-full shadow-lg bg-neutral-600 hover:bg-neutral-500 transition-all duration-300 ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <ArrowUp className="w-7 h-7 transition-all duration-500 ease-in-out group-hover:-translate-y-3" />
        </button>
    )
}

export default GoUpBtn