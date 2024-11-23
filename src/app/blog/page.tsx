'use client';

import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

interface Post {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch all blog posts
    const fetchPosts = async () => {
      const query = '*[_type == "post"]{title, slug, publishedAt}';
      const result = await client.fetch(query);
      setPosts(result);
    };
    void fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.slug.current} className="mb-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <a
              href={`/blog/posts/${post.slug.current}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
