import React from "react";
import Cards from "./Cards";
import TimeZone from "./TimeZone";

const ResultComponent = ({ result }) => {
  let { dt, id, main, name, sys, timezone, wind, weather } = result;
  return (
    <div className="card-parent">
      <Cards
        weather={weather}
        data={main?.temp}
        label="Temperature"
        unit="° C"
      />
      <Cards data={wind?.speed} label="Wind" unit="km/h" icon="bi bi-wind" />
      <Cards
        data={main?.humidity}
        label="Humidity"
        unit="%"
        icon="bi bi-droplet"
      />
      <Cards
        data={main?.pressure}
        label="Pressure"
        unit="hPa"
        icon="bi bi-water"
      />

      <Cards
        data={<TimeZone input={sys?.sunrise} timezone={timezone} />}
        label="Sun Rise"
        icon="bi bi-sunrise"
      />
      <Cards
        data={<TimeZone input={sys?.sunset} timezone={timezone} />}
        label="Sun Set"
        icon="bi bi-sunset"
      />
    </div>
  );
};

export default ResultComponent;
