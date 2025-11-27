"use client";

import React from "react";

// Extend window type so TS stops complaining
declare global {
  interface Window {
    datafast?: (goal: string) => void;
  }
}

interface TrackedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  goal: string;
  children: React.ReactNode;
}

const TrackedLink = ({ goal, children, ...props }: TrackedLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && typeof window.datafast === "function") {
      console.log("TrackedLink clicked:", goal);
      window.datafast(goal);
    }

    props.onClick?.(e);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TrackedLink;
