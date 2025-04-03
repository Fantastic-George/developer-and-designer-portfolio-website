import { Button } from "./components/ui/Button";
import { Badge } from "./components/ui/Badge";
import Link from "next/link";
import { Config } from "@/Config";
import Header from "./components/Header";
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, MailIcon } from "lucide-react";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="container py-24 sm:py-32 space-y-8 md:space-y-16 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 animate-fade-up">
              {Config.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-[85%] animate-fade-up animate-delay-150">
              {Config.headline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Achievements Section */}
        <Achievements />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 w-full">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {Config.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* ℹ️ there is an option here to create footer links for TOS and Privacy Policy */}
            {/* <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
