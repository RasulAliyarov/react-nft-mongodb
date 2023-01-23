import React from 'react'
import { useEffect } from 'react'
import NFT from "../../components/NFT"
import "./Marketplace.scss"
import axios from "axios"
import { useState } from 'react'

function Markteplace() {
  const [nft, setNft] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/api/nft").then(res => {
      setNft(res.data)
      console.log(res.data)
    })
  }, [])
  return (
    <div className='marketplace '>
      <div className="marketplace__top">
        <div className="marketplace__top__wrapper">

          <h1>Browse Marketplace</h1>
          <h3>Browse through more than 50k NFTs on the NFT Marketplace.</h3>
          <input type="text" placeholder='Search your favourite NFTs' />
        </div>
      </div>

      <div className="marketplace__tabs">
        <div className="marketplace__tabs__wrapper">

          <div className="marketplace__tabs__wrapper__left tab">
            <h5>Nfts</h5> <span>{nft.length}</span>
          </div>
          <div className="marketplace__tabs__wrapper__right tab">
            <h5>Collections</h5> <span>67</span>
          </div>
        </div>
      </div>

      <div className="marketplace__content">
        <div className="marketplace__content__cards">
          {
            nft.map(nft => {
              return <NFT key={nft._id} nft={nft}  />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Markteplace