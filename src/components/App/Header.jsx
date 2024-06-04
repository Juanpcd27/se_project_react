import "./Header.css";
import headerlogo from "../../images/Logo.svg";
import userlogo from "../../images/Userlogo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ openItemModal, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={headerlogo} alt="logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="switch__container">
        <ToggleSwitch />
        <button
          type="button"
          className="header__button-add"
          onClick={openItemModal}
        >
          + Add Clothes
        </button>
      </div>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img
            className="header__avatar"
            src={userlogo}
            alt="Terrence Tegegne"
          ></img>
        </div>
      </Link>
    </header>
  );
}

export default Header;
