"use client";
import React, { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { calculateDiscountedPrice, priceFormat } from "@/utils/prices";

export interface PricingCardProps {
  title: string;
  spots: number;
  price: number;
  discountPercentage?: number;
  features?: Array<string | ReactNode>;
  url: string;
  message?: string;
  className?: string;
  disabled?: boolean;
}

const cardVariants: Variants = {
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

const PricingCard: FC<PricingCardProps> = ({
  title,
  spots,
  price,
  discountPercentage,
  features,
  url,
  message,
  className,
  disabled,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className={clsx(
        "bg-neutral-100 dark:bg-neutral-800 rounded-xl text-left relative p-6 grid gap-y-6 content-start",
        className,
      )}
    >
      {spots ? (
        <motion.div
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="absolute right-2 -top-2"
        >
          <Badge title={spots.toString()} variant="destructive">
            {`${spots} spots`}
          </Badge>
        </motion.div>
      ) : null}
      <p className="text-xl font-bold">{title}</p>
      <div>
        {discountPercentage && discountPercentage > 0 ? (
          <>
            <p className="line-through text-neutral-400 font-medium">
              {priceFormat(price)}
            </p>
            <p className="text-4xl font-bold">
              {priceFormat(calculateDiscountedPrice(price, discountPercentage))}
            </p>
          </>
        ) : (
          <p className="text-4xl font-bold">{priceFormat(price)}</p>
        )}
      </div>
      <Link
        className={clsx(buttonVariants({ variant: "cta", size: "lg" }), {
          [buttonVariants({ variant: "tertiary", size: "lg" })]: disabled,
          ["pointer-events-none"]: disabled,
        })}
        href={url}
      >
        Pre-order
      </Link>
      {message ? <p className="text-center">{message}</p> : null}
      {features?.length ? (
        <ul>
          {features.map((feature, index) => {
            return (
              <li
                key={`feature-${index}`}
                className="grid grid-cols-[1rem,1fr] content-start gap-3 font-medium mb-1"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="w-[1rem] h-[1rem] mt-1"
                />
                {feature}
              </li>
            );
          })}
        </ul>
      ) : null}
    </motion.div>
  );
};

export default PricingCard;
