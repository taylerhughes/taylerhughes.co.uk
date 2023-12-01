import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGaugeHigh,
  faImages,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFile,
  faAddressCard,
  faEnvelope,
  faFileCode,
  faFaceSadCry,
} from "@fortawesome/free-regular-svg-icons";
import FeatureCard, { FeatureCardProps } from "@/components/cards/FeatureCard";
import { Mdx, NextJsSmall } from "@/icons/brands";
import PricingCard, { PricingCardProps } from "@/components/cards/PricingCard";
import LastUpdated from "@/components/LastUpdated";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import s from "./landing.module.css";

const Mesh: FC<{ className?: string }> = ({ className }) => (
  <div className={clsx(className, s.grad)} />
);

const supportingTextMd = "font-[300] dark:text-secondary text-fluid-sm/[1.3]";

const iconProps = {
  className: "w-[1.875rem] h-[1.875rem] dark:text-primary/[0.5]",
};

const featuresListData = (): Array<FeatureCardProps> => [
  {
    title: "MDX blog, no backend needed",
    description:
      "MDX files are the back-end powering your blog. Use the CLI to create posts.",
    saving: "Days",
    icon: <Mdx className="[&>path]:dark:fill-primary/[0.5]" />,
  },
  {
    title: "SEO optimisation",
    description:
      "All pages are configured with on-page SEO & structured data out of the box.",
    saving: "4 hrs",
    icon: <FontAwesomeIcon icon={faChartLine} {...iconProps} />,
  },
  {
    title: "Page Templates",
    description:
      "Home, landing, about, pricing, blog, category, portfolio pages included.",
    saving: "1 week",
    icon: <FontAwesomeIcon icon={faFile} {...iconProps} />,
  },
  {
    title: "Blazing fast",
    description: "Page speed scores of 100.",
    saving: "Days",
    icon: <FontAwesomeIcon icon={faGaugeHigh} {...iconProps} />,
  },
  {
    title: "Image placeholders",
    description: "LQIP placeholders are automatically created for every image.",
    saving: "4 hrs",
    icon: <FontAwesomeIcon icon={faImages} {...iconProps} />,
  },
  {
    title: "Created for EEAT",
    description:
      "Zippy Starter makes it easy for you to be recognised as an author.",
    saving: "1 Day",
    icon: <FontAwesomeIcon icon={faAddressCard} {...iconProps} />,
  },
  {
    title: "Sitemap",
    description:
      "You get a sitemap out of the box, essential for indexing purposes.",
    saving: "2 hrs",
    icon: <FontAwesomeIcon icon={faSitemap} {...iconProps} />,
  },
  {
    title: "Contact form",
    description:
      "Just add your email provider credentials to start receiving emails.",
    saving: "2 hrs",
    icon: <FontAwesomeIcon icon={faEnvelope} {...iconProps} />,
  },
  {
    title: "UI components",
    description:
      "ShadCN is configured to work with Tailwind and a library of UI components.",
    saving: "3 hrs",
    icon: <FontAwesomeIcon icon={faFileCode} {...iconProps} />,
  },
  {
    title: "Dark mode",
    description:
      "Dark mode / light mode is automatic, and applied to all components.",
    saving: "4 hrs",
    icon: <FontAwesomeIcon icon={faFileCode} {...iconProps} />,
  },
  {
    title: "Config",
    description: "PostCSS, Tailwind, TypeScript, eslint, Jest, ContentLayer.",
    saving: "2 hrs",
    icon: <FontAwesomeIcon icon={faFaceSadCry} {...iconProps} />,
  },
  {
    title: "Next.js 14 & App router",
    description:
      "Zippy Starter runs on the new app router of Next.js, fully configured.",
    saving: "2 hrs",
    icon: <NextJsSmall />,
  },
];

const FeaturesList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-x-4 gap-y-6">
      {featuresListData().map((item) => {
        return <FeatureCard key={item.title} {...item} />;
      })}
    </div>
  );
};

const features = [
  "MDX blog",
  "Blog post generator",
  "SEO ready",
  "EEAT focused",
  "Components & templates",
  "MDX Portfolio",
  "Contact form",
  "Example pages",
  "Shadcn, Tailwind, TypeScript & more",
  <span key="last-updated" className="inline-flex gap-x-2 [flex-flow:row_wrap]">
    Lifetime updates <LastUpdated />
  </span>,

  "GPT content generator",
];

const PricingCardData = (): Array<PricingCardProps> => [
  {
    title: "Early Bird Pre-order",
    spots: 20,
    price: 99,
    discountPercentage: 50,
    url: "",
    features: [
      ...features,
      "Exclusive 50% early-bird discount",
      "Beta access on request",
    ],
  },
  {
    title: "Pre-order",
    spots: 60,
    price: 99,
    discountPercentage: 30,
    url: "",
    features: features,
  },
  {
    title: "Get the Roadmap",
    spots: 20,
    price: 199,
    discountPercentage: 30,
    url: "",
    message:
      "Get everything from pre-order, plus exclusive access to all new features, templates, and components, forever.",
  },
];

const PricingCards = () => {
  return (
    <div className="flex flex-wrap gap-4 z-10">
      {PricingCardData().map((item) => {
        return (
          <PricingCard
            className="flex-[1_0_min(100%,240px)]"
            key={item.title}
            {...item}
          />
        );
      })}
    </div>
  );
};

const FAQsData = [
  {
    question: "What is Zippy Starter?",
    answer:
      "Zippy Starter is a collection of bespoke premium templates, MDX blogging functionality, a handy CLI for generating posts, and all the config and functionality needed to build a production grade marketing website, blog, landing page or combination of all three and more. " +
      "With only a few changes you can have a live website up and running and start your marketing journey.",
  },
  {
    question: "What do I get if I pre-order",
    answer:
      "Apart from an exclusive 50% discount, you'll be one of the first to access Zippy Starter when it's available.",
  },
  {
    question: "How do I get access?",
    answer:
      "Immediately after you pre-order you'll receive instructions on how to clone the private repository. If you have any issues reach out to me directly.",
  },
  {
    question: "How does the blog work?",
    answer: `The blog is built with Next.js and MDX. You can write in plain markdown, or use a blend of markdown and JSX, everything gets rendered as HTML. No backend or CMS is required to run this, read more about it on the blog.
             The layout includes a Table of Content's Component that automatically generates an on-page navigation for you from the post headings.
      There's also ample space to add CTAs`,
  },
  {
    question: "Can I re-sell Zippy Starter",
    answer: (
      <>
        <p>
          Yes, but only as part of client work, you can't re-sell or
          redistribute the templates, components, or any of the code, for
          instance as another boilerplate or another component library.
        </p>
        <p>
          See the <Link href="/">license page</Link> for more details.
        </p>
      </>
    ),
  },
  {
    question: "What can I use it for?",
    answer:
      "Build unlimited commercial or personal projects with it. You could build a blog, a portfolio, a marketing website, a SaaS landing page and more. The only limit is your imagination. It's scalable and can be extended.",
  },
];

const FAQs: FC = () => {
  return (
    <div>
      {FAQsData.map((item, index) => {
        return (
          <Accordion key={item.question} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                <div className="[max-width:80ch] [text-wrap:balance] dark:text-secondary text-fluid-sm/[1.3]">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export {
  Mesh,
  supportingTextMd,
  FeaturesList,
  PricingCardData,
  PricingCards,
  FAQs,
};
