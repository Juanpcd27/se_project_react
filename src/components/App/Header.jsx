import "./Header.css";
import headerlogo from "../../images/Logo.svg";
import userlogo from "../../images/Userlogo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  openItemModal,
  weatherData,
  openRegistrationModal,
  openLoginModal,
  isLoggedIn,
}) {
  const { userData } = React.useContext(CurrentUserContext);

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
        {isLoggedIn && userData ? (
          <>
            <button
              type="button"
              className="header__button-add"
              onClick={openItemModal}
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{userData.name}</p>
                <img
                  className="header__avatar"
                  src={userData.avatar}
                  alt={userData.name}
                ></img>
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              type="button"
              className="header__button-add"
              onClick={openRegistrationModal}
            >
              Sign up
            </button>
            <button
              type="button"
              className="header__button-add"
              onClick={openLoginModal}
            >
              Log in
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
