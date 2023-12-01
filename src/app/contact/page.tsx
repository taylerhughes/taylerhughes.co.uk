import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/icons/social";
import NextImg from "@/components/NextImg";

const iconProps = {
  className: "fill-current dark:text-secondary w-[1.5rem] h-[1.5rem]",
};

export const metadata: Metadata = {
  title: "Contact Randy Smith",
  description: "Need a quote? Want to say hello? Get in touch.",
};

export default function Page() {
  return (
    <div id="main" className="@container">
      <main className="grid grid-cols-12 gap-x-4 gap-[clamp(2rem,20cqw,11rem)]">
        <header className="col-span-12 md:col-span-11 grid grid-cols-[subgrid]">
          <div className="col-span-11 grid gap-y-[clamp(2rem,6cqw,3rem)] grid-cols-[inherit]">
            <h1 className="font-bold dark:text-secondary text-fluid-2xl/[1] col-span-11">
              Get in touch <br />
              <span className="dark:text-tertiary">and let's talk</span>
            </h1>
            <div className="@container grid gap-[inherit] col-span-11 md:col-span-6">
              <p className="text-fluid-md/[1.3] font-[300] dark:text-secondary">
                I usually respond within 48hrs
              </p>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-[inherit] col-span-12 gap-4 gap-y-10">
          <ContactForm className="col-span-12 md:col-span-8" />
          <aside className="@container order-1 col-span-12 md:col-start-10 md:col-span-3 md:sticky md:top-8 self-start grid gap-8 mb-[clamp(1rem,10cqw,6rem)] md:mb-0">
            <NextImg
              className="rounded-full w-[3rem] h-[3rem] md:w-[3.75rem] md:h-[3.75rem]"
              src="/authors/randy.jpg"
              alt="Photo of the author, Randy Smith"
            />
            <div>
              <p className="font-bold">Telephone</p>
              <p className="dark:text-tertiary">01253 123456</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p className="dark:text-tertiary">info@yourname.com</p>
            </div>
            <div>
              <p className="font-bold">Address</p>
              <address className="dark:text-tertiary [font-style:normal]">
                <p>123 Letsby Avenue</p>
                <p>Your Town</p>
                <p>Your county/state</p>
                <p>Your postcode/zip</p>
              </address>
            </div>
            <div>
              <p className="font-bold mb-2">Social networks</p>
              <div className="flex flex-wrap gap-[clamp(1.5rem,10cqw,4rem)]">
                <XIcon {...iconProps} href="https://x.com" />
                <GithubIcon {...iconProps} href="https://github.com" />
                <InstagramIcon {...iconProps} href="https://instagram.com" />
                <LinkedInIcon {...iconProps} href="https://linkedin.com" />
                <FacebookIcon {...iconProps} href="https://facebook.com" />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
