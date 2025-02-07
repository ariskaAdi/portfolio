import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blocks, Database, Server, Code } from "lucide-react";

const services = [
  {
    title: "Web3 Application Development",
    description:
      "Building decentralized applications (dApps) on various blockchain platforms.",
    icon: Blocks,
  },
  {
    title: "Smart Contract Development",
    description:
      "Creating and auditing secure smart contracts for blockchain applications.",
    icon: Code,
  },
  {
    title: "Database Design & Optimization",
    description:
      "Designing efficient database schemas and optimizing queries for PostgreSQL.",
    icon: Database,
  },
  {
    title: "Next JS Full Stack Development",
    description:
      "Building full-stack applications using Next.js, Tailwind CSS, and PostgreSQL.",
    icon: Server,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-4 bg-muted/100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
