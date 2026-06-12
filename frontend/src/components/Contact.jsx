import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

export const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {contact.heading}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {contact.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => window.location.href = `mailto:${contact.email}`}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base transition-all duration-300 group"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};