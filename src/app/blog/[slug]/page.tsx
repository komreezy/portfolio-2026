import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import DOMPurify from "isomorphic-dompurify";
import ContactForm from "@/components/ContactForm";
import { getPostBySlug, getAllSlugs, urlFor } from "@/lib/sanity";

// Revalidate every 60 seconds
export const revalidate = 60;

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

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="flex-1">
      {/* Hero Section - Navy/Gold Theme */}
      <section className="blog-hero">
        {post.category && (
          <Link
            href={`/blog/category/${post.category.toLowerCase().replace(/\s/g, "-")}`}
            className="blog-hero-eyebrow"
          >
            {post.category}
          </Link>
        )}
        <h1>
          {post.title}
        </h1>
        <p className="blog-hero-meta">
          By <strong>Arash Jafary, Esq.</strong> &nbsp;·&nbsp; Assured Justice Law Firm &nbsp;·&nbsp; {formatDate(post.publishedAt)}
        </p>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="px-6 md:px-8 bg-[#faf8f3] pt-12">
          <div className="max-w-[800px] mx-auto">
            <div className="relative overflow-hidden rounded-sm shadow-lg">
              <img
                src={urlFor(post.mainImage).width(1200).url()}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-16 px-6 md:px-8 bg-[#faf8f3]">
        <div className="max-w-[800px] mx-auto">
          {post.htmlContent ? (
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.htmlContent, {
                  ALLOWED_TAGS: ['p', 'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'blockquote', 'div', 'span', 'br', 'hr', 'img', 'figure', 'figcaption', 'pre', 'code', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'cite'],
                  ALLOWED_ATTR: ['href', 'class', 'target', 'rel', 'src', 'alt', 'title', 'width', 'height'],
                  ALLOW_DATA_ATTR: false
                })
              }}
            />
          ) : post.body ? (
            <div className="prose-custom">
              <PortableText value={post.body} components={components} />
            </div>
          ) : (
            <p className="text-base font-light text-[var(--muted-foreground)]">
              Full article content coming soon.
            </p>
          )}
        </div>
      </article>

      {/* Back to Blog */}
      <section className="px-6 md:px-8 pb-16 bg-[#faf8f3]">
        <div className="max-w-[800px] mx-auto">
          <Link
            href="/blog"
            className="text-sm font-medium text-[#1a3460] hover:text-[#c9a84c] inline-flex items-center gap-2 transition-colors"
            style={{ textDecoration: 'underline', textDecorationColor: '#c9a84c', textUnderlineOffset: '3px' }}
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
