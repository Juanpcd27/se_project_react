import React, { useState } from "react";
import ModalWithForm from "../App/ModalWithForm";

export const EditProfileModal = ({ isOpen, closeModal, handleEditProfile }) => {
  const [data, setData] = useState({
    username: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(data);
    closeModal();
  };
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        <h3 className="modal__label-title">Name *</h3>
        <input
          className="modal__input modal__input-name"
          type="text"
          name="username"
          placeholder="Name"
          id="username"
          required
          value={data.username}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="avatar" className="modal__label">
        <h3 className="modal__label-title">Avatar *</h3>

        <input
          className="modal__input modal__input-image"
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          id="avatar"
          required
          value={data.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};
