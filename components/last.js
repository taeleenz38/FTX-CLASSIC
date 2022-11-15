import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {



  return (
    <div className='last' >
      <div className="last-section">
        <div className='logoemail'>
          <Image
            src="/logo white.svg"
            alt="white logo"
            width={356}
            height={170}
          />

          <h5 className='email'>
            <Image
              src="/email.png"
              alt="email logo"
              width={40}
              height={40}
            />
            team@ftxclassic.io
          </h5>

        </div>

        <div className="ending-message" id="socials">
          <h3>Join a Thriving Community</h3>
          <p>Our community grows stronger every day. Please follow our socials to get the most up-to-date, accurate FTX Classic Token information.</p>
          <div className="socials" >
            <Link href="https://discord.gg/flur" target="_blank" rel="noopener noreferrer">
              <Image
                id="discord"
                src="/discord.svg"
                alt="discord icon"
                width={50}
                height={38.24}
              />
            </Link>
            <Link href="https://twitter.com/FTXClassicToken" target="_blank" rel="noopener noreferrer">
              <Image
                id="twitter"
                src="/twitter.svg"
                alt="twitter icon"
                width={45}
                height={38}
              />
            </Link>
            <Link href="https://t.me/ftxclassicentry" target="_blank" rel="noopener noreferrer">
              <Image
                id="telegram"
                src="/telegram.svg"
                alt="telegram icon"
                width={38}
                height={38}
              />
            </Link>
            <Link href="https://www.reddit.com/user/FtxClassicToken" target="_blank" rel="noopener noreferrer">
              <Image
                id="reddit"
                src="/reddit.svg"
                alt="reddit icon"
                width={38}
                height={38}
              />
            </Link>
            <Link href="https://youtube.com/channel/UCDhYh43sFHyGp7P3qE5CPNQ" target="_blank" rel="noopener noreferrer" id="#youtube-div">
              <Image
                id="youtube"
                src="/youtube.svg"
                alt="youtube icon"
                width={60}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>

      <h5 className="email2">
        <Image
          src="/email.png"
          alt="email logo"
          width={40}
          height={40}
        />
        team@ftxclassic.io
      </h5>

      <div className="contract" id="contract">
        <h1>Contract Address</h1>
        <h2 value="0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da">0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da</h2>
        <button onClick={() => navigator.clipboard.writeText('0xD9F6724F250F4dA8453e3DD97d718872BF72C1Da')}>Copy to clipboard</button>
      </div>
    </div>
  )
}
