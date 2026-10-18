import { useEffect } from "react";

const projects = [
  {
    title: "listless",
    description:
      "A simple place to keep track of bugs, ideas, and tasks.",
    tags: ["JS", "SQLite", "Node.js"],
    accent: "lime",
    link: "https://listless.stuartnode.dev/",
  },
  {
    title: "KeyRush",
    description:
      "A Typing-performance game built around speed, accuracy, and friendly competition.",
    tags: ["JS", "SQLite", "Node.js"],
    accent: "orange",
    link: "https://keyrush.stuartnode.dev/",
  },
  {
    title: "GraveStone",
    description:
      "A Paper plugin that lets players recover their inventory from persistent graves after death.",
    tags: ["Minecraft", "PaperMc", "Java"],
    accent: "blue",
    link: "https://github.com/StuartNode/GraveStones",
  },
  {
    title: "FairyCraft",
    description:
      "A collection of decorative blocks, plushies, flags, items, and collectibles for Minecraft.",
    tags: ["Minecraft", "Neoforge", "Java"],
    accent: "pink",
    link: "https://x.com/fairycraftsmp",
  },
  {
    title: "SpellCheck",
    description:
      "A lightweight Fabric mod that helps catch spelling mistakes in Minecraft chat.",
    tags: ["Minecraft", "Fabric", "Java"],
    accent: "red",
    link: "/",
  },
];

const accentStyles = {
  blue: {
    glow: "bg-blue-500/15",
    border: "hover:border-blue-400/35",
    text: "text-blue-300",
    dot: "bg-blue-400",
    tint: "from-blue-500/8",
    tag: "border-blue-400/15 bg-blue-500/5 text-blue-100",
  },
  purple: {
    glow: "bg-purple-500/15",
    border: "hover:border-purple-400/35",
    text: "text-purple-300",
    dot: "bg-purple-400",
    tint: "from-purple-500/8",
    tag: "border-purple-400/15 bg-purple-500/5 text-purple-100",
  },
  yellow: {
    glow: "bg-yellow-500/15",
    border: "hover:border-yellow-400/35",
    text: "text-yellow-300",
    dot: "bg-yellow-400",
    tint: "from-yellow-500/8",
    tag: "border-yellow-400/15 bg-yellow-500/5 text-yellow-100",
  },
  pink: {
    glow: "bg-pink-500/15",
    border: "hover:border-pink-400/35",
    text: "text-pink-300",
    dot: "bg-pink-400",
    tint: "from-pink-500/8",
    tag: "border-pink-400/15 bg-pink-500/5 text-pink-100",
  },
  red: {
    glow: "bg-red-500/15",
    border: "hover:border-red-400/35",
    text: "text-red-300",
    dot: "bg-red-400",
    tint: "from-red-500/8",
    tag: "border-red-400/15 bg-red-500/5 text-red-100",
  },
  orange: {
    glow: "bg-orange-500/15",
    border: "hover:border-orange-400/35",
    text: "text-orange-300",
    dot: "bg-orange-400",
    tint: "from-orange-500/8",
    tag: "border-orange-400/15 bg-orange-500/5 text-orange-100",
  },
  lime: {
    glow: "bg-lime-500/15",
    border: "hover:border-lime-400/35",
    text: "text-lime-300",
    dot: "bg-lime-400",
    tint: "from-lime-500/8",
    tag: "border-lime-400/15 bg-lime-500/5 text-lime-100",
  },
};

function ProjectCard({ project }) {
  const style = accentStyles[project.accent] ?? accentStyles.blue;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-[1.5rem] border border-zinc-800/80 bg-[#0f1117]/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)] ring-1 ring-white/5 transition-all duration-300 ring-inset hover:-translate-y-1.5 hover:border-zinc-600/80 hover:shadow-[0_22px_44px_rgba(0,0,0,0.34)] ${style.border} `}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.tint} to-transparent opacity-90`}
      />
      <div
        className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full blur-[80px] ${style.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative z-10">
        <h2 className={`text-2xl font-semibold tracking-tight ${style.text}`}>
          {project.title}
        </h2>
        <p className="mt-3 min-h-[76px] text-sm leading-6 text-zinc-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${style.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
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
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:54px_54px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#09090B_85%)]" />

        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[180px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[160px]" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-16 pb-10 sm:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <div className="text-4xl font-black text-blue-400 sm:text-5xl">
            &lt;/&gt;
          </div>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A collection of things I've built, experimented with, and currently
            have in development.
          </p>
        </section>

        <section className="mt-12 sm:mt-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
