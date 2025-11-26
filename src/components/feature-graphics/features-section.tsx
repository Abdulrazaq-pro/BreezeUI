"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Markdown from "react-markdown";

// Utility function to combine class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// UTM parameter types
const UTMTags = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

function createHref(
  path: string,
  domain: string,
  params: Record<string, string>
): string {
  const url = new URL(path, `https://${domain}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value);
  });
  return url.toString();
}

function ExpandingArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn(
        "ml-1 transition-transform duration-200 group-hover:translate-x-1",
        className
      )}
    />
  );
}

export function FeaturesSection({
  domain,
  utmParams,
}: {
  domain: string;
  utmParams: Partial<Record<(typeof UTMTags)[number], string>>;
}) {
  return (
    <div className="mt-20">
      <div className="mx-auto w-full max-w-xl px-4 text-center">
        <div className="mx-auto flex h-7 w-fit items-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 text-xs text-neutral-800 dark:text-neutral-300">
          What is BreezeUI?
        </div>

        <h2 className="font-display mt-2 text-balance text-3xl font-medium text-neutral-900 dark:text-white">
          A modern component toolkit designed for speed and beautiful interfaces
        </h2>

        <p className="mt-3 text-pretty text-lg text-neutral-500 dark:text-neutral-400">
          BreezeUI gives developers access to sleek, customizable, and
          production-ready UI components built with React, Tailwind CSS, and
          Radix UI. Build faster. Design smarter. Breeze effortlessly.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-14 grid w-full max-w-screen-lg grid-cols-1 px-4 sm:grid-cols-2">
        <div className="contents divide-neutral-200 dark:divide-neutral-700 max-sm:divide-y sm:divide-x">
          
          {/* Feature 1 */}
          <FeatureCard
            title="Fully Customizable Components"
            description="Build stunning interfaces with BreezeUI’s flexible and theme-ready components. Every element is designed to be responsive, accessible, and easy to override using Tailwind CSS or your own design system."
            linkText="See customization examples"
          >
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="UI components"
              className="h-full w-full object-cover rounded-xl"
            />
          </FeatureCard>

          {/* Feature 2 */}
          <FeatureCard
            title="Interactive Component Playground"
            description="Experiment with components directly inside the documentation. Modify props, adjust themes, test responsiveness, and preview changes instantly."
            linkText="Try the playground"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
              alt="Code editor preview"
              className="h-full w-full object-cover rounded-xl"
            />
          </FeatureCard>
        </div>

        {/* Feature 3 (Wide) */}
        <FeatureCard
          className="border-y border-neutral-200 dark:border-neutral-700 pt-12 sm:col-span-2"
          graphicClassName="sm:h-96"
          title="Beautiful Component Showcase"
          description="Browse a polished library of BreezeUI components—buttons, navbars, forms, tables, cards, modals, and advanced UI layouts. All clean. All consistent."
          linkText="Explore gallery"
        >
          <div className="group block size-full">
            <div className="size-full transition-[filter,opacity] duration-300 group-hover:opacity-70 group-hover:blur-[3px]">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="UI gallery"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center text-sm font-medium text-slate-900 dark:text-white">
                View gallery <ExpandingArrow className="size-4" />
              </span>
            </div>
          </div>
        </FeatureCard>

        <div className="contents divide-neutral-200 dark:divide-neutral-700 max-sm:divide-y sm:divide-x [&>*]:border-t [&>*]:border-neutral-200 dark:[&>*]:border-neutral-700">
          
          {/* Feature 4 */}
          <FeatureCard
            title="Advanced UI Primitives"
            description="Built on top of Radix UI primitives—drawers, menus, dialogs, sliders, and more. BreezeUI ensures accessibility, ARIA compliance, and perfect keyboard navigation."
            linkText="View primitives"
          >
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159"
              alt="UI primitives"
              className="h-full w-full object-cover rounded-xl"
            />
          </FeatureCard>

          {/* Feature 5 */}
          <FeatureCard
            title="Built for Developer Productivity"
            description="Enjoy TypeScript support, consistent props, and intuitive component APIs. BreezeUI helps teams ship faster and build UI systems with zero friction."
            linkText="Learn more"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team collaboration"
              className="h-full w-full object-cover rounded-xl"
            />
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  linkText,
  href,
  children,
  className,
  graphicClassName,
}: PropsWithChildren<{
  title: string;
  description: string;
  linkText: string;
  href?: string;
  className?: string;
  graphicClassName?: string;
}>) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-10 px-4 py-14 sm:px-12 transition-colors duration-300",
        className
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 top-1/3 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[50px]",
          "bg-[conic-gradient(from_270deg,#0CB3F4,#0C81EB,transparent,transparent)]"
        )}
      />
      <div
        className={cn(
          "relative h-64 overflow-hidden sm:h-[302px]",
          graphicClassName
        )}
      >
        {children}
      </div>

      <div className="relative flex flex-col">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
          {title}
        </h3>

        <Markdown
          components={{
            a: ({ children, href }) => {
              if (!href) return null;
              return (
                <Link
                  href={href}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {children}
                </Link>
              );
            },
          }}
        >
          {description}
        </Markdown>
      </div>
    </div>
  );
}
