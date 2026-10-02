import Image from 'next/image'; // Next.js Image component
import Link from 'next/link'; // Next.js Link for navigation

export default function HomePage() {
  return (
    <div className="container mx-auto p-8 py-16 flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-lg mt-10">
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
        <Image
          src="/profile.jpg" // Place your profile image in the public folder
          alt="Your Profile Picture"
          fill // Fill the parent div
          style={{ objectFit: 'cover' }}
          className="rounded-full"
          quality={80}
          priority={true}
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
        Hello, I&apos;m <span className="text-purple-700">Your Name!</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
        A passionate [Your Profession, e.g., Full-Stack Developer] building awesome web applications.
      </p>
      <div className="flex space-x-4">
        <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
          View My Projects
        </Link>
        <Link href="/contact" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition duration-300 shadow-lg">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
