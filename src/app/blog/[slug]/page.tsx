import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { colorClasses as c } from "@/lib/colors";
import { brand } from "@/lib/site-content";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: `Article Not Found | ${brand.name}`,
    };
  }

  return {
    title: `${post.title} | ${brand.name} Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);

  return (
    <PageShell>
      <article className={`px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-10 ${c.bg.page}`}>
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb Back Link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-brand-primary"
            >
              <span aria-hidden>←</span> Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-brand-primary/10 px-3 py-1 font-semibold text-brand-primary">
                {post.category}
              </span>
              <span className="text-text-muted">{post.publishedAt}</span>
              <span className="text-text-muted">•</span>
              <span className="text-text-muted">{post.readTime}</span>
            </div>

            <h1 className="font-display text-3xl font-normal leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              {post.excerpt}
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-3 border-y border-border-default py-4">
              <div className="relative size-11 overflow-hidden rounded-full ring-2 ring-white">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{post.author.name}</p>
                <p className="text-xs text-text-muted">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Featured Image Banner */}
          <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#141414] shadow-lg sm:mt-10">
            <div className="relative aspect-[16/9] w-full max-h-[500px]">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mt-10 rounded-2xl border border-border-default bg-white p-6 shadow-xs sm:mt-12 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                Key Takeaways
              </p>
              <ul className="mt-4 space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary sm:text-base">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-bold text-brand-primary">
                      ✓
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body */}
          <div className="mt-10 space-y-6 text-base leading-relaxed text-text-secondary sm:mt-12 sm:text-lg sm:leading-loose">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border-default pt-6 sm:mt-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f0f0f0] px-3.5 py-1.5 text-xs font-medium text-text-secondary"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#141414] p-8 text-center text-white shadow-xl sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              (Scale With Adwide)
            </p>
            <h3 className="mt-3 font-display text-2xl font-normal sm:text-3xl">
              Ready to implement this framework for your brand?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-white/70 sm:text-sm">
              We help India&apos;s leading D2C and consumer brands transform attention into
              repeatable, profitable revenue.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-header-cta px-7 text-sm font-semibold text-white shadow-md transition-all hover:brightness-105 active:scale-95"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore More Insights
              </Link>
            </div>
          </div>

          {/* Related Articles Section */}
          {related.length > 0 && (
            <div className="mt-16 sm:mt-20 border-t border-border-default pt-12">
              <h2 className="font-display text-2xl font-normal tracking-tight text-text-primary sm:text-3xl">
                Related Articles
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-[20px] bg-[#161616] shadow-sm ring-1 ring-black/5">
                      <Image
                        src={item.featuredImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 280px"
                      />
                    </div>
                    <div className="mt-3.5 flex items-center justify-between gap-3 px-1">
                      <div className="min-w-0 flex-1">
                        <h3 className="line-clamp-1 font-display text-base font-normal leading-snug text-text-primary transition-colors group-hover:text-brand-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-xs text-[#737373] font-sans">
                          {item.subtitle || item.excerpt}
                        </p>
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-[#565656] text-white px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 shadow-xs">
                        {item.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </PageShell>
  );
}
