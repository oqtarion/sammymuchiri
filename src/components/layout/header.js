import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const Header = ({ siteTitle }) => (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
    className="header"
  >
    <header className="header-inner">
      <div className="logo">
        <Link className="link" to="/#home">
          {siteTitle}
        </Link>
      </div>
      <nav className="nav">
        <div className="tabs">
          <Link to="/#about" className="link">
            About
          </Link>
        </div>
        <div className="tabs">
          <Link className="link" to="/#projects">
            Projects
          </Link>
        </div>
      </nav>
      <div className="contact">
        <Link className="link" to="/#connect">
          Connect
        </Link>
      </div>
    </header>
  </motion.div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
