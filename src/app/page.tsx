import Link from "next/link";
import { HiOutlineUser, HiOutlineCode, HiOutlineMail } from "react-icons/hi";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-600 p-8 text-white">
      <div className="absolute top-10 flex w-full justify-center">
        <img
          src="/pfp.jpeg"
          alt="Emonora"
          className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <h1 className="text-shadow-lg animate__animated animate__fadeIn animate__delay-1s mb-10 text-center text-5xl font-extrabold md:text-6xl">
        Welcome to My Portfolio!
      </h1>

      <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
        <Link
          href="/about"
          className="mt-4 transform rounded-full bg-purple-700 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-purple-800 hover:bg-opacity-90 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <HiOutlineUser className="mr-2 inline-block text-xl" />
          About
        </Link>

        <Link
          href="/projects"
          className="mt-4 transform rounded-full bg-purple-700 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-purple-800 hover:bg-opacity-90 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <HiOutlineCode className="mr-2 inline-block text-xl" />
          Projects
        </Link>

        <Link
          href="/contact"
          className="mt-4 transform rounded-full bg-purple-700 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-purple-800 hover:bg-opacity-90 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <HiOutlineMail className="mr-2 inline-block text-xl" />
          Contact
        </Link>
      </div>

      <div className="absolute inset-0 z-[-1] bg-black bg-opacity-60 blur-lg"></div>
    </main>
  );
}
