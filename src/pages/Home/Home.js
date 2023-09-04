import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { fetchForecast } from "..//../api/fetch";
import Weather from "../../components/Weather/Weather";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [selectedState, setSelectedState] = useState("AK");
  const [temperatures, setTemperatures] = useState({});
  const [pressures, setPressures] = useState({});
  const [humidities, setHumidities] = useState({});
  const [stateDataList, setStateDataList] = useState({});
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    fetchForecast(
      selectedState,
      (temperatureData) => {
        setTemperatures((prevData) => ({
          ...prevData,
          [selectedState]: temperatureData,
        }));
      },
      (humidityData) => {
        setHumidities((prevData) => ({
          ...prevData,
          [selectedState]: humidityData,
        }));
      },
      (pressureData) => {
        setPressures((prevData) => ({
          ...prevData,
          [selectedState]: pressureData,
        }));
      },
      (stateData) => {
        setStateDataList((prevDataList) => ({
          [selectedState]: stateData,
          ...prevDataList,
        }));
      }
    );
    setCurrentDateTime(new Date());
  }, [selectedState]);

  return (
    <div>
      <NavBar
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      {Object.keys(stateDataList).map((state) => (
        <Weather
          key={state}
          temprature={temperatures[state]}
          pressure={pressures[state]}
          humidity={humidities[state]}
          selectedState={state}
          state={stateDataList[state]}
        />
      ))}
      <Footer
        currentDateTime={currentDateTime}
        setCurrentDateTime={setCurrentDateTime}
      />
    </div>
  );
};

export default Home;
