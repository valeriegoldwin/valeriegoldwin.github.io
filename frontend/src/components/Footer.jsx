import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { portfolioData } from '../data/mock';

export const Footer = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-2">Alex Morgan</p>
            <p className="text-blue-200 text-sm">UI/UX Designer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`https://twitter.com/${contact.twitter.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} Alex Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};