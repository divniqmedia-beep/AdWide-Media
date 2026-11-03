import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { BlogHero } from "@/components/pages/blog-hero";
import { BlogListContent } from "@/components/pages/blog-list-content";
import { brand } from "@/lib/site-content";
import { getAllPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: `Blog & Insights | ${brand.name}`,
  description:
    "Ideas, stories, and growth strategies from the creative frontlines covering brand storytelling, viral short-form, UGC, and performance marketing.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageShell>
      <BlogHero />
      <BlogListContent posts={posts} />
    </PageShell>
  );
}
