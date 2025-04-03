import Link from "next/link";
import { Config } from "@/Config";
import { Button } from "@/app/components/ui/Button";        
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/Tabs";
import { ProjectCard } from "@/app/components/ui/ProjectCard";
import { Project } from "@/types";

// Project data
const projectsData: Project[] = [
  {
    id: "intelligent-dashboard",
    title: "Intelligent Dashboard",
    description: "Data visualization platform with AI-powered insights",
    content: "Built with React, D3.js, and TensorFlow.js to provide real-time analytics and predictive modeling capabilities.",
    image: "/project1.jpg",
    category: "Mobile",
    links: {
      demo: "https://www.example.com",
      source: "https://github.com"
    }
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "Sustainability tracking mobile application",
    content: "React Native app that helps users track and reduce their carbon footprint through gamification and community challenges.",
    image: "/project2.jpg",
    category: "Mobile",
    links: {
      demo: "https://www.example.com",
      source: "https://github.com"
    }
  },
  {
    id: "neuralsynth",
    title: "NeuralSynth",
    description: "AI-powered music composition tool",
    content: "Deep learning system that generates original music compositions based on user preferences and emotional inputs.",
    image: "/project3.jpg",
    category: "AI",
    links: {
      demo: "https://www.example.com",
      source: "https://github.com"
    }
  },

  {
    id: "instaworks",
    title: "Instaworks",
    description: "Workplace tool with agents",
    content: "Deep learning system that generates original music compositions based on user preferences and emotional inputs.",
    image: "/project3.jpg",
    category: "AI",
    links: {
      demo: "https://www.example.com",
      source: "https://github.com"
    }
  },
  {
    id: "spacey",
    title: "SpaceY",
    description: "AI-powered rocketship",
    content: "Deep learning system that generates original music compositions based on user preferences and emotional inputs.",
    image: "/project3.jpg",
    category: "AI",
    links: {
      demo: "https://www.example.com",
      source: "https://github.com"
    }
  },
  {
    id: "neuralink",
    title: "Neural Link",
    description: "AI-powered music composition tool",
    content: "Deep learning system that generates original music compositions based on user preferences and emotional inputs.",
    image: "/project3.jpg",
    category: "Web",
    links: {
      demo: "https://www.example.com",
      source: "https://github.com"
    }
  },
  // You can add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-32 space-y-8 bg-muted/50 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center text-center mb-12">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {Config.featuredProjects}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[85%]">
          {Config.featuredProjectsSubtitle}
        </p>
      </div>

      {/* ℹ️ Define your categories here and make sure they are the same as in your projects to ensure filtering works as expected */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="Web">Web</TabsTrigger>
            <TabsTrigger value="Mobile">Mobile</TabsTrigger>
            <TabsTrigger value="AI">AI & ML</TabsTrigger>
          </TabsList>
        </div>
        
        {/* All Projects Tab */}
        {/* ℹ️ Make sure to add every category you defined above under value="XXX" to ensure proper filtering*/}
        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        
        {/* Web Projects Tab */}
        <TabsContent value="Web" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.category === "Web")
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
        
        {/* Mobile Projects Tab */}
        <TabsContent value="Mobile" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.category === "Mobile")
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
        
        {/* AI Projects Tab */}
        <TabsContent value="AI" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.category === "AI")
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Projects;