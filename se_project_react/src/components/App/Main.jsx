import "./Main.css";
import WeatherCard from "../Main/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../Main/ItemCard";

function Main({ weatherData, handleCardClick }) {
  return (
    <main className="">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F}°F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
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
