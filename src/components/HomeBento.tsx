"use client";
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { allWorks } from "contentlayer/generated";
import { Work } from "contentlayer/generated";
import getImageSrc from "@/utils/imagery/getImageSrc";

const config = [
  {
    className:
      "w-full h-full object-cover col-span-12 xs:col-span-5 row-span-2 rounded-xl",
    width: 503,
    height: 540,
    project: "Sound Scape",
    alt: "",
    sizes: "100vw, (min-width: 440px) 400px",
  },
  {
    className: "w-full h-full object-cover col-span-6 xs:col-span-4 rounded-xl",
    width: 400,
    height: 260,
    project: "VR World",
    alt: "",
    sizes: "50vw, (min-width: 440px) 400px",
  },
  {
    className: "w-full h-full object-cover col-span-6 xs:col-span-3 rounded-xl",
    width: 400,
    height: 260,
    project: "Dev Suite",
    alt: "",
    sizes: "50vw, (min-width: 440px) 400px",
  },
  {
    className:
      "w-full h-full object-cover col-span-6 row-start-4 xs:row-start-auto xs:col-span-4 rounded-xl",
    width: 400,
    height: 260,
    project: "Tech Forward",
    alt: "",
    sizes: "50vw, (min-width: 440px) 400px",
  },
  {
    className: "w-full h-full object-cover col-span-6 xs:col-span-3 rounded-xl",
    width: 400,
    height: 260,
    project: "Route Finder",
    alt: "",
    sizes: "50vw, (min-width: 440px) 400px",
  },
];

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

const getBentoImage = (index: number) => {
  if (allWorks.length === 0) {
    return null;
  }

  const work: Partial<Work> | undefined = allWorks.find(
    (work) => work.client === config[index].project.split(" ").join(""),
  );

  if (!work || !work.featured_image) {
    return null;
  }

  return {
    imageProps: {
      src: getImageSrc(
        work.featured_image.url,
        config[index].width,
        config[index].height,
      ),
      ...config[index],
    },
    linkProps: {
      href: work._raw?.flattenedPath ?? "",
      className: config[index].className,
      "aria-label": `Read more about the ${config[index].project} project`,
    },
  };
};

const HomeBento: FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const bentoImage = getBentoImage(index);
        if (!bentoImage) {
          return null;
        }
        return (
          <Link {...bentoImage.linkProps} key={index}>
            <Image {...bentoImage.imageProps} />
          </Link>
        );
      })}
    </motion.div>
  );
};

export default HomeBento;
