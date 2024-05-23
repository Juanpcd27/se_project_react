import React from "react";

function CurrentUse() {}

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

const DummyComponent = () => null;

export { CurrentTemperatureUnitContext, DummyComponent, CurrentUse };
