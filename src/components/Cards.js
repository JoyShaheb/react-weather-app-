import React from "react";

const Cards = ({ weather, data, label, unit, icon }) => {
  return (
    <div className="item-card">
      {weather ? (
        <img
          src={`http://openweathermap.org/img/wn/${weather
            ?.filter((x, y) => y === 0)
            ?.map((x) => x.icon)}@2x.png`}
          alt=""
        />
      ) : (
        <i className={`fs-2 ${icon}`}></i>
      )}
      <span className="fs-6 fw-bold">
        {data} {unit}
      </span>
      <span className="fw-lighter text-secondary">{label}</span>
    </div>
  );
};

export default Cards;
