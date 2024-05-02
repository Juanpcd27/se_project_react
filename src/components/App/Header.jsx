import "./Header.css";
import headerlogo from "../../images/Logo.svg";
import userlogo from "../../images/Userlogo.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <header className="header">
        <img className="header__logo" src={headerlogo} alt="logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <button
          type="button"
          className="header__button-add"
          onClick={handleAddClick}
        >
          + Add Clothes
        </button>
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img
            className="header__avatar"
            src={userlogo}
            alt="Terrence Tegegne"
          ></img>
        </div>
      </header>
    </>
  );
}

export default Header;
