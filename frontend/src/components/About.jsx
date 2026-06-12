import React from 'react';
import { Check } from 'lucide-react';
import { portfolioData } from '../data/mock';

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {about.heading}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              {about.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {about.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};