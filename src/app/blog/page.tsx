import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    title: "Collateral Consequences of a DUI Conviction",
    excerpt:
      "Beyond criminal penalties, a DUI conviction affects many aspects of life: insurance premiums rise, employment opportunities may decline, and professional licenses can be affected...",
    category: "DUI Lawyer",
    slug: "collateral-consequences-dui",
    image: null,
  },
  {
    title: "Why You Need a DUI Lawyer in Georgia",
    excerpt:
      "DUI law is complex, and penalties can include jail, fines, license suspension, and a permanent criminal record. An experienced DUI lawyer understands the legal system, evaluates evidence, and negotiates...",
    category: "DUI Lawyer",
    slug: "why-you-need-dui-lawyer",
    image: null,
  },
  {
    title: "How Long a DUI Stays on Your Record in Georgia",
    excerpt:
      "Georgia treats DUI convictions very seriously; they remain on your criminal record forever and cannot be restricted or expunged. This permanence can affect employment, education, and insurance for years...",
    category: "DUI Lawyer",
    slug: "dui-record-georgia",
    image: null,
  },
  {
    title: "Refusing a Breathalyzer or Field Sobriety Test",
    excerpt:
      "Georgia's implied consent law requires drivers to submit to state-administered chemical tests. Refusing a breath, blood, or urine test can result in a one-year license suspension...",
    category: "DUI Lawyer",
    slug: "refusing-breathalyzer-test",
    image: null,
  },
  {
    title: "Alternative Sentencing & DUI Court",
    excerpt:
      "Individuals charged with driving under the influence face the possibility of jail time, significant fines, and lasting consequences. While Georgia enforces strict penalties, alternative sentencing programs exist...",
    category: "DUI Lawyer",
    slug: "alternative-sentencing-dui-court",
    image: null,
  },
  {
    title: "Why It's Worth It to Fight a Traffic Violation",
    excerpt:
      "Nearly everyone has been pulled over by the police at least once. Whether it's for exceeding the speed limit or another violation, it is always frustrating to receive a traffic ticket...",
    category: "Traffic Violations",
    slug: "fight-traffic-violation",
    image: null,
  },
];

export default function Blog() {
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
              Criminal Defense Attorney in Georgia
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-[var(--muted-foreground)] font-light">
              Arash Jafari Law
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-[var(--section-spacing)] px-[var(--side-padding)]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={0.1 * index}>
              <article className="group">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-[var(--secondary)] opacity-40 mb-4"></div>

                {/* Category */}
                <Link
                  href={`/blog/category/${post.category.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-xs uppercase tracking-wider text-[var(--primary)] hover:underline"
                >
                  {post.category}
                </Link>

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

        {/* Read More */}
        <div className="text-center mt-12">
          <ScrollReveal delay={0.3}>
            <Link
              href="/blog/page/2"
              className="text-sm font-light text-[var(--primary)] hover:underline"
            >
              Older Entries &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </main>
  );
}
