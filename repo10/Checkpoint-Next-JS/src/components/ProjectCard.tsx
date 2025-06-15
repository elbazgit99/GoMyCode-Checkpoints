import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimization

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string; // Optional live demo link
  repoUrl?: string; // Optional GitHub repo link
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-56"> {/* Fixed height for images */}
        <Image
          src={imageUrl}
          alt={title}
          fill // Fill the parent div
          style={{ objectFit: 'cover' }} // Cover the area without distortion
          className="rounded-t-xl"
          quality={75} // Image quality optimization
          priority={true} // Prioritize loading for initial view
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-4">{description}</p>
        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300 flex items-center gap-1"
            >
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300 flex items-center gap-1"
            >
              GitHub Repo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 3m0 0-3.75 3.75M22.5 3l-3.75 3.75M13.5 10.5H21M13.5 6v7.5M10.5 6h.008v.008h-.008V6ZM10.5 10.5h.008v.008h-.008V10.5ZM10.5 15h.008v.008h-.008V15ZM10.5 19.5h.008v.008h-.008V19.5ZM14.25 6h.008v.008h-.008V6ZM14.25 10.5h.008v.008h-.008V10.5ZM14.25 15h.008v.008h-.008V15ZM14.25 19.5h.008v.008h-.008V19.5ZM18 6h.008v.008H18V6ZM18 10.5h.008v.008H18V10.5ZM18 15h.008v.008H18V15ZM18 19.5h.008v.008H18V19.5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
