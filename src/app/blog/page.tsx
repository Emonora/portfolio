import Link from "next/link";

export default function Blog() {
  return (
    <main className="gap-4 p-4">
      <div className="text-center">
        <h1>Blog</h1>
        <p>Welcome to my blog!</p>
      </div>
      <div className="flex flex-col gap-4 pt-4 text-center">
        <div>
          <Link href="/blog/first/" className="underline">
            My First Post
          </Link>
        </div>
      </div>
    </main>
  );
}
