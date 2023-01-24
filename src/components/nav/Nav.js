import React from "react";
import './Nav.css';
import logo from "../../assets/logo.png";
import { FcPhoneAndroid } from "react-icons/fc";
import { Link } from 'react-scroll'


function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="intellectual-kids-logo" className="nav__logo" />
        </li>
        <li><Link to="about" offset={-50} duration={500} >О центре</Link></li>
        <li><Link to="courses" offset={-50} duration={500} >Программы</Link></li>
        <li><Link to="socials" offset={-50} duration={500} >Контакты</Link></li>
        <li className="nav__tel">
          <FcPhoneAndroid />
          <a href="tel:89176048821">8 917 604 88 21</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
