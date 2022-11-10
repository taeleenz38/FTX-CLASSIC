import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='content'>
      <div className="content-info">
        <div className="content-message">
          <h2><span>{"FTX Classic (FTTC)"}</span> is the original backbone of the FTX ecosystem</h2>
        </div>
        <div className="content-btns">
          <Link className="buy-btn" href="https://www.dextools.io/app/en/ether/pair-explorer/0x7f44f5040a913411c47b1ec208d4913a30aeff9d" target="_blank" rel="noopener noreferrer">BUY NOW</Link>
          <Link href="https://etherscan.io/token/0xd9f6724f250f4da8453e3dd97d718872bf72c1da" target="_blank" rel="noopener noreferrer">CONTRACT</Link>
        </div>
      </div>
    </div>
  )
}
