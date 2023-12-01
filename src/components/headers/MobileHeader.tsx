"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/src/data/links";
import Container from "@/components/Container";

const MobileHeader: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 0.75,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.15,
        duration: 0.75,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setMobileNavOpen(false);
    }
  }, [pathname]);

  return (
    <div className="overflow-y-hidden md:hidden">
      <motion.nav
        className="flex justify-between"
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <div className="menu-container">
          <motion.button
            className="p-4 -mt-4 -mr-4"
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            Menu
          </motion.button>
        </div>
        <motion.div
          variants={mobileMenuVariant}
          className="fixed top-0 left-0 h-[100vh] w-full grid z-10 bg-bgLight dark:bg-bgDark"
        >
          <Container className="content-start pt-8 items-baseline">
            <Link
              className="col-start-2 text-2xl font-light dark:text-secondary row-start-1 row-end-2 justify-self-start"
              href="/"
            >
              Randy.
            </Link>
            <motion.button
              className="col-start-2 justify-self-end row-start-1 row-end-2 p-4 -mt-4 -mr-4"
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
              Close
            </motion.button>
            <motion.ul variants={ulVariant} className="col-start-2 list-none">
              {links.map((navItem) => (
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  key={navItem.href}
                  className="text-2xl py-2"
                >
                  <motion.div variants={liVariant} className="grid">
                    <Link href={navItem.href}>{navItem.label}</Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </Container>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default MobileHeader;
