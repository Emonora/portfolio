import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Blog() {
  return (
    <main className="gap-4 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p>Welcome to my blog!</p>
      </div>
      <div className="flex flex-col gap-4 pt-4 text-center">
        <div>
          <Link href="/blog/first/" className="underline">
            My First Post
          </Link>
        </div>
        <div>
          <Link href="/blog/stack/" className="underline">
            Stacks
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link" asChild className="mt-4 text-white">
          <Link href="/about">About</Link>
        </Button>
      </div>
    </main>
  );
}
