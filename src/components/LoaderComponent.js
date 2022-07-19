import React from "react";

const LoaderComponent = ({ status, isLoading, city, result }) => {
  let { name, sys } = result;
  return (
    <h5 className="text-center text-capitalize">
      {/* make a flow chart here later on */}
      {city === ""
        ? "Search for a city"
        : isLoading
        ? "loading, please wait...."
        : status
        ? `${name}, ${sys?.country}`
        : "City not found"}
    </h5>
  );
};

export default LoaderComponent;
