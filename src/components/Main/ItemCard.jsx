import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import React, { useContext, useState } from "react";

function ItemCard({ item, onCardClick, handleCardLike, isLoggedIn }) {
  const { userData } = React.useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    handleCardLike(item);
  };

  const isLiked = item.likes.some((id) => id === userData._id);

  const itemLikeButtonClass = isLiked
    ? "card__like-button-active"
    : "card__like-button";

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      {isLoggedIn && (
        <button className={itemLikeButtonClass} onClick={handleLike}></button>
      )}
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      ></img>
    </li>
  );
}

export default ItemCard;
