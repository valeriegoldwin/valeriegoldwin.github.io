import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

export const Projects = () => {
  const navigate = useNavigate();
  const { featuredProject, projects } = portfolioData;

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of projects that showcase my approach to solving complex design challenges.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-32">
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    Featured Case Study
                  </Badge>
                </div>
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                    {featuredProject.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {featuredProject.overview}
                  </p>
                </div>
                <Button
                  onClick={() => navigate('/case-study')}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-fit group transition-all duration-300"
                >
                  View Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};