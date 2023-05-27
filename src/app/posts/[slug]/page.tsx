import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export const generateStaticParams = async (): Promise<Array<{ slug: string }>> => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }): { title: string } => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (post == null) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

export default function PostLayout ({ params }: { params: { slug: string } }): JSX.Element {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (post == null) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'd/MM/yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}
