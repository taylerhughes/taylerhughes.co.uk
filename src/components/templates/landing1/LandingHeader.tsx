"use client";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { supportingTextMd } from "@/src/app/landing/components";

interface LandingHeaderProps {
  title: string;
  subText: string;
  cta: {
    href: string;
    text: string;
    icon: string;
  };
  ctaSubText: ReactNode;
  slot?: ReactNode;
}

const headerVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const LandingHeader: FC<LandingHeaderProps> = ({
  title,
  subText,
  cta,
  ctaSubText,
  slot,
}) => {
  return (
    <motion.header
      variants={headerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="col-span-12 grid md:grid-cols-2 z-10 gap-x-6 gap-y-9"
    >
      <div className="@container grid gap-y-9">
        <h1 className="[text-wrap:balance] text-[clamp(2rem,10cqw,3rem)]/[1.125] font-bold">
          {title}
        </h1>
        <p className={clsx(supportingTextMd, "[text-wrap:balance] -mt-2")}>
          {subText}
        </p>
        <div className="grid gap-y-4">
          <Link
            className={clsx(
              "justify-self-start flex gap-x-2 content-center",
              buttonVariants({ variant: "cta", size: "xl" }),
            )}
            href=""
          >
            {cta.icon ? (
              <Image
                loading="eager"
                src={cta.icon}
                width={26}
                height={26}
                alt=""
              />
            ) : null}
            {cta.text}
          </Link>
          {ctaSubText ? (
            <p className="dark:text-secondary">{ctaSubText}</p>
          ) : null}
        </div>
      </div>
      <div>{slot}</div>
    </motion.header>
  );
};

export default LandingHeader;
