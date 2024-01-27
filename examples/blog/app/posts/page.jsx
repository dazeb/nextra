import Link from 'next/link.js'
import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from './get-posts.js'

export const metadata = {
  title: 'Posts'
}

export default function PostsPage() {
  const allTags = getTags().reduce((acc, curr) => {
    acc[curr] ??= 0
    acc[curr] += 1
    return acc
  }, Object.create(null))

  return (
    <>
      <h1>{metadata.title}</h1>
      <div
        className="_not-prose"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
      >
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {getPosts().map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </>
  )
}