import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const blogPosts = [
  {
    title: "What to Do After a Car Accident in Georgia",
    excerpt:
      "The moments after a car accident can be overwhelming. Learn the essential steps you should take to protect yourself, your health, and your legal rights...",
    slug: "what-to-do-after-car-accident-georgia",
  },
  {
    title: "How Insurance Companies Try to Minimize Your Claim",
    excerpt:
      "Insurance adjusters may seem friendly, but their goal is to pay as little as possible. Learn the tactics they use and how to protect yourself...",
    slug: "insurance-company-tactics",
  },
  {
    title: "Types of Damages You Can Recover",
    excerpt:
      "From medical expenses and lost wages to pain and suffering, there are many types of compensation available in a personal injury case...",
    slug: "types-of-damages-personal-injury",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
          Latest Articles
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <ScrollReveal key={post.slug} delay={0.15 * index}>
            <article className="group">
              {/* Image Placeholder */}
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] bg-[var(--secondary)] opacity-40 mb-4 group-hover:opacity-60 transition-opacity duration-300"></div>
              </Link>

              {/* Title */}
              <h3 className="font-display text-lg font-light text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-150">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              {/* Excerpt */}
              <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-outlined">
            Read More
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
