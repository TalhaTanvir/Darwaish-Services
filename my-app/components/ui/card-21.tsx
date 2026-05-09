'use client';

import * as React from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imagePosition?: string;
  location: string;
  flag: string;
  stats: string;
  href: string;
  themeColor: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      imagePosition = "center",
      location,
      flag,
      stats,
      href,
      themeColor,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={{ ["--theme-color" as string]: themeColor } as React.CSSProperties}
        className={cn("group h-full w-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block h-full w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
          aria-label={`Explore details for ${location}`}
          style={{
            boxShadow: "0 0 35px -18px hsl(var(--theme-color) / 0.45)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: imagePosition }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, hsl(var(--theme-color) / 0.86), hsl(var(--theme-color) / 0.54) 32%, transparent 62%)",
            }}
          />

          <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <h3 className="text-3xl font-bold tracking-tight">
              {location} <span className="ml-1 text-2xl">{flag}</span>
            </h3>
            <p className="mt-1 text-sm font-medium text-white/80">{stats}</p>

            <div className="mt-8 flex items-center justify-between rounded-lg border border-white/35 bg-white/15 px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:bg-white/25">
              <span className="text-sm font-semibold tracking-wide">Explore Now</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);

DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
