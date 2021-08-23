import React from "react"
import facebook from "../../images/social/facebook.svg"
import twitter from "../../images/social/twitter.svg"
import instagram from "../../images/social/instagram.svg"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Sammy Muchiri</h3>
        <p className="footer-text">All Rights Reserved</p>
      </div>
      {/* <div className="footer-icons">
        <a href="https://sammymuchiri.gatsbyjs.io" className="link">
          <img className="icon" src={facebook} alt="facebook" />
        </a>
        <a href="https://sammymuchiri.gatsbyjs.io" className="icon-link">
          <img className="icon" src={twitter} alt="twitter" />
        </a>
        <a href="https://sammymuchiri.gatsbyjs.io" className="icon-link">
          <img className="icon" src={instagram} alt="instagram" />
        </a>
      </div> */}
    </div>
  )
}
