import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { portfolioData } from '../data/mock';

export const CaseStudy = () => {
  const navigate = useNavigate();
  const { featuredProject } = portfolioData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              {featuredProject.category} • {featuredProject.year}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              {featuredProject.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {featuredProject.overview}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Role</p>
              <p className="text-sm font-medium text-gray-900">{featuredProject.role}</p>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600 mb-1">Year</p>
              <p className="text-sm font-medium text-gray-900">{featuredProject.year}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-orange-50">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-32">
          {/* Challenge */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Problem Statement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {featuredProject.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {featuredProject.solution}
            </p>
          </div>

          {/* Process */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Design Process
            </h2>
            <div className="space-y-8">
              {featuredProject.process.map((step, index) => (
                <Card key={index} className="p-8 border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.phase}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-14">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Demo Video */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Demo Video
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Watch a walkthrough of the Yum Yum app in action — explore the queue-joining flow, dietary filtering, and eatery discovery features.
            </p>
            <Button
              onClick={() => window.open(featuredProject.demoVideo, '_blank')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base transition-all duration-300 group w-fit"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              View Demo
            </Button>
          </div>

          {/* Results */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProject.results.map((result, index) => (
                <Card key={index} className="p-8 text-center bg-gray-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    {result.split(' ')[0]}
                  </p>
                  <p className="text-gray-600">
                    {result.split(' ').slice(1).join(' ')}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tools Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {featuredProject.tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-base">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in working together?
          </h2>
          <Button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-base transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};