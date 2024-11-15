interface Project {
  title: string;
  description: string;
  url: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Coding Project Idea Generator",
    description: "A simple yet powerful tool to generate coding project ideas.",
    url: "https://idea-gen-beryl.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="h-screen bg-slate-500 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-semibold text-slate-800">
          My Projects
        </h1>
        <p className="mb-12 text-center text-lg text-slate-600">
          Here are some of the projects I&apos;ve worked on.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transform rounded-lg bg-white p-6 shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              <h2 className="mb-4 text-2xl font-semibold text-slate-800">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  {project.title}
                </a>
              </h2>
              <p className="mb-4 text-slate-600">{project.description}</p>
              <div className="flex flex-wrap space-x-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-200 px-3 py-1 text-sm text-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
