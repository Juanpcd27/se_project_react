import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import weatherImage from "../../images/day/clear.png";
import {
  CurrentTemperatureUnitContext,
  DummyComponent,
} from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filteredOptions[0];

  return (
    <section className="weather__card">
      <p className="weather__text">{currentTemperatureUnit}</p>
      <img
        className="weather__image"
        src={weatherImage} //weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition
        } weather`}
      ></img>
    </section>
  );
}

export default WeatherCard;
