import React, { FC } from "react";
import Link from "next/link";
import ChevronLeft from "@/icons/fontawesome/ChevronLeft";
import { Breadcrumb } from "@/model/breadcrumb";

const BackButton: FC<{ crumb: Breadcrumb }> = ({ crumb }) => {
  return (
    <Link {...crumb} className="flex items-center gap-x-2 dark:text-secondary">
      <ChevronLeft />
      <div>{crumb?.label}</div>
    </Link>
  );
};

export default BackButton;
