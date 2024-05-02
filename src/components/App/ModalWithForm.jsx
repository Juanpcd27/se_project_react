import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  closeModal,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__container">
        <button
          onClick={closeModal}
          className="modal__close"
          type="button"
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name="modal">
          {children}
          <button className="button__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
