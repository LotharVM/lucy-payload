import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import Link from 'next/link'

import { SearchIcon } from 'lucide-react'
import { CMSLink } from '@/components/Link'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between">
        <Link href="/">Lucia</Link>
        <nav className="flex gap-3 items-center">
          {headerData?.navItems?.map(({ link }, i) => {
            return <CMSLink key={i} {...link} className="" />
          })}
          <Link href="/search">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 " />
          </Link>
        </nav>
      </div>
    </header>
  )
}
