import { PropsWithChildren } from 'react'
import Link from 'next/link'
import Auth from './Auth'

interface NavbarLinkProps {
  href: string
}

function NavbarLink({ href, children }: PropsWithChildren<NavbarLinkProps>) {
  return (
    <Link href={href}>
      <div className="laptop:text-4xl tablet:text-2xl mobile:text-xs font-bold text-blue-500 hover:scale-105 hover:text-white hover:cursor-pointer">
        {children}
      </div>
    </Link>
  )
}

export default function Navbar() {
  return (
    <div
      className="flex flex-row laptop:gap-10 tablet:gap-5 mobile:gap-2 
      laptop:py-3 tablet:py-5 mobile:py-2 
      font-sans items-center"
    >
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/case1">Case 1</NavbarLink>
      <NavbarLink href="/case2">Case 2</NavbarLink>
      <NavbarLink href="/case3">Case 3</NavbarLink>
      <Auth />
    </div>
  )
}
