import Link from "next/link";
import { HiOutlineUser, HiOutlineCode, HiOutlineMail } from 'react-icons/hi'; 

export default function HomePage() {
  return (
    <main className="bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-600 text-white flex flex-col items-center justify-center h-screen w-screen p-8 relative overflow-hidden">
      <div className="absolute top-10 flex justify-center w-full">
        <img
          src="/pfp.jpeg" 
          alt="Emonora"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center text-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
        Welcome to My Portfolio!
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center animate__animated animate__fadeIn animate__delay-2s">
        <Link
          href="/about"
          className="mt-4 py-4 px-10 rounded-full bg-purple-700 text-white text-lg font-semibold transform transition duration-300 hover:bg-purple-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-xl hover:shadow-2xl hover:bg-opacity-90"
        >
          <HiOutlineUser className="inline-block mr-2 text-xl" />
          About
        </Link>

        <Link
          href="/projects"
          className="mt-4 py-4 px-10 rounded-full bg-purple-700 text-white text-lg font-semibold transform transition duration-300 hover:bg-purple-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-xl hover:shadow-2xl hover:bg-opacity-90"
        >
          <HiOutlineCode className="inline-block mr-2 text-xl" />
          Projects
        </Link>

        <Link
          href="/contact"
          className="mt-4 py-4 px-10 rounded-full bg-purple-700 text-white text-lg font-semibold transform transition duration-300 hover:bg-purple-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-xl hover:shadow-2xl hover:bg-opacity-90"
        >
          <HiOutlineMail className="inline-block mr-2 text-xl" />
          Contact
        </Link>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60 blur-lg z-[-1]"></div>
    </main>
  );
}
