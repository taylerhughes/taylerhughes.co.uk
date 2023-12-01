"use client";
import { FC } from "react";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Testimonial: FC<{
  text: string;
  person?: { avatarUrl: string; jobTitle?: string; name: string };
  className?: string;
}> = ({ text, person, className }) => {
  const textVariants: Variants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.25,
        type: "spring",
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className={clsx(
        "@container grid justify-center text-center gap-8",
        className,
      )}
    >
      <p className="text-fluid-xl/[1.25] quote max-w-[40ch]">{text}</p>
      {person?.name && person?.avatarUrl ? (
        <>
          <Image
            width={70}
            height={70}
            className="rounded-full justify-self-center"
            alt={`Photo of ${person.name}`}
            src={person.avatarUrl}
          />
          <p className="text-base dark:text-neutral-400">
            {person.name}
            {person.jobTitle ? `, ${person.jobTitle}` : ""}
          </p>
        </>
      ) : null}
    </motion.div>
  );
};

export default Testimonial;
