import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Import ProjectCard

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application built with Next.js, Node.js, Express, and MongoDB. Features user authentication, product catalog, shopping cart, and order processing.',
      imageUrl: '/project1.jpg', // Place your project image in public folder
      liveUrl: 'https://example-ecommerce.com',
      repoUrl: 'https://github.com/yourusername/ecommerce-repo',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A simple and intuitive task management application. Users can add, delete, mark as complete, and filter tasks. Built using React, Redux, and Tailwind CSS.',
      imageUrl: '/project2.jpg', // Place your project image in public folder
      liveUrl: 'https://example-tasks.com',
      repoUrl: 'https://github.com/yourusername/task-app-repo',
    },
    {
      id: 3,
      title: 'Personal Blog',
      description: 'A static blog website generated with Next.js, fetching content from markdown files. Includes dynamic routing for posts and a clean, responsive design.',
      imageUrl: 'https://placehold.co/600x400/987654/ffffff?text=Blog+Project',
      liveUrl: 'https://example-blog.com',
      repoUrl: 'https://github.com/yourusername/blog-repo',
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'An application that allows users to search for recipes using an external API. Features search, filtering, and detailed recipe views. Built with React and Axios.',
      imageUrl: 'https://placehold.co/600x400/456789/ffffff?text=Recipe+Finder',
      liveUrl: 'https://example-recipe-finder.com',
      repoUrl: 'https://github.com/yourusername/recipe-finder-repo',
    },
  ];

  return (
    <div className="container mx-auto p-8 py-16 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
        My <span className="text-green-700">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
