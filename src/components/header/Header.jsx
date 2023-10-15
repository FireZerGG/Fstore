import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../pictures/logo.svg";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <NavLink to={"/"} className={classes.logo}>
          <img alt="logo" src={logo} className={classes.logo} />
        </NavLink>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
