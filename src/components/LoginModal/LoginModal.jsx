import { Link } from "react-router-dom";
import React, { useState } from "react";
import ModalWithForm from "../App/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  closeModal,
  isOpen,
  handleLogin,
  openRegistrationModal,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    handleLogin(data);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      closeModal={closeModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
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

      <button
        type="button"
        className="header__button-add-sign"
        onClick={openRegistrationModal}
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
