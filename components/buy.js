import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='cards' id="buy">
      <h1 className='card-header'>How To Buy</h1>
      <p className='card-p'>
        FTX Classic Token is purchased and sold through Uniswap and will be listed in many CEXes as its community grows. FTX Classic Token is
        a decentralized experiment and we always incentivize the use of DEXs.
      </p>
      <div className="card-list">
        <div className="card1">
          <Image
            src="/metamask.svg"
            alt="check"
            width={63.23}
            height={58.62}
          />
          <h3>
            CREATE A METAMASK WALLET
          </h3>
          <p>
            Create a Meta Mask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive FTX Classic Tokens.
          </p>
        </div>
        <div className="card2">
          <Image
            src="/eth.svg"
            alt="check"
            width={41.28}
            height={67.23}
          />
          <h3>
            FUND WALLET WITH ETH
          </h3>
          <p>
            {"You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH."}
          </p>
        </div>
        <div className="card3">
          <Image
            src="/uniswap.svg"
            alt="check"
            width={58}
            height={67}
          />
          <h3>
            CONNECT TO UNISWAP
          </h3>
          <p>
            {"Access your wallet to Uniswap by clicking 'connect to a wallet' and selecting Meta Mask."}
          </p>
        </div>
        <div className="card4">
          <Image
            src="/logo.svg"
            alt="check"
            width={68}
            height={33}
          />
          <h3>
            SWAP ETH FOR FTTC
          </h3>
          <p>
            {"You can start swapping as soon as you have ETH available. Press 'select a token' and enter the token address or search for it on the tokens list."}
          </p>
        </div>
      </div>
    </div>
  )
}
