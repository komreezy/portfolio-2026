import Link from "next/link";

const projects = [
  {
    title: "Project One",
    category: "Web Development",
    description:
      "A comprehensive web application built with modern technologies and thoughtful design principles.",
    link: "#",
  },
  {
    title: "Project Two",
    category: "Design System",
    description:
      "A scalable design system creating consistency across multiple products and platforms.",
    link: "#",
  },
  {
    title: "Project Three",
    category: "E-Commerce",
    description:
      "An elegant e-commerce experience focused on conversion and user satisfaction.",
    link: "#",
  },
  {
    title: "Project Four",
    category: "Mobile App",
    description:
      "A cross-platform mobile application delivering seamless experiences on any device.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Work</span>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-[var(--primary)] leading-tight">
              Selected
              <br />
              <span className="font-serif italic">projects</span>
            </h1>
            <p className="mt-8 text-base font-light text-[var(--foreground)] opacity-80 max-w-lg">
              A curated collection of work spanning web development, design
              systems, and digital experiences. Each project reflects a
              commitment to quality and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="border-t border-[var(--border)]">
        {projects.map((project, index) => (
          <article
            key={index}
            className="border-b border-[var(--border)] py-12 px-[var(--side-padding)] group hover:bg-[var(--card)] transition-colors duration-300"
          >
            <Link href={project.link} className="block">
              <div className="grid md:grid-cols-[30%_70%] gap-12 items-center">
                <div>
                  <span className="text-xs text-[var(--muted-foreground)] uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-150">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm font-light text-[var(--foreground)] opacity-70 max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <span className="text-[var(--primary)] text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      View Project &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-[30%_70%] gap-12">
          <div>
            <span className="heading-serif">Collaborate</span>
          </div>
          <div>
            <p className="text-lg font-light text-[var(--foreground)] max-w-lg">
              Interested in working together? I&apos;m always open to discussing
              new projects and opportunities.
            </p>
            <Link href="/contact" className="btn-outlined inline-block mt-8">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
