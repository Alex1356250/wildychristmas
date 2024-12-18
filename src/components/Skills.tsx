import React from 'react';
import { Code2, Database, Globe, Laptop, Layout, Server } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express"]
    },
    {
      category: "Base de données",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MySQL"]
    },
    {
      category: "DevOps",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Docker"]
    },
    {
      category: "Mobile",
      icon: <Laptop className="w-6 h-6" />,
      technologies: ["React Native"]
    },
    {
      category: "Autres",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Git", "REST API"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Compétences</h2>
          <p className="mt-4 text-xl text-gray-600">Technologies et outils que je maîtrise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-gray-900 text-white rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;