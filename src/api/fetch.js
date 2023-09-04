import { states } from "../utils/states";
import { format } from "../utils/format";

export const fetchForecast = (
  state,
  setTemprature,
  setHumidity,
  setPressure,
  setStateData
) => {
  const lon = states[state].longitude;
  const lat = states[state].latitude;
  const apikey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const apiUrl = `${process.env.REACT_APP_OPEN_WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${apikey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const response = format(data);
      setTemprature(response.tempData);
      setHumidity(response.humData);
      setPressure(response.pressData);
      setStateData(response.stateData);
    });
};
