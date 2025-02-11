import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";

export default function Hero() {
  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-full text-gray-200">
            <h1 className="text-xl md:text-4xl mb-4">
              Hi, I&apos;m Ariska Adi!
            </h1>
            <h1 className="text-4xl font-bold mb-6">
              Web3 Developer & Front-End Expert
            </h1>
            <p className="text-xl mb-8">
              Crafting the Future of the Web: Front-End Expertise Meets Web3
              Innovation
            </p>
            <Button
              size="lg"
              className="rounded-full bg-yellow-300 hover:bg-yellow-400 hover:text-black"
              asChild>
              <Link href="#contact" className="flex items-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
