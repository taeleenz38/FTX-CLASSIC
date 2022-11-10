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
          <Link className="buy-btn" href="#">BUY NOW</Link>
          <Link href="#">CONTRACT</Link>
        </div>
      </div>
    </div>
  )
}
