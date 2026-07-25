import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen w-screen bg-[#09090B] text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.14]" style={{backgroundImage: `linear-gradient(#d4d4d8 1px, transparent 1px),linear-gradient(90deg, #d4d4d8 1px, transparent 1px)`, backgroundSize: "48px 48px",}}/>
                <div className="absolute inset-0" style={{background: "radial-gradient(circle at center, transparent 25%, #09090B 85%)",}}/>
                <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]"/>
            </div>

            {/* Navbar */}
            <nav className="relative z-20 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5 w-full">
                    <div className="text-lg sm:text-xl font-bold">
                        <span className="text-blue-400">
                            &lt;/&gt;
                        </span>{" "}
                        StuartNode
                    </div>

                    <div className="hidden gap-6 sm:gap-8 text-xs sm:text-sm text-zinc-400 md:flex">
                        <a href="#projects" className="hover:text-white">Projects</a>
                        <a href="#about" className="hover:text-white">About</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative z-10 flex min-h-screen w-screen items-center justify-center px-6">
                <div className="text-center">

                    <div className="text-[clamp(2rem,8vw,5rem)] font-black text-blue-400">&lt;/&gt;</div>
                    <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-black tracking-tight">Stuart Node</h1>

                    <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-[clamp(0.875rem,3vw,1.25rem)] text-zinc-400">
                        Full Stack Developer & Minecraft Developer
                        building plugins, websites, and backend systems.
                    </p>

                    <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button className="group flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition hover:bg-blue-400">
                            View Projects
                            <ArrowRight size={18} className="transition group-hover:translate-x-1"/>
                        </button>

                        <a href="https://github.com/StuartNode" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition hover:border-blue-400 sm:border sm:border-transparent">
                            <FaGithub size={18} />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
