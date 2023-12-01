import clsx from "clsx";
import React from "react";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";

import LandingHeader from "@/components/templates/landing1/LandingHeader";

import HowItWorks from "@/components/templates/landing1/HowItWorks";

import {
  Mesh,
  FeaturesList,
  supportingTextMd,
  PricingCards,
  FAQs,
} from "./components";

import s from "./landing.module.css";

export default async function Page() {
  return (
    <div id="main" className="@container">
      <main className="grid grid-cols-12 gap-x-4 gap-[clamp(2rem,20cqw,11rem)]">
        <LandingHeader
          title="Ship blogs & landing pages in a flash"
          subText="Free up days of dev time, easily customize your Nextjs & MDX blog, and choose from a range of visually-stunning templates."
          cta={{
            icon: "/brand/ZippyStarterIcon.png",
            text: "Get Zippy Starter",
            href: "",
          }}
          ctaSubText={
            <>
              🎉 <strong>50% off</strong> for the first 20 customers
            </>
          }
        />
        {/* First testimonial / quote */}
        <section className="col-span-12 relative">
          <Mesh className={clsx(s.grad1, "top-[-26vw]")} />
          <Testimonial
            className="z-10 relative"
            text="Imagine freeing up days of development time, easily customizing your blog with MDX support, and choosing from a range of visually-stunning templates."
          />
        </section>

        {/* How does it work section */}
        <section
          className={clsx(
            "col-span-12 md:col-span-10 md:col-start-2 z-10 grid gap-y-[3rem] md:gap-y-[6rem] relative",
            s.reset,
          )}
        >
          <div
            className={clsx(
              "hidden xs:block w-1 top-60 bottom-60 bg-primary-foreground absolute left-[calc(50%-0.125rem)] z-0",
              s.fade,
            )}
          />

          <HowItWorks />
        </section>
        <section className="relative col-span-12 text-center grid gap-y-9  z-10">
          <h3 className="[text-wrap:balance] text-[clamp(1.8rem,8cqw,2.75rem)]/[1.125] font-bold">
            Build, Market, Grow. <br className="hidden xs:block" />
            All in One with Zippy Starter.
          </h3>
          <p className={clsx(supportingTextMd, "[max-width:50ch] m-auto mb-8")}>
            ZippyStarter brings together everything you need to build your site,
            get your message out there, and focus on what’s most important:
            creating great content.
          </p>
          <FeaturesList />
        </section>
        <section
          id="pricing"
          className=" relative col-span-12 text-center grid gap-y-9"
        >
          <Mesh className="[top:-10vh] right-[0] left-[0] relative" />
          <Image
            className="hidden dark:block justify-self-center"
            src="/brand/ZippyStarterLogo.png"
            width={136}
            height={54}
            alt="ZippyStarter logo"
          />
          <Image
            className="dark:hidden justify-self-center"
            src="/brand/ZippyStarterLogoDark.png"
            width={136}
            height={54}
            alt="ZippyStarter logo"
          />
          <h3 className="[text-wrap:balance] text-[clamp(1.8rem,8cqw,2.75rem)]/[1.125] font-bold">
            One-time purchase. <br />
            Infinite potential.
          </h3>

          <p
            className={clsx(
              supportingTextMd,
              "[max-width:50ch] m-auto [text-wrap:balance]",
            )}
          >
            ZippyStarter is yours for life with just one purchase. Use it for
            unlimited projects, with no extra fees.
          </p>
          <p>
            Up to <strong>50% off</strong> for a limited time 🎉
          </p>
          <PricingCards />
        </section>
        <section className="col-span-12 relative">
          <Testimonial text="ZippyStarter takes the MDX & Next.js setup pain away, leaving you with the authoring experience you  wanted right from the start." />
        </section>
        <section id="faq" className="col-span-12 relative grid gap-y-9">
          <h3 className="[text-wrap:balance] text-[clamp(1.8rem,8cqw,2.75rem)]/[1.125] font-bold">
            Frequently asked questions
          </h3>
          <FAQs />
        </section>
      </main>
    </div>
  );
}
