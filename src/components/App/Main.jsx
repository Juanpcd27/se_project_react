import "./Main.css";
import WeatherCard from "../Main/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../Main/ItemCard";
import {
  CurrentTemperatureUnitContext,
  DummyComponent,
} from "../../contexts/CurrentTemperatureUnitContext";
import { useMemo, useContext } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherType = useMemo(() => {
    const temp = weatherData?.filteredData?.[currentTemperatureUnit] || 999;
    if (temp > 86) {
      return "hot";
    } else if (temp >= 66 && temp < 86) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherData]);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F}°F / You may want to wear:
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
