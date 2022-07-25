import React from 'react';
import profile from '../Assets/Ellipse 8.png';
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
          <a href='/' id='pht'>
            <img src={profile} />
          </a>
        </div>
      </nav>
    );
}
export default Header;