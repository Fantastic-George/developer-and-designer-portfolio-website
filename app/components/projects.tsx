import Link from "next/link";
import { Config } from "@/Config";
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";        



const Projects = () =>{
    return(

<section id="projects" className="container py-24 sm:py-32 space-y-8 bg-muted/50 max-w-full px-4 sm:px-6 lg:px-8">
<div className="mx-auto flex flex-col items-center text-center mb-12">
  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    {Config.featuredProjects}
  </h2>
  <p className="text-muted-foreground mt-4 max-w-[85%]">
    {Config.featuredProjectsSubtitle}
  </p>
</div>

<Tabs defaultValue="all" className="w-full">
  <div className="flex justify-center mb-8">
    <TabsList>
      <TabsTrigger value="all">All Projects</TabsTrigger>
      <TabsTrigger value="web">Web</TabsTrigger>
      <TabsTrigger value="mobile">Mobile</TabsTrigger>
      <TabsTrigger value="ai">AI & ML</TabsTrigger>
    </TabsList>
  </div>
  
  <TabsContent value="all" className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Project 1 */}
      <Card className="overflow-hidden">
        <div className="relative h-[200px] w-full">
          <Image 
            src="/project1.jpg" 
            alt="Project 1" 
            fill 
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Intelligent Dashboard</CardTitle>
            <Badge>Web</Badge>
          </div>
          <CardDescription>
            Data visualization platform with AI-powered insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Built with React, D3.js, and TensorFlow.js to provide real-time analytics and predictive modeling capabilities.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href="#" className="flex items-center gap-1">
              <ExternalLinkIcon className="h-3 w-3" /> View Project
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#" className="flex items-center gap-1">
              <GithubIcon className="h-3 w-3" /> Source
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Project 2 */}
      <Card className="overflow-hidden">
        <div className="relative h-[200px] w-full">
          <Image 
            src="/project2.jpg" 
            alt="Project 2" 
            fill 
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>EcoTrack</CardTitle>
            <Badge>Mobile</Badge>
          </div>
          <CardDescription>
            Sustainability tracking mobile application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            React Native app that helps users track and reduce their carbon footprint through gamification and community challenges.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href="#" className="flex items-center gap-1">
              <ExternalLinkIcon className="h-3 w-3" /> View Project
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#" className="flex items-center gap-1">
              <GithubIcon className="h-3 w-3" /> Source
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Project 3 */}
      <Card className="overflow-hidden">
        <div className="relative h-[200px] w-full">
          <Image 
            src="/project3.jpg" 
            alt="Project 3" 
            fill 
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>NeuralSynth</CardTitle>
            <Badge>AI</Badge>
          </div>
          <CardDescription>
            AI-powered music composition tool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Deep learning system that generates original music compositions based on user preferences and emotional inputs.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href="#" className="flex items-center gap-1">
              <ExternalLinkIcon className="h-3 w-3" /> View Project
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#" className="flex items-center gap-1">
              <GithubIcon className="h-3 w-3" /> Source
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
    <div className="flex justify-center mt-8">
      <Button variant="outline" asChild>
        <Link href="#">View All Projects</Link>
      </Button>
    </div>
  </TabsContent>
  
  <TabsContent value="web" className="space-y-8">
    {/* Web projects will go here */}
    <div className="text-center py-12">
      <p className="text-muted-foreground">Web projects content will be added here</p>
    </div>
  </TabsContent>
  
  <TabsContent value="mobile" className="space-y-8">
    {/* Mobile projects will go here */}
    <div className="text-center py-12">
      <p className="text-muted-foreground">Mobile projects content will be added here</p>
    </div>
  </TabsContent>
  
  <TabsContent value="ai" className="space-y-8">
    {/* AI projects will go here */}
    <div className="text-center py-12">
      <p className="text-muted-foreground">AI & ML projects content will be added here</p>
    </div>
  </TabsContent>
</Tabs>
</section>
)};

export default Projects;