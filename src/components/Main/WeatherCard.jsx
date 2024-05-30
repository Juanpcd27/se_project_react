import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import weatherImage from "../../images/day/clear.png";
import {
  CurrentTemperatureUnitContext,
  DummyComponent,
} from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  // const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  // // const weatherType = useMemo(() => {
  // //   const temp = weatherData?.filteredData?.[currentTemperatureUnit] || 999;
  // //   if (temp > 86) {
  // //     return "hot";
  // //   } else if (temp >= 66 && temp < 86) {
  // //     return "warm";
  // //   } else if (temp <= 65) {
  // //     return "cold";
  // //   }
  // // }, [weatherData]);

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
        src={weatherImage} //weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition
        } weather`}
      ></img>
    </section>
  );
}

export default WeatherCard;
