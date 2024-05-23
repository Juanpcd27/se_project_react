import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

const DummyComponent = () => null;

export { CurrentTemperatureUnitContext, DummyComponent };
