import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"Bitlingo"}>
            <img alt={"Logo"} src={logo} width="200" />
          </Link>
        </div>

        <div className={"get-started"}>
          <Link to="/lectures" title={"Bitlingo Vorträge"}>
            Zu unseren Vorträgen
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
