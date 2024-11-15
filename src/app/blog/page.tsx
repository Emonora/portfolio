import BlogPost from "../_components/blogPost";
import prisma from "../lib/prisma";

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function Page() {
  const posts: Post[] = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto p-4 bg-black text-gray-500 h-screen w-screen">
      <h1 className="my-6 text-center text-3xl font-bold">My Blog</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
