import clsx from "clsx";
import React from "react";
import { Metadata } from "next";
import NextImg from "@/components/NextImg";
import workHistory from "@/src/data/workHistory";
import { H4 } from "@/components/Headings";
import LogoGroup from "@/components/LogoGroup";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import cropParams from "@/utils/cropParams";

export const metadata: Metadata = {
  title: "About Randy",
  description: "Learn all about Randy Smith, the man, the myth, the legend.",
};

export default function AboutPage() {
  return (
    <div id="main" className="@container">
      <div className="grid grid-cols-12 gap-x-4 gap-[clamp(2rem,12cqw,3rem)]">
        <header className="col-span-12 md:col-span-11 grid gap-[inherit]">
          <h1 className="font-bold text-secondary text-fluid-2xl/[1]">
            The missing piece <br />
            <span className="dark:text-tertiary">
              you've been <br />
              searching for
            </span>
          </h1>
        </header>
        <div className="@container col-span-12 md:col-start-6 md:col-span-6 my-[clamp(1rem,4cqw,3rem)]">
          <p className="text-fluid-md/[1.3] font-[300]">
            Randy defies the constraints of traditional roles in design and
            development. His skill set is as varied as it is deep, making him
            the versatile talent that's often missing in specialized teams.
          </p>
        </div>
        <div className="grid grid-cols-[inherit] col-span-12 gap-4">
          <NextImg
            loading="eager"
            className="aspect-[2/1] object-cover col-span-12"
            src={cropParams(
              "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e",
              1232,
              620,
              2,
              "crop=focalpoint&fp-x=0.5&fp-y=0.28&fp-z=1.1",
            )}
            width={1232}
            height={620}
            alt=""
          />
          <NextImg
            className="object-cover relative col-span-7 md:col-span-4 md:order-2 h-32 md:h-[17.815rem]"
            src="/photos/boy1.jpg"
            fill
            alt=""
          />
          <NextImg
            className="object-cover relative col-span-5 md:col-span-3 md:order-2 h-32 md:h-[17.815rem]"
            src="/photos/boy2.jpg"
            fill
            alt=""
          />
          <div className="@container col-span-12 md:col-span-5 grid md:order-1">
            <p className="self-end text-fluid-md/[1.3] font-[300]">
              From the moment I could hold a pencil, I was sketching. Not just
              random doodles, but plans—plans for websites, apps, and all sorts
              of designs. I wasn't just daydreaming; I was laying the foundation
              for my future.
            </p>
          </div>
        </div>
        <main
          className={clsx(
            "order-2 md:order-1 grid col-span-12 text-xl [&>*]:mb-6 [&>p]:[max-width:53ch]",
          )}
        >
          <div className="grid md:grid-cols-12 gap-6 my-[clamp(2rem,12cqw,11rem)]">
            <H4 className="md:sticky top-4 -mt-4 self-start text-fluid-xxl/[1.25] md:col-span-5 dark:text-secondary">
              Work history
            </H4>
            <div className="grid gap-y-8 md:col-span-7">
              {workHistory.map((item, index) => {
                return (
                  <div
                    key={index + item.title}
                    className="border-b border-0 border-neutral-700 pb-8"
                  >
                    <p className="text-neutral-500 text-base mb-3">
                      {item.year}
                    </p>
                    <H4 className="mb-1">{item.title}</H4>
                    <p className="text-neutral-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <LogoGroup
            title="Technologies"
            description="My favourite technologies include"
            className="my-[clamp(2rem,12cqw,11rem)]"
          />
          <Testimonial
            className="my-[clamp(2rem,12cqw,11rem)]"
            person={{
              name: "Jane Doe",
              jobTitle: "Project Manager at TechCorp",
              avatarUrl: "/photos/testimonials/test1.jpg",
            }}
            text="Randy is a true professional. Their code is clean, efficient, and scalable. They have an eye for design and a knack for solving complex problems with simple solutions. A valuable asset to any team!"
          />
          <Contact className="my-[clamp(2rem,12cqw,11rem)]" />
        </main>
      </div>
    </div>
  );
}
