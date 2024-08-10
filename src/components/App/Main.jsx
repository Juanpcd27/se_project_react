import "./Main.css";
import WeatherCard from "../Main/WeatherCard";
import ItemCard from "../Main/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useMemo, useContext } from "react";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  handleDeleteCardClick,
  isLoggedIn,
  handleCardLike,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temp?.[currentTemperatureUnit] || 999;

  return (
    <main className="main">
      <WeatherCard weatherData={temp} />
      <section className="cards">
        <p className="cards__text">
          Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  handleDeleteCardClick={handleDeleteCardClick}
                  isLoggedIn={isLoggedIn}
                  onCardLike={handleCardLike}
                  handleCardLike={handleCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
