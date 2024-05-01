import "./ItemModal.css";

function ItemModal({ activeModal, card, closeModal }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__container modal__container-preview">
        <button
          onClick={closeModal}
          className="modal__close modal__close-preview"
          type="button"
        ></button>
        <img
          src={card.link}
          className="modal__image modal__image-preview"
          alt=""
        ></img>
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
