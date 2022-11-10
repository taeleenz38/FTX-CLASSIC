import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='pitch'>
      <div className="pitch-head">
        <h2>FTTC is here for those hurt by the recent market conditions... </h2>
      </div>
      <div className="pitch-info">
        <div className="pitch-1">
          <h2>
            {"...the FTTC community is here to stay - join now before it's too late"}
          </h2>
        </div>
        <div className="pitch-2">
          <div className="pitch-list">
            <Image
              src="/check.svg"
              alt="check"
              width={45}
              height={45}
            />
            <p>
              Grow generational wealth, even in a bear market
            </p>
          </div>
          <div className="pitch-list">
            <Image
              src="/check.svg"
              alt="check"
              width={45}
              height={45}
            />
            <p>
              {"Join a based community full of chads and good vibes"}
            </p>
          </div>
          <div className="pitch-list">
            <Image
              src="/check.svg"
              alt="check"
              width={45}
              height={45}
            />
            <p>
              A truly decentralized, community owned token
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
