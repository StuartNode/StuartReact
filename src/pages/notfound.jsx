export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#09090B] text-white overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.14]" style={{backgroundImage: `linear-gradient(#d4d4d8 1px, transparent 1px),linear-gradient(90deg, #d4d4d8 1px, transparent 1px)`, backgroundSize: "48px 48px",}}/>
                <div className="absolute inset-0" style={{background: "radial-gradient(circle at center, transparent 25%, #09090B 85%)",}}/>
                <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[160px]"/>
            </div>

            <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
                <div className="text-center">
                    <div className="text-8xl font-black text-blue-400">&lt;/&gt;</div>
                    <h1 className="text-6xl font-black tracking-tight md:text-8xl">404</h1>

                    <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
                        Oops! This page doesn't exist.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <a href="/" target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-400">
                            Back Home
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}