import "./SideBar.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ handleLogout, openEditModal }) {
  const { userData } = React.useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__title">
        <img
          className="sidebar__avatar"
          src={userData.avatar}
          alt="default avatar"
        />
        <p className="sidebar__username">{userData.name}</p>
      </div>
      <button
        type="button"
        className="sidebar__profile-button"
        onClick={openEditModal}
      >
        Change profile data
      </button>
      <button type="button" className="sidebar__logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default SideBar;
