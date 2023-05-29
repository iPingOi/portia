'use client'

import { Cpu } from '@phosphor-icons/react'

export default function Loading (): JSX.Element {
  return (
    <div className="flex justify-center items-center flex-col h-[calc(100vh_-_93px)]">
      <Cpu size={64} weight="duotone" className="text-[#8257e5] animate-pulse mb-3" />
      <span className="font-bold">Loading content, please wait!</span>
    </div>
  )
}
