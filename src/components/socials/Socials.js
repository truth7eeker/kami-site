import React from "react";
import "./Socials.css";
import vk from "../../assets/vk-logo.svg";
import insta from "../../assets/insta-logo.svg";
import tele from "../../assets/tele-logo.svg";


function Socials() {
  return (
    <div className="socials">
      <h1>Мы в социальных сетях</h1>
      <p>Остались вопросы? Пишите нам любым удобным способом. Будем рады с Вами познакомиться.</p>
      <div className="socials__icons">
        <a href="https://vk.com/intellectualkids" target="_blank">
          <img src={vk} width="45"/>
        </a>
        <a href="" target="_blank">
          <img src={insta} width="45"/>
        </a>
        <a href="https://t.me/kamilyaramilevna" target="_blank">
          <img src={tele} width="45"/>
        </a>
      </div>
    </div>
  );
}

export default Socials;
