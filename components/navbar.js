import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="ftxclassic logo"
            width={136}
            height={65}
          />
        </Link>
      </div>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="#buy">How To Buy</Link>
        <Link href="#contract">Contract</Link>
        <Link href="#socials">Socials</Link>
      </div>
    </div>
  )
}
