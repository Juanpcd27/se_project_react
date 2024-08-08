import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  CurrentTemperatureUnitContext,
  DummyComponent,
} from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import ItemCard from "../Main/ItemCard";
import {
  getItems,
  addItems,
  deleteCards,
  getUserInfo,
  editProfileInfo,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { setToken, getToken, removeToken } from "../../utils/token";
import { EditProfileModal } from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
    avatar: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const openItemModal = () => {
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const openRegistrationModal = () => {
    setActiveModal("register");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openEditModal = () => {
    setActiveModal("editprofile");
  };

  const handleDeleteCardClick = (card) => {
    deleteCards(selectedCard._id)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(filteredCards);
        closeModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleCardLike = ({ id, isLiked }) => {
    const jwt = localStorage.getItem("jwt");

    !isLiked
      ? addCardLike(id, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleRegistration = ({ username, email, password, avatar }) => {
    auth
      .userRegistration(username, password, email, avatar)
      .then(() => {
        openLoginModal();
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!username || !password) {
      return;
    }

    auth
      .userAuthorization(email, password)
      .then((data) => {
        if (data.jwt) {
          setToken(data.jwt);
          setUserData(data.user);
          setIsLoggedIn(true);
          navigate("/profile");
        }
      })
      .catch(console.error);
  };

  const handleEditProfile = (username, avatar) => {
    const jwt = getToken();
    editProfileInfo({ username, avatar, jwt })
      .then((data) => {
        setUserData(data);
        closeModal();
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    getUserInfo(jwt)
      .then(({ _id, username, email, avatar, name }) => {
        setIsLoggedIn(true);
        setUserData({ _id, username, email, avatar, name });
        navigate("/profile");
      })
      .catch(console.error);
  }, [isLoggedIn]);

  const addItemSubmit = ({ name, imageUrl, weather, jwt }) => {
    if (!jwt) {
      return;
    }

    addItems({ name, imageUrl, weather, jwt })
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        closeModal();
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={{ userData }}>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="app__content">
            <Header
              openItemModal={openItemModal}
              openRegistrationModal={openRegistrationModal}
              openLoginModal={openLoginModal}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleDeleteCardClick={handleDeleteCardClick}
                    closeModal={closeModal}
                    isLoggedIn={isLoggedIn}
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  // <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    openItemModal={openItemModal}
                    closeModal={closeModal}
                    userData={userData}
                    isLoggedIn={isLoggedIn}
                    handleLogout={handleLogout}
                    openEditModal={openEditModal}
                  />
                  // </ProtectedRoute>
                }
              />

              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
            </Routes>

            <Footer />
          </div>

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            closeModal={closeModal}
            onAddItem={addItemSubmit}
          />

          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            closeModal={closeModal}
            handleDeleteCardClick={handleDeleteCardClick}
            isLoggedIn={isLoggedIn}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            closeModal={closeModal}
            handleRegistration={handleRegistration}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            closeModal={closeModal}
            handleLogin={handleLogin}
          />
          <EditProfileModal
            isOpen={activeModal === "editprofile"}
            closeModal={closeModal}
            handleEditProfile={handleEditProfile}
            handleLogout={handleLogout}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
      //{" "}
    </CurrentUserContext.Provider>
  );
}

export default App;
