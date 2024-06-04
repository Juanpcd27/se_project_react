import "./Main.css";
import WeatherCard from "../Main/WeatherCard";
import ItemCard from "../Main/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useMemo, useContext } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.weather?.temp?.[currentTemperatureUnit] || 999;

  const weatherType = useMemo(() => {
    if (temp > 86) {
      return "hot";
    } else if (temp >= 66 && temp < 86) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherData]);

  // temp.C > 30

  // && temp.C >= 19 && temp.C < 30
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
              return item.weather === weatherType;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
