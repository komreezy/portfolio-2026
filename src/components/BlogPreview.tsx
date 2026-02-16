import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { getLatestPosts, urlFor } from "@/lib/sanity";

export default async function BlogPreview() {
  const posts = await getLatestPosts(3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--foreground)] text-center mb-12">
          Latest Articles
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <ScrollReveal key={post._id} delay={0.15 * index}>
            <article className="group">
              {/* Image */}
              <Link href={`/blog/${post.slug}`}>
                {post.mainImage ? (
                  <div className="aspect-[16/10] relative mb-4 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(375).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] bg-[var(--secondary)] opacity-40 mb-4 group-hover:opacity-60 transition-opacity duration-300"></div>
                )}
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
