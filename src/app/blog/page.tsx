import Link from "next/link";

//TODO: update styling for the blog page
//TODO: add navigation buttons to the bottom of the blog page

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
