import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { getPostBySlug, getAllSlugs, urlFor } from "@/lib/sanity";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Custom components for Portable Text
const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-2xl md:text-3xl font-light text-[var(--foreground)] mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-xl md:text-2xl font-light text-[var(--foreground)] mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base font-light text-[var(--foreground)] leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[var(--primary)] pl-6 my-8 italic text-[var(--muted-foreground)]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="text-[var(--primary)] underline hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)] bg-[var(--card)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            {post.category && (
              <Link
                href={`/blog/category/${post.category.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm uppercase tracking-wider text-[var(--primary)] hover:underline"
              >
                {post.category}
              </Link>
            )}
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-[var(--foreground)] leading-tight mt-4 mb-6">
              {post.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg font-light text-[var(--muted-foreground)]">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="px-[var(--side-padding)]">
          <div className="max-w-4xl mx-auto -mt-8">
            <ScrollReveal>
              <div className="aspect-[16/9] relative overflow-hidden rounded-sm">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="max-w-3xl mx-auto prose-custom">
          <ScrollReveal>
            {post.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <p className="text-base font-light text-[var(--muted-foreground)]">
                Full article content coming soon.
              </p>
            )}
          </ScrollReveal>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="px-[var(--side-padding)] pb-[var(--section-spacing)]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--primary)] hover:underline inline-flex items-center gap-1"
          >
            <span>&larr;</span> Back to Blog
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
