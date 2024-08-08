import React, { useState } from "react";
import ModalWithForm from "../App/ModalWithForm";

const RegisterModal = ({ closeModal, isOpen, handleRegistration }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onRegistration = (e) => {
    e.preventDefault();
    handleRegistration(data);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={onRegistration}
    >
      <label htmlFor="name" className="modal__label">
        <h3 className="modal__label-title">Email</h3>
        <input
          className="modal__input modal__input-name"
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          required
          value={data.email}
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="password" className="modal__label">
        <h3 className="modal__label-title">Password</h3>

        <input
          className="modal__input modal__input-image"
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          required
          value={data.password}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="name" className="modal__label">
        <h3 className="modal__label-title">Name</h3>
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
        <h3 className="modal__label-title">Avatar URL</h3>

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

export default RegisterModal;
