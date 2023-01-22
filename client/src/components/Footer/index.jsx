import React from 'react'
import "./Footer.scss"
function index() {
    return (
        <footer className="app__footer">
            <div className="app__footer__content container">
                <div className="app__footer__content__right">
                    <a href="#"><img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg" alt="NFT Loqo" />
                    <img style={{marginLeft: "10px"}} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-1@2x.svg" alt="" />
                    </a>
                    <p className="app__footer__content__right__text">NFT marketplace UI created with Anima for Figma.</p>
                    <p className="app__footer__content__right__joinour">Join our community</p>
                    <div className="app__footer__content__right__icon">
                        <a href="#">
                            <img src="img/icon/DiscordLogo.svg" alt="Discord" />
                        </a>
                        <a href="#">
                            <img src="img/icon/YoutubeLogo.svg" alt="Discord" />
                        </a>
                        <a href="#">
                            <img src="img/icon/TwitterLogo.svg" alt="Discord" />
                        </a>
                        <a href="#">
                            <img src="img/icon/InstagramLogo.svg" alt="Discord" />
                        </a>
                    </div>
                </div>
                <div className="app__footer__content__middle">
                    <h4 className="app__footer__content__middle__title">Explore</h4>
                    <ul>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Rankings</a></li>
                        <li><a href="#">Connect a wallet</a></li>
                    </ul>
                </div>
                <div className="app__footer__content__left">
                    <h4>Join our weekly digest</h4>
                    <p>Get exclusive promotions & updates straight to your inbox.</p>
                    <div>
                        <input type="text" placeholder="Enter your email here" />
                        <button><img src="./image/EnvelopeSimple.png" alt="" /> Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="app__footer__content__bottom container">
                <span>Ⓒ NFT Market. Use this template freely.</span>
            </div>
        </footer>
    )
}

export default index