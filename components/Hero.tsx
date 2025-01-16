import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
            <h1 className="text-xl mb-8">Hi, I&apos;m Ariska Adi!</h1>
            <h1 className="text-4xl font-bold mb-6">
              Web3 Developer & Front-End Expert
            </h1>
            <p className="text-xl mb-8">
              Crafting the Future of the Web: Front-End Expertise Meets Web3
              Innovation
            </p>
            <Button size="lg">
              <a href="#contact" className="flex items-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Developer photo"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
