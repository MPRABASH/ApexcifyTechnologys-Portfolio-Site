import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [Shownav, Setshownav] = useState(false);

  return (
    <header className='header'>
      <h1>Hello !</h1>

      {/* Desktop Menu */}
      <ul className='desktop-menu'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/projects'>
          <li>Projects</li>
        </Link>
        <Link to='/achievement'>
          <li>Achievements</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>

      {/* Hamburger Icon */}
      <div className='humburger-menu'>
        <IoMenu onClick={() => Setshownav(!Shownav)} />
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${Shownav ? "show" : ""}`}>
        <ul>
          <Link to='/' onClick={() => Setshownav(false)}>
            <li>Home</li>
          </Link>
          <Link to='/about' onClick={() => Setshownav(false)}>
            <li>About</li>
          </Link>
          <Link to='/projects' onClick={() => Setshownav(false)}>
            <li>Projects</li>
          </Link>
          <Link to='/achievement' onClick={() => Setshownav(false)}>
            <li>Achievements</li>
          </Link>
          <Link to='/contact' onClick={() => Setshownav(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
