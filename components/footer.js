import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='footer'>
      <p>Copyright 2022</p>
      <div className="footer-menu">
        <Link href="https://etherscan.io/address/0xd9f6724f250f4da8453e3dd97d718872bf72c1da">Etherscan</Link>
        <Link href="#">CoinMarketCap</Link>
        <Link href="#">CoinGecko</Link>
      </div>
    </div>
  )
}
