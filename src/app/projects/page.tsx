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
    <main className="bg-slate-500 h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-slate-800 text-center mb-8">
          My Projects
        </h1>
        <p className="text-center text-lg text-slate-600 mb-12">
          Here are some of the projects I&apos;ve worked on.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  {project.title}
                </a>
              </h2>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap space-x-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
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
};