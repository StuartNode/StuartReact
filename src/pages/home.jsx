import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#09090B] text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.14]" style={{backgroundImage: `linear-gradient(#d4d4d8 1px, transparent 1px),linear-gradient(90deg, #d4d4d8 1px, transparent 1px)`, backgroundSize: "48px 48px",}}/>
                <div className="absolute inset-0" style={{background: "radial-gradient(circle at center, transparent 25%, #09090B 85%)",}}/>
                <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px]-translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]"/>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 z-20 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="max-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <div className="text-xl font-bold">
                        <span className="text-blue-400">
                            &lt;/&gt;
                        </span>{" "}
                        StuartNode
                    </div>

                    <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
                        <a href="#projects" className="hover:text-white">Projects</a>
                        <a href="#about" className="hover:text-white">About</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="flex min-h-screen items-center justify-center px-6">
                <div className="text-center">

                    <div className="text-8xl font-black text-blue-400">&lt;/&gt;</div>
                    <h1 className="text-6xl font-black tracking-tight md:text-8xl">Stuart Node</h1>

                    <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
                        Full Stack Developer & Minecraft Developer
                        building plugins, websites, and backend systems.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <button className="group flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400">
                            View Projects
                            <ArrowRight size={18} className="transition group-hover:translate-x-1"/>
                        </button>

                        <a href="https://github.com/StuartNode" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-400">
                            <FaGithub size={18} />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}