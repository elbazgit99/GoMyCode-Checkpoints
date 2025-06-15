import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto p-8 py-16 bg-white rounded-xl shadow-lg mt-10 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10">
        Get In <span className="text-red-700">Touch</span>
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="flex flex-col items-center space-y-6 mb-10">
        <div className="flex items-center text-xl text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a>
        </div>
        <div className="flex items-center text-xl text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">LinkedIn/yourprofile</a>
        </div>
        <div className="flex items-center text-xl text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">GitHub/yourusername</a>
        </div>
      </div>

      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        I look forward to hearing from you!
      </p>
    </div>
  );
}
