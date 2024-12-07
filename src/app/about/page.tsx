import Link from "next/link";
import { Button } from "~/components/ui/button";
import DarkModeToggle from "../_components/darkMode";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-white">
      <h1 className="text-4xl font-bold">About me</h1>
      <p>Welcome to my about page!</p>
      <DarkModeToggle />
      <div className="mt-4 flex flex-col gap-4 pt-4 text-center">
        <h1>Hello, my name is Emonora!</h1>
        <p>
          I&apos;m a software engineer and a web developer. I love creating
          beautiful and functional websites and apps. I&apos;m passionate about
          learning and growing as a developer.
        </p>
        <div className="mt-4 rounded-lg bg-gray-800 p-4">
          <p>
            I&apos;m currently working on a project called{" "}
            <a href="https://idea-gen-beryl.vercel.app/">
              Coding Project Idea Generator
            </a>{" "}
            where I&apos;m using Next.js, Typescript, and Tailwind CSS to
            generate coding project ideas.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
    </main>
  );
}
