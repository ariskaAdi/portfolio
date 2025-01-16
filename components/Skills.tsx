import { Database, Server, Code, Blocks } from "lucide-react";

const skills = [
  { name: "Web3 Development", icon: Blocks },
  { name: "Smart Contracts", icon: Code },
  { name: "PostgreSQL", icon: Database },
  { name: "Next JS", icon: Server },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
