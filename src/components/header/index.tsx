'use client'

import Link from 'next/link'
import { Cpu } from '@phosphor-icons/react'
import { Links } from './links'

import { useState } from 'react'

export function Header (): JSX.Element {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="py-6 px-6 sticky top-0 bg-zinc-950 border-b border-zinc-900">
      <header className="flex justify-between items-center container mx-auto">
        <h1 title="PingO">
          <Link href="/" className="flex items-center">
            <Cpu size={32} color="#8257e5" weight="duotone" className={isHover ? 'animate-pulse' : 'hover:animate-pulse'} />
            <span className="ml-2 font-bold" onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>PINGO</span>
          </Link>
        </h1>

        <nav>
          <ul className="flex space-x-6">
            {Links.map(({ name, link }) => (
              <li key={name}>
                <Link href={link} className="font-bold hover:text-zinc-600 transition-colors">{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#">
          <button className="bg-[#8257e5] hover:bg-[#683cbc] transition-colors text-zinc-100 font-bold rounded-full py-2.5 px-6">HIRE ME!</button>
        </Link>
      </header>
    </div>
  )
}
