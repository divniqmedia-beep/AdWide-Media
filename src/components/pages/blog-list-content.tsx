"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HeroBlurText } from "@/components/ui/hero-blur-text";
import { colorClasses as c } from "@/lib/colors";
import { blogCategories, type BlogPost } from "@/lib/blog-data";

export function BlogListContent({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return posts;
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <div className={`relative px-4 pb-24 sm:px-6 lg:px-10 ${c.bg.page}`}>
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Category Pills Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 pt-2 gap-2 scrollbar-none">
          {blogCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#2b2b2b] text-white shadow-sm"
                    : "bg-white/80 text-text-muted hover:bg-white hover:text-text-primary border border-border-default"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Giant Watermark Title - Half Hidden Under Cards */}
        <div className="relative -mb-10 sm:-mb-20 lg:-mb-14 mt-12 sm:mt-16 flex justify-center select-none pointer-events-none z-0">
          <span
            aria-hidden
            className="font-display text-[clamp(4.5rem,13vw,11.5rem)] font-normal leading-none tracking-normal text-transparent bg-clip-text select-none text-center whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.08) 58%, rgba(0, 0, 0, 0.01) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Blog Insights
          </span>
        </div>

        {/* Blog Cards Grid - Matching Reference Design */}
        <div className="relative z-10">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="group block cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Card Image Container */}
                    <div className="relative aspect-[4/4.8] sm:aspect-[4/4.6] w-full overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#161616] shadow-sm ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-xl">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        priority={index < 3}
                      />
                    </div>

                    {/* Card Bottom Meta (Title with HeroBlurText, Subtitle & Read Time Pill) */}
                    <div className="mt-4 sm:mt-5 flex items-center justify-between gap-3.5 px-1">
                      <div className="min-w-0 flex-1">
                        <HeroBlurText
                          text={post.title}
                          as="h3"
                          trigger="view"
                          delay={60}
                          stepDuration={0.28}
                          blur={8}
                          distance={16}
                          className="font-display text-base sm:text-lg font-normal text-[#111111] leading-snug line-clamp-1 transition-colors group-hover:text-brand-primary"
                        />
                        <p className="mt-1 text-xs sm:text-[0.8125rem] text-[#737373] line-clamp-1 font-sans">
                          {post.subtitle || post.excerpt}
                        </p>
                      </div>

                      {/* Read Time Badge matching reference image */}
                      <span className="inline-flex items-center justify-center rounded-full bg-[#565656] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-medium whitespace-nowrap shrink-0 shadow-xs transition-colors group-hover:bg-[#484848]">
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Newsletter CTA Box */}
        <div className="mt-20 sm:mt-24 overflow-hidden rounded-[2.25rem] bg-[#141414] p-8 sm:p-12 text-center text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            (The Growth Dispatch)
          </p>
          <h3 className="mt-3 font-display text-2xl font-normal sm:text-3xl lg:text-4xl">
            Get our weekly D2C growth breakdowns
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/70">
            Real creative frameworks, algorithm changes, and campaign teardowns delivered straight
            to your inbox every Tuesday morning.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to Adwide Insights!");
            }}
            className="mx-auto mt-7 flex max-w-md flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="h-12 w-full rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder-white/40 backdrop-blur-xs outline-none transition-colors focus:border-brand-primary"
            />
            <button
              type="submit"
              className="h-12 w-full sm:w-auto shrink-0 rounded-full bg-header-cta px-7 text-sm font-semibold text-white shadow-md transition-all hover:brightness-105 active:scale-95 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
