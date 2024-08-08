import "./ItemModal.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({
  isOpen,
  card,
  closeModal,
  handleDeleteCardClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "modal__delete_visible" : "modal__delete_hidden"
  }`;

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__container modal__container-preview">
        <button
          onClick={closeModal}
          className="modal__close modal__close-preview"
          type="button"
        ></button>
        <img
          src={card.imageUrl}
          className="modal__image modal__image-preview"
          alt={card.name}
        ></img>
        <div className="modal__footer">
          <div className="modal__info">
            <h2 className="modal__caption">{card.name}</h2>
            {isLoggedIn ? (
              <>
                <button
                  className={itemDeleteButtonClassName}
                  type="submit"
                  onClick={handleDeleteCardClick}
                >
                  Delete item
                </button>
              </>
            ) : (
              <></>
            )}
          </div>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
