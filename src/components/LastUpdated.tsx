"use client";
import { FC, useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/Badge";
import { Skeleton } from "@/components/ui";

const LastUpdated: FC = () => {
  const [lastUpdated, setLastUpdated] = useState(null);
  useEffect(() => {
    const getLastUpdatedTime = async () => {
      const res = await fetch(`/api/updated/`);
      if (res.ok) {
        const lastUpdatedDate = await res.json();
        setLastUpdated(lastUpdatedDate);
      }
    };
    getLastUpdatedTime();
  }, []);

  if (lastUpdated) {
    const dateOfLastUpdate = new Date(lastUpdated);

    const formattedDistance = formatDistanceToNow(dateOfLastUpdate);
    const timeAgo = formattedDistance.replace(/^about /, "");

    return <Badge variant="success">Updated {timeAgo} ago </Badge>;
  }

  return (
    <Skeleton className="w-10 h-[22px] dark:!bg-neutral-500 items-center rounded-xl" />
  );
};

export default LastUpdated;
