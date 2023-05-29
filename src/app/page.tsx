'use client'

import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

import { Article } from '@/components/article'

// Loading test
// async function getData (): Promise<unknown> {
//   return await new Promise((resolve) => setTimeout(resolve, 10000))
// }

// export default async function Home (): Promise<JSX.Element>
export default function Home (): JSX.Element {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  // Loading test
  // await getData()

  return (
    <div className="mx-auto max-w-xl py-8" id="home">
      <h1 className="mb-8 text-center text-2xl font-black">Blog</h1>
      {posts.map((post, idx) => (
        <Article key={idx} {...post} />
      ))}
    </div>
  )
}
