import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/icons/social";

import { buttonVariants } from "@/components/ui/Button";

const iconProps = {
  className:
    "fill-current dark:text-secondary w-[clamp(1rem,6cqw,2.5rem)] h-[clamp(1rem,6cqw,2.5rem)]",
};

const Contact: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={clsx(
        "text-center grid gap-[clamp(1.5rem,8cqw,3rem)] text-secondary",
        className,
      )}
    >
      <p className="text-fluid-xxl/[1.1] font-bold">
        Got a question? <br />
        <span className="font-bold dark:text-tertiary">Reach out</span>
      </p>
      <p className="max-w-[50ch] m-auto text-fluid-sm/[1.5] -mt-3">
        Send me an email or connect with me through one of my social media
        accounts.
      </p>
      <div className="flex flex-wrap gap-[clamp(1.5rem,10cqw,4rem)] place-content-center">
        <XIcon {...iconProps} ariaLabel="Follow me on X" href="https://x.com" />
        <GithubIcon
          {...iconProps}
          ariaLabel="Follow me on Github"
          href="https://github.com"
        />
        <InstagramIcon
          {...iconProps}
          ariaLabel="Follow me on Github"
          href="https://instagram.com"
        />
        <LinkedInIcon
          {...iconProps}
          ariaLabel="Follow me on Github"
          href="https://linkedin.com"
        />
        <FacebookIcon
          {...iconProps}
          ariaLabel="Follow me on Github"
          href="https://facebook.com"
        />
      </div>

      <Link
        className={clsx(
          "m-auto",
          buttonVariants({ variant: "cta", size: "xl" }),
        )}
        href="/contact"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default Contact;
