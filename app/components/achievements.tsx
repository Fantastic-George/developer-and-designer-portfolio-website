import { Config } from "@/Config";
import { MailIcon, ExternalLinkIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/Tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/Card";
import Image from "next/image";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";    


const Achievements = () =>{
    return(
<section id="achievements" className="container py-24 sm:py-32 space-y-8 max-w-full px-4 sm:px-6 lg:px-8">
<div className="mx-auto flex flex-col items-center text-center mb-12">
  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    {Config.achievementsTitle}
  </h2>
  <p className="text-muted-foreground mt-4 max-w-[85%]">
    {Config.achievementsSubtitle}
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Achievement 1 */}
  <Card className="bg-primary/5 border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <span className="text-2xl">{Config.achievements[0].emoji}</span> {Config.achievements[0].title}
      </CardTitle>
      <CardDescription>{Config.achievements[0].year}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        {Config.achievements[0].description}
      </p>
    </CardContent>
  </Card>

  {/* Achievement 2 */}
  <Card className="bg-primary/5 border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <span className="text-2xl">{Config.achievements[1].emoji}</span> {Config.achievements[1].title}
      </CardTitle>
      <CardDescription>{Config.achievements[1].year}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        {Config.achievements[1].description}
      </p>
    </CardContent>
  </Card>

  {/* Achievement 3 */}
  <Card className="bg-primary/5 border-primary/20">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <span className="text-2xl">{Config.achievements[2].emoji}</span> {Config.achievements[2].title}
      </CardTitle>
      <CardDescription>{Config.achievements[2].year}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">
        {Config.achievements[2].description}
      </p>
    </CardContent>
  </Card>
</div>
</section>
    )
}

export default Achievements
