"use client";
import { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export interface FeatureCardProps {
  title: string;
  description: string;
  saving: string;
  icon: ReactNode;
}

const cardVariants: Variants = {
  offscreen: {
    y: 20,
    scale: 0.75,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4,
    },
  },
};

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  saving,
  icon,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-neutral-100 dark:bg-neutral-800 rounded-xl grid gap-y-3 justify-items-center content-start items-start relative p-[clamp(1rem,3cqw,2rem)] text-[1rem]"
    >
      {saving ? (
        <Badge
          className="absolute right-2 -top-2 rotate-3"
          title={saving}
          variant="success"
        >
          {`Save ${saving}`}
        </Badge>
      ) : null}
      <div>{icon}</div>
      <p className="font-bold">{title}</p>
      <p className="dark:text-secondary">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
