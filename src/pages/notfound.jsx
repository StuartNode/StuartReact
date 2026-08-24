import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 | StuartNode";
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:54px_54px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#09090B_82%)]" />
        <div className="absolute top-1/3 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
      </div>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl text-center">
          <div className="text-[clamp(2.4rem,8vw,5.5rem)] leading-none font-black text-blue-400">
            &lt;/&gt;
          </div>
          <h1 className="mt-3 text-[clamp(3rem,10vw,7rem)] font-black tracking-[-0.08em] text-white">
            404
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base text-zinc-400 sm:text-lg">
            This page doesn’t exist or has wandered off.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/[0.05]"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
