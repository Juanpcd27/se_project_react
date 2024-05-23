import React, { useState } from "react";
import ModalWithForm from "../App/ModalWithForm";

const AddItemModal = ({ closeModal, isOpen, onAddItem }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [url, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, url });
  };
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        <h3 className="modal__label-title">Name</h3>
        <input
          className="modal__input modal__input-name"
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        <h3 className="modal__label-title">Image</h3>

        <input
          className="modal__input modal__input-image"
          type="url"
          name="url"
          placeholder="Image URL"
          id="imageUrl"
          required
          value={url}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="type"
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="type"
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="type"
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
