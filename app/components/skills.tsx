import Link from "next/link";
import { Config } from "@/Config";
import { MailIcon, ExternalLinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";    


const Skills = () =>{
    return(
<section id="skills" className="container py-24 sm:py-32 space-y-8 bg-muted/50 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center mb-12">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {Config.skillsTitle}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-[85%]">
              {Config.skillsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{Config.skillGroup[0].skillGroupTitle}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[0].skills[0].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{ width: `${Config.skillGroup[0].skills[0].percentage}%` }}></div>                  
</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[0].skills[1].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[0].skills[1].percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[0].skills[2].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[0].skills[2].percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[0].skills[3].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[0].skills[3].percentage}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{Config.skillGroup[1].skillGroupTitle}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[1].skills[0].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[1].skills[0].percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[1].skills[1].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[1].skills[1].percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[1].skills[2].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[1].skills[2].percentage}%` }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{Config.skillGroup[1].skills[3].name}</span>
                  <div className="w-1/2 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Config.skillGroup[1].skills[3].percentage}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </section>
    );
};

export default Skills;
