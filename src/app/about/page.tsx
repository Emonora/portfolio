import Image from "next/image";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa'; 
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-500 text-gray-850 p-8 md:p-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-850 mb-4">About Me</h1>
        <p className="text-lg text-gray-800">A brief overview of who I am, what I do, and my skills.</p>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center mb-16">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <Image
            src="/pfp.jpeg" 
            alt="Emonora"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-850">Hi, I&apos;m Emonora!</h2>
          <p className="mt-4 text-lg text-gray-800">
            I&apos;m a passionate web developer with experience in building modern, responsive websites and web applications. I specialize in front-end development with a focus on user experience. I love problem-solving and continuously learning new technologies to stay ahead of the curve.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold text-center text-gray-850 mb-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-800 text-4xl mb-4" />
            <p className="text-xl font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-800 text-4xl mb-4" />
            <p className="text-xl font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-500 text-4xl mb-4" />
            <p className="text-xl font-semibold">React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-800 text-4xl mb-4" />
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
        <h3 className="text-3xl font-semibold text-center text-gray-850 mb-8">Experience</h3>
        <p className="text-lg text-gray-800 text-center">
          Over the years, I have worked on various projects that have helped me hone my skills in both front-end and back-end development. My journey started with building static websites, and now I work on full-stack web applications, focusing on creating seamless user experiences.
        </p>
      </section>

      <section className="text-center">
        <h4 className="text-xl text-gray-850 mb-4">Interested in working with me?</h4>
        <Link href="/contact">
          Get in touch
        </Link>
      </section>
    </main>
  );
}
