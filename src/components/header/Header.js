import React from "react";
import "./Header.css";
import introPic from "../../assets/intro-pic.jpg";
import Nav from "../nav/Nav";


function Header() {
  return (
    <header className="header">
      <Nav />
      <div className="header__intro">
        <div className="intro__text">
          <div>
            <h2>Обучаемся результативно</h2>
            <h2>Мыслим <span>творчески</span></h2>
          </div>
          <div>
            <h3>Детский развивающий центр</h3>
            <div className="center__name">Intellectual Kids</div>
          </div>
        </div>
        <div><img className="intro__pic" src={introPic} /></div>
      </div>
    </header>
  );
}

export default Header;
