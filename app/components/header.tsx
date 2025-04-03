import Link from "next/link";
import { Config } from "@/Config";
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-full px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">{Config.name}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
            <Link href="#achievements" className="transition-colors hover:text-foreground/80">Achievements</Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center mr-4">
            <ThemeToggle />
          </div>
          <nav className="flex items-center">
            <Link href={Config.contactGithub} target="_blank" rel="noreferrer" className="w-9 px-0">
              <GithubIcon className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={Config.contactLinkedin} target="_blank" rel="noreferrer" className="w-9 px-0">
              <LinkedinIcon className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;