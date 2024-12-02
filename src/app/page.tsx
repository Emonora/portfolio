import Image from "next/image";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { Toggle } from "~/components/ui/toggle";
import DarkModeToggle from "./_components/darkMode";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Image
        src="/pfp.jpeg"
        alt="Profile picture"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-6xl font-bold">Welcome to my portfolio!</h1>
      <DarkModeToggle />
      <div className="flex flex-row gap-4">
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/about">About me</Link>
        </Button>
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/contact">Contact me</Link>
        </Button>
        <Button variant="link" asChild className="h-20 w-20 text-white">
          <Link href="/blog">Blog</Link>
        </Button>
      </div>
    </main>
  );
}
