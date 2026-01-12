import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const blogPosts = [
  {
    title: "Collateral Consequences of a DUI Conviction",
    excerpt:
      "Beyond criminal penalties, a DUI conviction affects many aspects of life: insurance premiums rise, employment opportunities may decline, and professional licenses can be affected...",
    slug: "collateral-consequences-dui",
  },
  {
    title: "Why You Need a DUI Lawyer in Georgia",
    excerpt:
      "DUI law is complex, and penalties can include jail, fines, license suspension, and a permanent criminal record. An experienced DUI lawyer understands the legal system...",
    slug: "why-you-need-dui-lawyer",
  },
  {
    title: "How Long a DUI Stays on Your Record in Georgia",
    excerpt:
      "Georgia treats DUI convictions very seriously; they remain on your criminal record forever and cannot be restricted or expunged...",
    slug: "dui-record-georgia",
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
