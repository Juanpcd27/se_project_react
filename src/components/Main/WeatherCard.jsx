import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import weatherImage from "../../images/day/clear.png";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filteredOptions[0];

  return (
    <section className="weather__card">
      <p className="weather__text">{weatherData.temp.F}°F</p>
      <img
        className="weather__image"
        src={weatherImage}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition
        } weather`}
      ></img>
    </section>
  );
}

export default WeatherCard;
