"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { supportingTextMd } from "@/src/app/landing/components";
import s from "@/src/app/landing/landing.module.css";

const variants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const HowDoesItWorkText: FC<
  React.PropsWithChildren<{
    title: string;
    text: string;
    image: { src: StaticImageData; alt: string };
    command?: string;
    imageClassName?: string;
  }>
> = ({ command, title, image, text, imageClassName }) => (
  <motion.div
    variants={variants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
    className={clsx(
      "relative grid xs:grid-cols-2 gap-x-12 md:gap-x-32 z-10 gap-y-6",
      s.section,
    )}
  >
    <div className={clsx("relative", s.circle)}>
      <div className="@container grid content-center gap-y-2">
        <h3 className={clsx("text-fluid-md font-[900]")}>{title}</h3>
        <p className={supportingTextMd}>{text}</p>
        {command ? (
          <p className="font-mono text-xs shadow-sm mt-2">{command}</p>
        ) : null}
      </div>
    </div>
    <Image
      src={image.src}
      alt={image.alt}
      className={clsx(imageClassName, "self-center")}
    />
  </motion.div>
);

export default HowDoesItWorkText;
