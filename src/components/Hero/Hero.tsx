"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowBigRight, Sparkles, Star, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiRadixui,
  SiTypescript,
  SiLucide,
  SiTailwindcss,
} from "react-icons/si";
import { baseOptions } from "@/app/layout.config";

interface Stargazer {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface StargazerListProps {
  stargazers: Stargazer[];
}

const RecentStargazers = ({ stargazers }: StargazerListProps) => {
  if (stargazers.length === 0) return null;
  
  return (
    <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border/30">
      <p className="text-[10px] sm:text-xs text-muted-foreground">Recent:</p>
      <div className="flex items-center -space-x-2">
        {stargazers.map((star) => (
          <a
            key={star.login}
            href={star.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <Avatar className="h-6 w-6 sm:h-7 sm:w-7 ring-2 ring-background hover:ring-primary/30 transition-all duration-200 hover:scale-110 hover:z-10">
              <AvatarImage src={star.avatar_url} alt={star.login} />
              <AvatarFallback className="text-[10px]">{star.login[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground px-2 py-0.5 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-20">
              @{star.login}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [stars, setStars] = useState<number | null>(null);
  const [latestStar, setLatestStar] = useState<Stargazer | null>(null);
  const [recentStars, setRecentStars] = useState<Stargazer[]>([]);
  const [loadingStar, setLoadingStar] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Abdulrazaq-pro/BreezeUI"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch stars:", error);
      }
    };

    fetchStars();
  }, []);

  useEffect(() => {
    const fetchLatestStargazer = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Abdulrazaq-pro/BreezeUI/stargazers",
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
          setLatestStar(data[data.length - 1]);
          // Get last 3 stargazers before the latest one
          const recent = data.slice(-4, -1).reverse();
          setRecentStars(recent);
        }
      } catch (error) {
        console.error("Failed to fetch latest stargazer:", error);
      } finally {
        setLoadingStar(false);
      }
    };

    fetchLatestStargazer();
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-12 px-10 text-center py-16 pt-24">
        <div className="flex items-center justify-center gap-4 flex-col">
          <Badge
            className="rounded-full cursor-pointer"
            variant={"secondary"}
            // onClick={() => {
            //   window.open("https://pro.BreezeUI.com", "_blank");
            // }}
          >
            Introducing pre-built blocks
          </Badge>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col">
          <h1 className="text-6xl max-sm:text-4xl font-medium tracking-tighter">
            Design beautiful websites with ease
          </h1>
          <p className="max-sm:text-sm">
            Sleek, responsive, and fully customizable UI components. Copy,
            tweak, and make them yours.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild className=" grow  h-12" size={"lg"}>
            <Link
              href="/docs/getting-started/introduction"
              className="font-normal"
            >
              Get Started <span className="opacity-70">- It&apos;s free</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className=" grow h-12" size={"lg"}>
            <Link
              href={baseOptions.githubUrl}
              className="font-normal flex items-center justify-between gap-2"
            >
              <span className="flex items-center gap-2">
                <FaGithub />
                GitHub
              </span>
              <span className="opacity-70">-</span>
              <span>
                <span className="opacity-70">{stars ? stars : "000"}</span>
              </span>
            </Link>
          </Button>
        </div>

        {/* Latest Stargazer Section */}
        <div className="w-full max-w-2xl mx-auto mt-4">
          {loadingStar ? (
            <Card className="w-full border-2">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Skeleton className="h-12 w-12 sm:h-16 sm:w-16 rounded-full shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-24 sm:w-32" />
                    <Skeleton className="h-5 sm:h-6 w-32 sm:w-48" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : latestStar ? (
            <Card className="relative overflow-hidden border-2 bg-gradient-to-br from-background via-background to-muted/20 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-3xl" />
              
              <CardContent className="relative p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <a
                    href={latestStar.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 group"
                  >
                    <div className="relative">
                      <Avatar className="h-12 w-12 sm:h-16 sm:w-16 ring-2 ring-primary/20 ring-offset-2 ring-offset-background group-hover:ring-primary/40 transition-all duration-300">
                        <AvatarImage 
                          src={latestStar.avatar_url} 
                          alt={latestStar.login}
                        />
                        <AvatarFallback className="text-sm sm:text-base">{latestStar.login[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-primary rounded-full p-1 sm:p-1.5">
                        <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary-foreground fill-primary-foreground" />
                      </div>
                    </div>
                  </a>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2 flex-wrap">
                      <Badge variant="secondary" className="gap-1 text-[10px] sm:text-xs h-5 sm:h-auto px-2 sm:px-2.5">
                        <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        Latest Supporter
                      </Badge>
                      <span className="text-base sm:text-xl">😊</span>
                    </div>
                    
                    <div className="space-y-0.5 sm:space-y-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Huge thanks to
                      </p>
                      <a
                        href={latestStar.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl font-semibold hover:text-primary transition-colors break-all"
                      >
                        <span className="break-all">@{latestStar.login}</span>
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        for being one of our amazing supporters! 🌟
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                  <p className="text-[10px] sm:text-xs text-center text-muted-foreground">
                    <Star className="inline h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1" />
                    Star the repo to show your support and be featured here!
                  </p>
                </div>

                <RecentStargazers stargazers={recentStars} />
              </CardContent>
            </Card>
          ) : null}
        </div>

        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
          Built with{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <FaReact />
              </TooltipTrigger>
              <TooltipContent size={"sm"}>
                <p>React</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiRadixui />
              </TooltipTrigger>
              <TooltipContent size={"sm"}>
                <p>RadixUI</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTailwindcss />
              </TooltipTrigger>
              <TooltipContent size={"sm"}>
                <p>Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiTypescript />
              </TooltipTrigger>
              <TooltipContent size={"sm"}>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <SiLucide />
              </TooltipTrigger>
              <TooltipContent size={"sm"}>
                <p>Lucide</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="border rounded-[var(--radius))] overflow-hidden w-full ">
          {/* <VideoPlayer
            src="https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrVAxvzLGNbFLIwa6jGOv4xSYBbUiV8flqz3KPy"
            poster="https://5xfmztgsig.ufs.sh/f/ZzCwT4wrsqrV9FceSLIpSmnpVdxc0kOoYPTae1HtKsCWgXhl"
            size={"full"}
            className="w-full h-auto rounded-[var(--radius))]"
          /> */}
        </div>
        {/* <CarbonAds format="cover" /> */}
      </section>
    </>
  );
};

export default Hero;