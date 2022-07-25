import React from 'react';
const Header = () => {
    return(
        <nav className="navigator">
        <div className="leftNav">
          <div className="leftNavLogo">
              <h1>IzahTap.</h1>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Books</a></li>
              <li><a href="/">Sell your books</a></li>
            </ul>
          </div>
        </div>
        <div className="rightNav">
          <input type="text" placeholder="Search textbooks" />
        </div>
      </nav>
    );
}
export default Header;