import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "../layout.config";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { Zap, Palette, Kanban, Book, ComponentIcon } from "lucide-react";
import TrackedLink from "@/components/other/TracedLink";
import { Banner } from "fumadocs-ui/components/banner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-200">
      <Banner variant="rainbow">
        {" "}
        <Link
          href="https://pro.BreezeUI.com/blocks"
          className="font-medium"
          target="_blank"
        >
          {" "}
          Create stunning websites in minutes with BreezeUI Blocks —{" "}
          <span className="underline">Discover more</span>{" "}
        </Link>{" "}
      </Banner>
      <HomeLayout
        {...baseOptions}
        links={[
          {
            type: "menu",
            on: "menu",
            text: "Documentation",
            items: [
              {
                text: "Getting Started",
                url: "/docs/getting-started/introduction",
                icon: <Book />,
              },
              {
                text: "Components",
                url: "/docs/components/contact",
                // http://localhost:3000/docs/components/contact
                icon: <ComponentIcon />,
              },
            ],
          },
          {
            type: "custom",
            on: "nav",
            children: (
              <NavbarMenu>
                <NavbarMenuTrigger>
                  <Link href="/docs/getting-started/introduction">
                    Documentation
                  </Link>
                </NavbarMenuTrigger>
                <NavbarMenuContent className="text-[15px]">
                  <NavbarMenuLink
                    href="/docs/getting-started/introduction"
                    className="md:row-span-2"
                  >
                    <div className="-mx-3 -mt-3">
                      <Image
                        src="/images/header.png"
                        width={500}
                        height={200}
                        layout="responsive"
                        alt="Perview"
                        className="rounded-t-lg object-cover"
                        style={{
                          maskImage:
                            "linear-gradient(to bottom,white 60%,transparent)",
                        }}
                      />
                    </div>
                    <p className="font-medium">Getting Started</p>
                    <p className="text-muted-foreground text-sm">
                      Introduction and installation guide for BreezeUI.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/getting-started/introduction"
                    className="lg:col-start-2"
                  >
                    <Zap className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                    <p className="font-medium">Introduction</p>
                    <p className="text-muted-foreground text-sm">
                      Introduction to BreezeUI .
                    </p>
                  </NavbarMenuLink>
                  <NavbarMenuLink
                    href="/docs/getting-started/Installation"
                    className="lg:col-start-3 lg:row-start-1"
                  >
                    <Palette className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                    <p className="font-medium">Setup</p>
                    <p className="text-muted-foreground text-sm">
                      How to set up BreezeUI in your project.
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href="/docs/components/contact"
                    className="lg:col-start-2"
                  >
                    <ComponentIcon className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                    <p className="font-medium">Components</p>
                    <p className="text-muted-foreground text-sm">
                      A complete set of base components projects. Copy, adapt,
                      and personalize them.
                    </p>
                  </NavbarMenuLink>



                  <NavbarMenuLink
                    href={baseOptions.socials.breezeui_github}
                    className="lg:col-start-3 lg:row-start-2"
                  >
                    <Kanban className="bg-primary text-primary-foreground p-1 mb-2 rounded-md" />
                    <p className="font-medium">Github</p>
                    <p className="text-muted-foreground text-sm">
                      Check our github
                    </p>
                  </NavbarMenuLink>
                </NavbarMenuContent>
              </NavbarMenu>
            ),
          },
          // {
          //   text: "Blocks",
          //   url: "https://pro.BreezeUI.com/blocks",
          //   secondary: false,
          // },
          // {
          //   text: "Themes",
          //   url: "https://pro.BreezeUI.com/themes",
          //   secondary: false,
          // },
          {
            text: "Templates",
            url: "/template-commingsoon",
            secondary: false,
          },
          {
            type: "custom",
            children: (
              <TooltipProvider>
                <div className="flex ">
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant="secondary"
                        className="rounded-full"
                        asChild
                      >
                        <TrackedLink
                          href="https://www.linkedin.com/in/abdulrazaqme"
                          className="font-medium"
                          target="_blank"
                          goal="sponsor_ikiform_click"
                        >
                          <Image
                            src="https://www.linkedin.com/favicon.ico"
                            alt="ikiform.com"
                            width={17}
                            height={17}
                          />
                          https://www.linkedin.com/in/abdulrazaqme
                        </TrackedLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>follow me on linkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant="secondary"
                        className="rounded-full"
                        asChild
                      >
                        <TrackedLink
                          href="https://x.com/Ken_editts"
                          className="font-medium"
                          target="_blank"
                          goal="sponsor_ikiform_click"
                        >
                          <Image
                            src="https://www.x.com/favicon.ico"
                            alt="ikiform.com"
                            width={17}
                            height={17}
                          />

                        </TrackedLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>follow me on X</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            ),
            secondary: true,
          },
        ]}
      >
        {children}
      </HomeLayout>
    </div>
  );
}
