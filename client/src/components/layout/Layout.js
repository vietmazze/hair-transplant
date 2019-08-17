import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <Link to='#' class='brand-logo'>
          Logo
        </Link>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <Link to='/youtuber'>Youtubers</Link>
          </li>
          <li>
            <Link to='badges.html'>Transplant Doctors</Link>
          </li>
          <li>
            <Link to='collapsible.html'>JavaScript</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Layout;
