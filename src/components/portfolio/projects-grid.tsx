"use client";

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6">

      <div className="border-4 border-black bg-[#1f1f1f] p-4 shadow-[8px_8px_0px_#000] sm:p-6 md:p-8">

     <h2 className="mb-4 font-pixel text-2xl uppercase text-white sm:text-3xl md:text-4xl">
  ANKITYEX PORTFOLIO
</h2>
         
        <p className="mb-5 text-white">
          My personal portfolio website showcasing my profile,
          skills, projects and professional work.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript"].map((tech) => (
            <span
              key={tech}
              className="border-2 border-black bg-cyan-400 px-3 py-1 font-bold text-black"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://ankityex.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-4 border-black bg-orange-500 px-5 py-3 font-black text-black shadow-[4px_4px_0px_#000] hover:translate-y-1"
        >
          LIVE DEMO ↗
        </a>

      </div>

    </div>
  );
}