import React, { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

let c = 0;

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    conditions: "",
  });

  useEffect(() => {
    const weatherData = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherData);
  }, []);
  return (
    <div id="main">
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
