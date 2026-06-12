import React from 'react';
import { Card } from './ui/card';
import { portfolioData } from '../data/mock';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="p-8 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};