import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center text-sm shadow-inner mt-10">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <p className="mt-2">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
