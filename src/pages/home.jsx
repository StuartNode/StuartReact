import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | StuartNode";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:54px_54px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,#09090B_78%)]" />
        <div className="absolute top-1/3 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/18 blur-[180px]" />
        <div className="absolute top-0 right-0 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10 sm:px-8">
        <div className="w-full max-w-4xl text-center">
          <div className="text-[clamp(2.2rem,8vw,5.5rem)] leading-none font-black text-blue-400 [text-shadow:0_0_40px_rgba(96,165,250,0.18)]">
            &lt;/&gt;
          </div>
          <h1 className="mt-3 text-[clamp(2.8rem,9vw,6.5rem)] font-black tracking-[-0.06em] text-white">
            Stuart Node
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[clamp(0.95rem,2.8vw,1.3rem)] leading-7 text-zinc-400">
            Bringing ideas to life through Minecraft plugins and mods, websites,
            and backend systems. Focused on creating unique experiences for all
            to enjoy.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/project"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,130,246,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-400 focus:outline-none"
            >
              Projects
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://github.com/StuartNode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/[0.05]"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
