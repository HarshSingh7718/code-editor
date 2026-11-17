import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";

const CURRENT_YEAR = 2026;

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com",
      label: "GitHub",
      icon: (
        <GithubIcon className="size-5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" />
      ),
    },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col items-center space-y-6 text-center">
        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {CURRENT_YEAR} Codesnippet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}