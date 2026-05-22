"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MenuToggleProps = React.AriaAttributes & {
  open: boolean;
  className?: string;
  duration?: number;
  fill?: string;
  id?: string;
  role?: React.AriaRole;
  stroke?: string;
  strokeLinecap?: React.SVGProps<SVGSVGElement>["strokeLinecap"];
  strokeLinejoin?: React.SVGProps<SVGSVGElement>["strokeLinejoin"];
  strokeWidth?: string | number;
};

export function MenuToggleIcon({
  open,
  className,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2.5,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  duration = 0.28,
  ...props
}: MenuToggleProps) {
  const transition = { duration, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.svg
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      viewBox="0 0 24 24"
      className={cn("overflow-visible", className)}
      initial={false}
      animate={open ? "open" : "closed"}
      {...props}
    >
      <motion.line
        x1="3"
        y1="6.5"
        x2="21"
        y2="6.5"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 5.5 },
        }}
        style={{ originX: "50%", originY: "50%" }}
        transition={transition}
      />
      <motion.line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        variants={{
          closed: { opacity: 1, scaleX: 1 },
          open: { opacity: 0, scaleX: 0.25 },
        }}
        style={{ originX: "50%", originY: "50%" }}
        transition={transition}
      />
      <motion.line
        x1="3"
        y1="17.5"
        x2="21"
        y2="17.5"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -5.5 },
        }}
        style={{ originX: "50%", originY: "50%" }}
        transition={transition}
      />
    </motion.svg>
  );
}
