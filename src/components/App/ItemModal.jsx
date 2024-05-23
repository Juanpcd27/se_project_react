import "./ItemModal.css";

function ItemModal({ isOpen, card, closeModal, handleDeleteCardClick }) {
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
            <button
              className="modal__delete"
              type="submit"
              onClick={handleDeleteCardClick}
            >
              Delete item
            </button>
          </div>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
