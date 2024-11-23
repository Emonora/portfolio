"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';  // From next/navigation
import { client } from '~/app/lib/sanity';
import { PortableText } from '@portabletext/react';

interface Post {
  title: string;
  body: never[];
  publishedAt: string;
}

export default function PostPage () {
  const [post, setPost] = useState<Post | null>(null);
  const pathname = usePathname();  // Get the current path
  const slug = pathname?.split('/').pop();  // Extract the slug from the URL path

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        body,
        publishedAt
      }`;
      const result: Post | null = await client.fetch(query, { slug });
      setPost(result);
    };
    void fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className="mt-6">
        <PortableText value={post.body} />
      </div>
    </div>
  );
};

