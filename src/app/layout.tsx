import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import React from "react";
import clsx from "clsx";
import { formatUrl } from "@/contentlayer/utils";

import Container from "@/components/Container";
import MainHeader from "@/components/headers/MainHeader";
import MobileHeader from "@/components/headers/MobileHeader";
import Footer from "@/components/Footer";
import { DOMAIN as baseUrl } from "@/utils/constants";

const inter = Inter_Tight({ subsets: ["latin"] });

const title = "The personal portfolio of Randy Smith";
const description = "Randy is a designer and developer, based in La La Land";

const DOMAIN =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : baseUrl;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: DOMAIN,
    // Add your site opengraph image here, otherwise you can use the og/ version
    images: [formatUrl(`og?title=${title}`, DOMAIN)],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // Add your site opengraph image here, otherwise you can use the og/ version
    images: [formatUrl(`og?title=${title}`, DOMAIN)],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "grid gap-y-[clamp(4rem,16cqw,13.5rem)] grid-rows-[auto,1fr,auto] h-[100vh]",
        )}
      >
        <Container component="header">
          <div className="col-start-2 grid justify-between grid-flow-col pt-8 items-baseline">
            <MainHeader />
            <MobileHeader />
          </div>
        </Container>
        <Container className="[&>#main]:col-start-2 [&>#main]:col-end-3">
          {children}
        </Container>
        <Container>
          <Footer className="col-start-2 grid" />
        </Container>
      </body>
    </html>
  );
}
