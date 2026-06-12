import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

export const Hero = () => {
  const { hero } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">
              {hero.title}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              {hero.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {hero.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base transition-all duration-300"
            >
              {hero.cta}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};