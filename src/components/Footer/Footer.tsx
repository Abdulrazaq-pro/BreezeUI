import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { baseOptions } from "@/app/layout.config";

// --- Footer Data ---
const footerLinks = [
  { name: "Products", href: "" },
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact Us", href: "#" },
];

const socialLinks = [
  { icon: Github, alt: "GitHub", href: "https://github.com/Abdulrazaq-pro/breezeUI" },
  { icon: Twitter, alt: "Twitter", href: baseOptions.socials.twitter },
  { icon: Linkedin, alt: "LinkedIn", href: baseOptions.socials.linkedin },
];


// --- Component ---
export default function Footer() {
  return (
    <section className="py-10 bg-neutral-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <Card className="py-16 px-8 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-none">
          <CardContent className="flex flex-col justify-center">
            <Link href="#" className="inline-block mx-auto mb-10">
              <Image
                className="rounded-lg"
                src="/breeze.png"
                alt="BreezeUI Logo"
                width={50}
                height={50}
              />
            </Link>

            {/* <ul className="flex flex-wrap justify-center gap-8 mb-7 text-center">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white font-semibold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}

            <div className="flex justify-center gap-4 mb-10">
              {socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.alt}</span>
                  </Link>
                </Button>
              ))}
            </div>

            <p className="text-center font-semibold text-neutral-400">
              <span>© {new Date().getFullYear()}
                <Link href={baseOptions.socials.github} className="text-blue-400 hover:text-blue-300">
                  {" "} Abdulrazaq
                </Link> All rights reserved.
              </span>

            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}