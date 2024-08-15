import "./ClothesSection.css";
import ItemCard from "../Main/ItemCard";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  onCardClick,
  clothingItems,
  openItemModal,
  isLoggedIn,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = clothingItems.owner === currentUser._id;

  return (
    <div className="clothes-section">
      <div className="clothes-info">
        <p className="clothes-section-title">Your Items</p>
        {isLoggedIn ? (
          <>
            <button
              className="clothes-add-button"
              type="button"
              onClick={openItemModal}
            >
              + Add new
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map(
          (item) =>
            item.owner === currentUser.userData._id && (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                handleCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            )
        )}
      </ul>
    </div>
  );
}

export default ClothesSection;
