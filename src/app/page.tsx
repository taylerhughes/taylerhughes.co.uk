import { compareDesc } from "date-fns";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { allBlogs } from "contentlayer/generated";
import NextImg from "@/components/NextImg";
import { H4 } from "@/components/Headings";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import LogoGroup from "@/components/LogoGroup";
import BlogFeed from "@/components/BlogFeed";
import { buttonVariants } from "@/components/ui/Button";
import ChevronRight from "@/icons/fontawesome/ChevronRight";
import HomeBento from "@/components/HomeBento";

export default function Home() {
  const sortedPosts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const getCategoryBlogs = sortedPosts.filter(
    (post) => post._raw.sourceFileName !== "index.mdx",
  );

  return (
    <div id="main" className="@container">
      <div className="grid grid-cols-12 gap-x-4 gap-[clamp(2rem,20cqw,11rem)]">
        <header className="col-span-12 md:col-span-11 grid grid-cols-[subgrid]">
          <div className="col-span-11 grid gap-y-[clamp(2rem,6cqw,3rem)] grid-cols-[inherit]">
            <NextImg
              loading="eager"
              className="col-span-2 w-[5.625rem] h-[5.625rem] rounded-full"
              src="/authors/randy.jpg"
              alt="Photo of Randy Smith"
            />
            <h1 className="font-bold dark:text-secondary text-fluid-2xl/[1] col-span-11">
              I don’t follow trends <br />
              <span className="dark:text-tertiary">I create them</span>
            </h1>
            <div className="@container grid gap-[inherit] col-span-11 md:col-span-6">
              <p className="text-fluid-md/[1.3] font-[300] dark:text-secondary">
                Randy is a Next.js blog starter kit that includes a full suite
                of templates and components so you too, can build some dope
                shit.
              </p>

              <Link
                className={clsx(
                  "justify-self-start",
                  buttonVariants({ variant: "cta", size: "xl" }),
                )}
                href="/contact"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-[inherit] col-span-12 gap-4">
          <div className="col-span-12 flex justify-between items-baseline">
            <H4 className="col-span-12 text-fluid-lg/[1.25] dark:text-secondary">
              Selected work
            </H4>
            <Link
              className={clsx(
                "gap-2",
                buttonVariants({ variant: "outline", size: "lg" }),
              )}
              href="/work"
            >
              View all
              <ChevronRight />
            </Link>
          </div>
          <HomeBento className="grid grid-cols-12 col-span-12 gap-[inherit]" />
        </div>
        <Testimonial
          className="col-span-12"
          person={{
            name: "Jenny Doe",
            jobTitle: "Project Manager at TechCorp",
            avatarUrl: "/photos/testimonials/test2.jpg",
          }}
          text="Working with Randy has been an absolute pleasure. His expertise in web development and design is unparalleled. He always delivered on time and exceeded expectations. I can't recommend him highly enough!"
        />
        <section className="col-span-12 grid grid-cols-[inherit] gap-x-4 gap-y-6">
          <div className="col-span-12 flex justify-between items-baseline">
            <H4 className="text-fluid-lg/[1.25] dark:text-secondary">
              Latest posts
            </H4>
            <Link
              className={clsx(
                "gap-2",
                buttonVariants({ variant: "outline", size: "lg" }),
              )}
              href="/blog"
            >
              View all
              <ChevronRight />
            </Link>
          </div>
          <div className="grid col-span-12 grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] sm:grid-cols-[repeat(auto-fill,minmax(min(100%,230px),1fr))] gap-x-[inherit] gap-y-8">
            <BlogFeed blogs={getCategoryBlogs} category="coding" />
          </div>
        </section>
        <section className="col-span-12">
          <Contact />
        </section>
        <section className="col-span-12">
          <Testimonial
            person={{
              name: "Jane Doe",
              jobTitle: "Project Manager at TechCorp",
              avatarUrl: "/photos/testimonials/test1.jpg",
            }}
            text="Randy is a true professional. Their code is clean, efficient, and scalable. They have an eye for design and a knack for solving complex problems with simple solutions. A valuable asset to any team!"
          />
        </section>
        <section className="col-span-12">
          <LogoGroup
            title="Technologies"
            description="My favourite technologies include"
          />
        </section>
      </div>
    </div>
  );
}
