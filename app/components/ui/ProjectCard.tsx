import Link from "next/link";
import { GithubIcon, ExternalLinkIcon, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card";
import Image from "next/image";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";     
import { Project } from "@/types";  

const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{project.title}</CardTitle>
          <Badge>{project.category}</Badge>
        </div>
        <CardDescription>
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {project.content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.links.demo && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLinkIcon className="h-3 w-3" /> View Project
            </Link>
          </Button>
        )}
        {project.links.source && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={project.links.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <GithubIcon className="h-3 w-3" /> Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

export { ProjectCard };