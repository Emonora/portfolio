import Image from "next/image";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function AboutPage() {
  return (
    <main className="text-gray-850 bg-gray-500 p-8 md:p-16">
      <section className="mb-16 text-center">
        <h1 className="text-gray-850 mb-4 text-4xl font-bold md:text-5xl">
          About Me
        </h1>
        <p className="text-lg text-gray-800">
          A brief overview of who I am, what I do, and my skills.
        </p>
      </section>

      <section className="mb-16 flex flex-col items-center justify-center md:flex-row">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <Image
            src="/pfp.jpeg"
            alt="Emonora"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-center md:ml-8 md:w-2/3 md:text-left">
          <h2 className="text-gray-850 text-3xl font-semibold">
            Hi, I&apos;m Emonora!
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            I&apos;m a passionate web developer with experience in building
            modern, responsive websites and web applications. I specialize in
            front-end development with a focus on user experience. I love
            problem-solving and continuously learning new technologies to stay
            ahead of the curve.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-gray-850 mb-8 text-center text-3xl font-semibold">
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <FaHtml5 className="mb-4 text-4xl text-orange-800" />
            <p className="text-xl font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="mb-4 text-4xl text-blue-800" />
            <p className="text-xl font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="mb-4 text-4xl text-blue-500" />
            <p className="text-xl font-semibold">React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="mb-4 text-4xl text-green-800" />
            <p className="text-xl font-semibold">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://utfs.io/f/b57Os1yYaoEZ0S7opPKhNvBmEf6JiDUw9yPTul7IxQpZnYeL"
              alt="Next.js"
              width={40}
              height={40}
              className="mb-4"
            />
            <p className="text-xl font-semibold">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://utfs.io/f/b57Os1yYaoEZZoDVKS4L1UO4wH2ltYWBdRku7vGEobxj6saD"
              alt="TypeScript"
              width={40}
              height={40}
              className="mb-4"
            />
            <p className="text-xl font-semibold">TypeScript</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-gray-850 mb-8 text-center text-3xl font-semibold">
          Experience
        </h3>
        <p className="text-center text-lg text-gray-800">
          Over the years, I have worked on various projects that have helped me
          hone my skills in both front-end and back-end development. My journey
          started with building static websites, and now I work on full-stack
          web applications, focusing on creating seamless user experiences.
        </p>
      </section>

      <section className="text-center">
        <h4 className="text-gray-850 mb-4 text-xl">Go back to home?</h4>
        <Link
          href="/"
          className="mt-4 transform rounded-full bg-purple-700 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-purple-800 hover:bg-opacity-90 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          <HiOutlineArrowNarrowLeft className="mr-2 inline-block text-xl" />
          Home
        </Link>

        <h4 className="text-gray-850 mb-4 mt-8 text-xl">
          Interested in working with me?
        </h4>
        <Link
          href="/contact"
          className="mt-4 transform rounded-full bg-purple-700 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-purple-800 hover:bg-opacity-90 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
