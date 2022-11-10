import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='pitch'>
      <div className="pitch-head">
        <h2>When billionaires get caught up in pissing contests, it can tank the market...</h2>
      </div>
      <div className="pitch-info">
        <div className="pitch-1">
          <h2>
            {"...but FTTC is your bonafide urine umbrella and provides these exceptional benefits"}
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
              {"Scare billionaires because you'll be joining them on the golf course"}
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
              Simply the dankest memecoin since CumRocket
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
