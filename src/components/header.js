import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../../static/images/logo/logo4.svg";

const Header = ({ siteTitle }) => (
  <header className="sticky">
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"Bitlingo"}>
            <img alt={"Logo"} src={logo} width="300" />
          </Link>
        </div>

        <div className={"get-started"}>
          <Link to="/lectures" title={"Bitlingo Vorträge"}>
            Alle Vorträge
          </Link>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
