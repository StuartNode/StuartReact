import { useEffect} from "react";

export default function Pizza() {
    useEffect(() => {
        document.title = "Pizza | StuartNode"
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div>
                <h1 className="text-white text-[clamp(1.75rem,8vw,4rem)] font-semibold text-center px-4">🍕Pizza</h1>
            </div>
        </div>
    )
}