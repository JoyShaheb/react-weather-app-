import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import LoaderComponent from "./components/LoaderComponent";
import ResultComponent from "./components/ResultComponent";
import SearchBar from "./components/SearchBar";
const App = () => {
  let [city, setCity] = useState("");
  let [result, setResult] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [status, setStatus] = useState(true);

  console.log(result);
  let base = `https://api.openweathermap.org/data/2.5/weather`;
  let password = process.env.REACT_APP_WEATHER_APP_PASSWORD;
  let units = `metric`;
  let api = `${base}?q=${city}&units=${units}&appid=${password}`;

  useEffect(() => {
    if (city === "") return;
    else {
      (async () => {
        setResult([]);
        setIsLoading(true);

        return await axios
          .get(api)
          .then((res) => {
            setIsLoading(false);
            setStatus(true);
            setResult(res?.data);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
            setStatus(false);
          });
      })();
    }
  }, [city]);

  return (
    <div className="App text-capitalize">
      <h4 className="text-center">weather app</h4>
      <SearchBar setCity={setCity} />
      <LoaderComponent
        result={result}
        city={city}
        isLoading={isLoading}
        status={status}
      />
      {result.length !== 0 ? <ResultComponent result={result} /> : null}
    </div>
  );
};

export default App;
