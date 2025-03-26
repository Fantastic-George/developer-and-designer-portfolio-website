import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import Link from "next/link";
import { Config } from "@/Config";
import Header from "./components/header";
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, MailIcon } from "lucide-react";
import About from "./components/about";
import Projects from "./components/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";


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
        <section id="achievements" className="container py-24 sm:py-32 space-y-8 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center mb-12">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Achievements & Recognition
            </h2>
            <p className="text-muted-foreground mt-4 max-w-[85%]">
              Awards and milestones from my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span> Innovation Award
                </CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Recognized for groundbreaking work in AI-assisted design tools that revolutionized the creative workflow for thousands of designers.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 2 */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📱</span> App of the Year
                </CardTitle>
                <CardDescription>2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  EcoTrack was selected as "App of the Year" by GreenTech Magazine for its impact on sustainable living practices.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 3 */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span> Research Fellowship
                </CardTitle>
                <CardDescription>2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Awarded prestigious research fellowship to explore the intersection of machine learning and human-computer interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-24 sm:py-32 space-y-8 bg-muted/50 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center mb-12">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground mt-4 max-w-[85%]">
              My technical toolkit and areas of specialization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Development</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Frontend (React, Vue, Angular)</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Backend (Node.js, Python, Go)</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mobile (React Native, Swift)</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">DevOps (AWS, Docker, CI/CD)</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Design & Product</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">UI/UX Design</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Product Management</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Data Visualization</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">AI/ML Integration</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-12">
            <Badge variant="secondary" className="text-sm py-1 px-3">React</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">TypeScript</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Node.js</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Python</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">TensorFlow</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">AWS</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Docker</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Figma</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Product Strategy</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">UX Research</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Data Analysis</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">React Native</Badge>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-24 sm:py-32 space-y-8 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center mb-12">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mt-4 max-w-[85%]">
              Interested in working together? Let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm">hello@georgelam.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm">linkedin.com/in/georgelam</p>
                </div>
                <div className="flex items-center gap-3">
                  <GithubIcon className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm">github.com/georgelam</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground">
                Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you. I'm always open to discussing new opportunities and collaborations.
              </p>
              <Button size="lg" className="mt-4" asChild>
                <Link href="mailto:hello@georgelam.com">
                  <MailIcon className="mr-2 h-4 w-4" /> Send Email
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 w-full">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} George Lam. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
