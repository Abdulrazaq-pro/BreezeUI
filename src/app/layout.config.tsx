import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const url = process.env.NEXT_FRONTEND_URL;''


export const baseOptions = {
// export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/Abdulrazaq-pro/breezeUI",

  nav: {
    title: (
      <>
        <Image
          className="rounded-xs"
          src={`/breeze.png`}
          alt="BreezeUI"
          width={17}
          height={17}
        />
        BreezeUI
      </>
    ),
  },

  socials: {
    twitter: "https://x.com/Ken_editts",
    linkedin: "https://www.linkedin.com/in/abdulrazaqme",
    github: "https://github.com/Abdulrazaq-pro",
    breezeui_github: "https://github.com/Abdulrazaq-pro/breezeUI",
  },

  // see https://fumadocs.dev/docs/ui/navigation/links
};

