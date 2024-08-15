import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  onCardClick,
  clothingItems,
  openItemModal,
  closeModal,
  onAddItem,
  isLoggedIn,
  handleLogout,
  openEditModal,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = clothingItems.owner === currentUser._id;

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleLogout={handleLogout} openEditModal={openEditModal} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          openItemModal={openItemModal}
          closeModal={closeModal}
          onAddItem={onAddItem}
          isLoggedIn={isLoggedIn}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
