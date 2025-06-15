import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-8 py-16 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
        About <span className="text-blue-700">Me</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="relative w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
          <Image
            src="/profile.jpg" // Ensure your profile image is here
            alt="Your Profile Picture"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-full"
            quality={80}
          />
        </div>
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I&apos;m [Your Name], a [Your Profession, e.g., web developer] with a passion for creating
            dynamic and user-friendly web experiences. My journey in technology began [mention when/how, e.g., during my university studies, a bootcamp, or simply a deep curiosity],
            and since then, I&apos;ve been dedicated to mastering the art of [mention key areas, e.g., front-end development, full-stack architecture, UI/UX design].
          </p>
          <p className="mb-4">
            I specialize in [list primary skills, e.g., React, Next.js, Node.js, TypeScript, Tailwind CSS, databases like MongoDB/PostgreSQL]. I love tackling complex problems and
            transforming ideas into robust, scalable, and visually appealing applications. My approach focuses on clean code,
            performance optimization, and delivering exceptional user interfaces.
          </p>
          <p>
            Outside of coding, I enjoy [mention hobbies, e.g., hiking, reading sci-fi, playing video games, exploring new technologies]. I&apos;m always eager to learn new things and contribute
            to exciting projects. Feel free to connect with me to discuss opportunities or just to chat about tech!
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'JavaScript', 'HTML5', 'CSS3', 'Figma'].map(skill => (
            <span key={skill} className="bg-purple-100 text-purple-800 px-5 py-2 rounded-full text-lg font-semibold shadow-sm transition-transform hover:scale-105">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
