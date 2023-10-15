import React from "react";
import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import profileSVG from "../../pictures/profile.svg";
import toBuySVG from "../../pictures/toBuy.svg";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <div className={classes.container}>
        <h1 className={classes.header}>Мусор для одного - золото для другого!</h1>
        <p className={classes.description}>Покупайте и продавайте вместе с Fstore</p>
        <div>
          <NavLink to={'/profile'} className={classes.card1}>
            Ваш профиль
            <img alt="profile" src={profileSVG} className={classes.cardImage} />
          </NavLink >
          <NavLink to={'/catalog'} className={classes.card2}>
            К покупкам
            <img alt="buy" src={toBuySVG} className={classes.cardImage} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
