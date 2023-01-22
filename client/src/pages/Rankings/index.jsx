import React, { useEffect } from 'react'
import "./Rankings.scss"
import Modal from "../../components/Modal"
import { useState } from 'react'
import axios from 'axios'

function Rankings() {

  let [modal, setModal] = useState(false)
  let [id, setId] = useState('')
  let [artist, setArtist] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/artist").then(res => {
      setArtist(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div className="rankings" >
      <div className="rankings__top">
        <div className="rankings__top__wrapper ">
          <h1>Top Creators</h1>
          <h3>Check out top ranking NFT artists on the NFT Marketplace.</h3>
          <div className="rankings__top__wrapper__tabs">
            <div className="rankings__top__wrapper__tabs">
              <div className="rankings__top__wrapper__tabs__tab activeTab tab">
                <h5>Today</h5>
              </div>
              <div className="rankings__top__wrapper__tabs__rtab tab">
                <h5>This Week</h5>
              </div>
              <div className="rankings__top__wrapper__tabs__rtab tab">
                <h5>This Month</h5>
              </div>
              <div className="rankings__top__wrapper__tabs__rtab tab">
                <h5>All Time</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rankings__content">
        <div className="rankings__content__title">
          <span>#</span>
          <span>Artist</span>
          <span>Change</span>
          <span>NFTs Sold</span>
          <span>Volume</span>
          <span>Action</span>
        </div>
        <div className="rankings__content__artists">
          {
            artist.map((artist, index) => {
              return (
                <div key={artist._id} className="rankings__content__artists__artist">
                  <div className='index'><span>{index}</span></div>
                  <div className='logo'>
                    <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-59@2x.png" alt="" />
                    <h1>{artist.userName}</h1>
                  </div>
                  <div className='change'><span >+{artist.change}%</span></div>
                  <div className='sold'><span >{artist.sold}</span></div>
                  <div className='volume'><span >{artist.volume} ETH</span></div>
                  <button onClick={() => {
                    setModal(true)
                    setId(artist._id)
                  }}>Add</button>
                </div>
              )
            })
          }
        </div>
      </div>

      <Modal modal={modal} id={id} setModal={setModal}  />
    </div >
  )
}

export default Rankings