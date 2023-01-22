import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  const [burger, setBurger] = useState(false)
  return (
    <header className="nav">
      <div className="navbar container">
        <div className="navbar__left">
          <NavLink to="/"><img className="navbar__left--logo" src="/img/logo.png" alt="navbar__left--logo" /></NavLink>
        </div>

        <div className="navbar__right">
          <ul className="navbar__right__content">
            <li className="navbar__right__content__item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : ''}>Marketplace</NavLink>
            </li>
            <li className="navbar__right__content__item">
              <NavLink to="/rankings" className={({ isActive }) => isActive ? 'activeLink' : ''}>Rankings</NavLink>
            </li>
            <li className="navbar__right__content__item">
              <NavLink to="#"  >Connect a wallet</NavLink>
            </li>
          </ul>

          <NavLink to="/create" className="differentBtn">
            <img src="img/User.png" alt="" /> Sign Up
          </NavLink>
        </div>
        <img onClick={() => setBurger(true)} className='burger' src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/burger-menu-@2x.svg" alt="" />
      </div>



      <ul className={`${burger ? "respNavbar" : "noneBurger"}`}>
        <button onClick={() => setBurger(false)}>
          <img className='burger' src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/burger-menu-@2x.svg" alt="" />
        </button>

        <li className="respNavbar__content__item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : ''}>Marketplace</NavLink>
        </li>
        <li className="respNavbar__content__item">
          <NavLink to="/rankings" className={({ isActive }) => isActive ? 'activeLink' : ''}>Rankings</NavLink>
        </li>
        <li className="respNavbar__content__item">
          <NavLink to="#"  >Connect a wallet</NavLink>
        </li>
        <li>
          <NavLink to="/create" className="differentBtn">
            <img src="img/User.png" alt="" /> Sign Up
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Navbar