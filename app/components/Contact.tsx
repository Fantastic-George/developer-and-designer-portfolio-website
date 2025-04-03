import Link from "next/link";
import { LinkedinIcon, MailIcon, GithubIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";  
import { Config } from "@/Config";


const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32 space-y-8 max-w-full px-4 sm:px-6 lg:px-8">
    <div className="mx-auto flex flex-col items-center text-center mb-12">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {Config.contactHeading}
      </h2>
      <p className="text-muted-foreground mt-4 max-w-[85%]">
        {Config.contactSubtitle}
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
            <Link href={`mailto:${Config.contactEmail}`} className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm">{Config.contactEmail}</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href={Config.contactLinkedin} className="flex items-center gap-3" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm">{Config.contactLinkedin}</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href={Config.contactGithub} className="flex items-center gap-3" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm">{Config.contactGithub}</p>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Let's Create Something Amazing</h3>
        <p className="text-muted-foreground">
          Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you. I'm always open to discussing new opportunities and collaborations.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <Link href={`mailto:${Config.contactEmail}`}>
            <MailIcon className="mr-2 h-4 w-4" /> Send Email
          </Link>
        </Button>
      </div>
    </div>
  </section>
      );
};

export default Contact;
