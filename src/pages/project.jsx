import { useEffect } from "react";

const projects = [
    {
        title: "GameMaker Assistant",
        description: "A fan-made AI assistant built to help with mGameMaker development.",
        status: "Active",
        tags: ["AI", "GameMaker", "Node.js"],
        accent: "yellow",
        link: "https://maker.stuartnode.dev/",
    },
    {
        title: "GraveStone",
        description: "A Paper plugin that lets players recover their inventory from persistent graves after death.",
        tags: ["Minecraft", "PaperMc", "Java"],
        accent: "blue",
        link: "https://github.com/StuartNode/GraveStones",
    },
    {
        title: "FairyCraft",
        description: "A collection of decorative blocks, plushies, flags, items, and collectibles for Minecraft.",
        tags: ["Minecraft", "Neoforge", "Java"],
        accent: "pink",
        link: "https://x.com/fairycraftsmp",
    },
    {
        title: "SpellCheck",
        description: "A lightweight Fabric mod that helps catch spelling mistakes in Minecraft chat.",
        tags: ["Minecraft", "Fabric", "Java"],
        accent: "red",
        link: "/",
    },
    {
        title: "stSurvivalGame",
        description: "A Paper plugin built to power Survival Games on the Shrimp Town server.",
        tags: ["Minecraft", "PaperMc", "Java"],
        accent: "purple",
        link: "https://github.com/StuartNode/stSurvivalGame",
    },
];

const accentStyles = {
    blue: {glow: "bg-blue-500/20", border: "hover:border-blue-400/40", text: "text-blue-400", gradient: "from-blue-500/10",},
    purple: {glow: "bg-purple-500/20", border: "hover:border-purple-400/40", text: "text-purple-400", gradient: "from-purple-500/10",},
    yellow: {glow: "bg-yellow-500/20", border: "hover:border-yellow-400/40", text: "text-yellow-400", gradient: "from-yellow-500/10",},
    pink: {glow: "bg-pink-500/20", border: "hover:border-pink-400/40", text: "text-pink-400", gradient: "from-pink-500/10",},
    red: {glow: "bg-red-500/20", border: "hover:border-red-400/40", text: "text-red-400", gradient: "from-red-500/10",},
};

function ProjectCard({ project }) {
    const style = accentStyles[project.accent] ?? accentStyles.blue;

    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer"
            className={`
                group relative overflow-hidden rounded-2xl
                border border-white/10 bg-white/[0.035]
                p-6 backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                ${style.border}
            `}
        >
            <div
                className={`
                    pointer-events-none absolute
                    -right-20 -top-20 h-48 w-48
                    rounded-full blur-[90px]
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                    ${style.glow}
                `}
            />

            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br${style.gradient}to-transparent opacity-60`}/>

            <div className="relative z-10">
                <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag) => (<span key={tag} className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-400">{tag}</span>))}</div>
            </div>
        </a>
    );
}

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | StuartNode";
    }, []);

    return (
        <div className="min-h-screen overflow-hidden bg-[#09090B] text-white">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: `linear-gradient(#d4d4d8 1px, transparent 1px), linear-gradient(90deg, #d4d4d8 1px, transparent 1px)`, backgroundSize: "48px 48px",}}/>

                <div className="absolute inset-0" style={{background: "radial-gradient(circle at center, transparent 20%, #09090B 85%)",}}/>

                <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[180px]" />
                <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[160px]" />
            </div>

            <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8">
                <section className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 text-4xl font-black text-blue-400">&lt;/&gt;</div>

                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl">Projects</h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                        A collection of things I've built, experimented with,
                        and currently have in development.
                    </p>
                </section>

                <section className="mt-16">
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => (<ProjectCard key={project.title} project={project}/>))}</div>
                </section>
            </main>
        </div>
    );
}