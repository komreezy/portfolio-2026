import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { getPosts, urlFor } from "@/lib/sanity";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-light text-[var(--foreground)] leading-tight mb-4">
              Recent Blog Posts
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="text-xl font-medium text-[var(--primary)] mb-2">
              Personal Injury Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Assured Justice Firm
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={post._id} delay={0.1 * index}>
                <article className="group">
                  {/* Image */}
                  {post.mainImage ? (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-[16/10] relative mb-4 overflow-hidden">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(375).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="aspect-[16/10] bg-[var(--secondary)] opacity-40 mb-4"></div>
                  )}

                  {/* Category */}
                  {post.category && (
                    <Link
                      href={`/blog/category/${post.category.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-xs uppercase tracking-wider text-[var(--primary)] hover:underline"
                    >
                      {post.category}
                    </Link>
                  )}

                  {/* Title */}
                  <h2 className="font-display text-xl font-light text-[var(--foreground)] mt-2 mb-3 group-hover:text-[var(--primary)] transition-colors duration-150">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm font-light text-[var(--muted-foreground)] leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--muted-foreground)]">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
