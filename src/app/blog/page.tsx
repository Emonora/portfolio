import BlogPost from '../_components/blogPost'
import prisma from '../lib/prisma'

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
}

const Page = async () => {
  const posts: Post[] = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">My Blog</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Page
