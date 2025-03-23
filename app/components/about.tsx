
import Image from "next/image";
import { Config } from "@/Config";

const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 space-y-8 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex flex-col items-center text-center mb-12">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              About Me
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 rounded-lg"></div>
              <Image 
                src="/profile.png" 
                alt="George Lam" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {Config.about}
              </p>
            </div>
          </div>
        </section>
  );
};

export default About;
