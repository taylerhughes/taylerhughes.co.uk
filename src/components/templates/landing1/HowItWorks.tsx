"use client";
import React, { FC } from "react";
import clone from "/public/landing/features/clone.png";
import customize from "/public/landing/features/customise.png";
import blog from "/public/landing/features/blog.png";
import deploy from "/public/landing/features/deploy.png";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HowDoesItWorkText from "@/components/templates/landing1/HowItWorksText";
import { Mesh } from "@/src/app/landing/components";
import { buttonVariants } from "@/components/ui/Button";

const ctaVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      type: "tween",
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const HowItWorks: FC = () => {
  return (
    <>
      <h2 className="text-center text-fluid-xl relative">How does it work?</h2>
      <Mesh className="top-[50vh]" />

      <HowDoesItWorkText
        title="Clone"
        text="Once you gain access to the Github repo, you can clone. Update the handy config file, and run it locally to see it in action."
        image={{
          src: clone,
          alt: "Examples of cloned code",
        }}
        command="git clone zippystarter"
      />
      <HowDoesItWorkText
        title="Customize"
        text="Choose which pages you want, re-mix any templates, use components as you need, and add content to static pages."
        image={{
          src: customize,
          alt: "Examples of customizable templates",
        }}
      />
      <HowDoesItWorkText
        title="Blog"
        text="Make use of the handy CLI to generate blog posts with images, meta data, and categories, then write to your hearts content."
        image={{
          src: blog,
          alt: "Example of CLI used to generate blog posts",
        }}
        command="pnpm post"
        imageClassName="my-6"
      />
      <HowDoesItWorkText
        title="Deploy"
        text="Use the Vercel integration, CLI, or your own pipeline to deploy."
        image={{
          src: deploy,
          alt: "Diagram of deployment",
        }}
        command="git push"
        imageClassName="px-[20%]"
      />
      <motion.div
        className="justify-self-center"
        variants={ctaVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <Link
          className={clsx(buttonVariants({ variant: "cta", size: "xl" }))}
          href=""
        >
          <Image
            className="mr-2"
            src="/brand/ZippyStarterIcon.png"
            width={26}
            height={26}
            alt=""
          />
          Get Zippy Starter
        </Link>
      </motion.div>
    </>
  );
};

export default HowItWorks;
