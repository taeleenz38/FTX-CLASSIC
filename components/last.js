import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="last-section">
        <Image
          src="/logo white.svg"
          alt="white logo"
          width={356}
          height={170}
        />

        <div className="ending-message">
          <h3>Join a Thriving Degen Community</h3>
          <p>Our community grows stronger every day. Please follow our socials to get the most up-to-date, accurate FTX Classic Token information.</p>
          <div className="socials">
            <Link href="https://discord.gg/flur">
              <Image
                src="/discord.svg"
                alt="discord icon"
                width={50}
                height={38.24}
              />
            </Link>
            <Link href="https://twitter.com/FTXCLASSIC">
              <Image
                src="/twitter.svg"
                alt="twitter icon"
                width={45}
                height={38}
              />
            </Link>
            <Link href="https://t.me/ftxclassicentry">
              <Image
                src="/telegram.svg"
                alt="telegram icon"
                width={38}
                height={38}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="contract">
        <h1>Contract</h1>
        <h2>0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da</h2>
      </div>
    </div>
  )
}
