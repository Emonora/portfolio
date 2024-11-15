import type { Post } from "@prisma/client";

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="my-4 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="mt-2 text-gray-700">{post.content}</p>
      <p className="mt-4 text-sm text-gray-500">
        Posted on {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogPost;
