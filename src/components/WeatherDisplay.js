import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const cStyle = {
    color: temperature > 20 ? "red" : "blue",
  };
  return (
    <div>
      <p style={cStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
