"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Modal from "./Modal";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Web3 Crowdfunding Platform",
    description:
      "A cutting-edge crowdfunding Web3 platform built with Next.js, powered by Thirdweb for seamless backend integration, and utilizing smart contracts to ensure secure, transparent, and decentralized funding.",
    longDescription:
      "This Web3 crowdfunding platform built with Next.js and Thirdweb offers a secure and decentralized fundraising experience. It leverages blockchain and smart contracts for transparency, allowing users to connect crypto wallets, contribute funds, and track campaigns in real time. With Thirdweb, Web3 interactions are simplified, providing an efficient, user-friendly solution for managing campaigns and setting a new standard for modern crowdfunding.",
    image: "/crowdfund.png",
    tags: ["Next.js", "Solidity", "React", "Thirdweb"],
    url: "https://tiangtoken-eth.vercel.app/",
  },
  {
    title: "Secure Token Airdrop Platform with PostgreSQL",
    description:
      "A secure and scalable token airdrop platform using PostgreSQL on Vercel to store unique codes and wallet addresses, ensuring seamless and transparent token distribution.",
    longDescription:
      "This airdrop token platform securely manages and distributes tokens using PostgreSQL on Vercel to store participant data. It generates unique codes tied to wallet addresses, ensuring accurate and tamper-proof participation. By combining blockchain technology with a reliable database backend, the platform enables seamless, transparent token distribution with high performance and scalability, offering an efficient solution for token airdrops.",
    image: "/airdrop.png",
    tags: ["PostgreSQL", "Tailwind CSS", "Next.js", "React"],
    url: "https://gromp-airdrop.vercel.app/",
  },
  {
    title: "AI Chat Prompt Application Powered by Gemini AI",
    description:
      "A dynamic AI chat prompt application built with Gemini AI, designed to deliver intelligent and contextual interactions for users",
    longDescription:
      "This chat prompt application leverages the advanced capabilities of Gemini AI to provide intelligent, context-aware conversations. Users can input prompts and receive accurate, human-like responses tailored to their queries. The platform is designed for a variety of applications, from customer support to creative writing assistance. By integrating Gemini AI, it ensures high-quality interactions, adaptability, and a seamless user experience.",
    image: "/ai.png",
    tags: ["Gemini AI", "Node.js", "TypeScript", "Next.js"],
    url: "https://adi-gemini-ai-next.vercel.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden cursor-pointer bg-muted/100"
              onClick={() => setSelectedProject(project)}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1800}
                height={1800}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}>
          <div className="space-y-4">
            <Image
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              width={1800}
              height={1800}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p>{selectedProject.longDescription}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button asChild>
              <Link
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Modal>
      )}
    </section>
  );
}
