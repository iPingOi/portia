'use client'

import { Bug } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Error (): JSX.Element {
  return (
    <main className="flex justify-center items-center flex-col h-[calc(100vh_-_93px)]">
      <h2>
        <Bug size={64} color="#8257e5" weight="duotone" className="animate-pulse" />
      </h2>
      <span className="mt-3 font-bold">Oops, could not find requested resource.</span>

      <Link href="/" className="text-zinc-100">Go Home!</Link>

      {/* <span className="mt-3">
        View <Link href="/">all posts</Link>
      </span> */}
    </main>
  )
}
