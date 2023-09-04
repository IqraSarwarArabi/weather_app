export function format(d) {
  const forecast = d.list;
  const currentDate = new Date().toISOString().slice(0, 10);
  const filteredData = forecast.filter(
    (item) => item.dt_txt.slice(0, 10) === currentDate
  );

  const labels = filteredData.map((item) => item.dt_txt);
  const pressure = filteredData.map((item) => item.main.pressure);
  const humidity = filteredData.map((item) => item.main.humidity);
  const temprature = filteredData.map((item) => item.main.temp);

  const stateData = d.city;
  stateData.time = filteredData[0].dt_txt;
  stateData.cloudiness = filteredData[0].clouds;
  stateData.weather = filteredData[0].weather;
  stateData.wind = filteredData[0].wind.speed;
  stateData.temp = filteredData[0].main.temp;

  const times = labels.map((dateTime) => {
    const parts = dateTime.split(" ");
    return parts[1];
  });
  const tabData = {};

  filteredData.forEach((item) => {
    const time = item.dt_txt.split(" ")[1];
    if (!tabData[time]) {
      tabData[time] = [];
    }
    tabData[time].push({
      time: item.dt_txt,
      cloudiness: item.clouds,
      weather: item.weather,
      wind: item.wind.speed,
      temp: item.main.temp,
    });
  });
  stateData.tabData = tabData;
  const tempData = {
    labels: times,
    datasets: [
      {
        label: "Temprature",
        data: temprature,
        borderColor: "#011638",
        backgroundColor: "#558be3",
      },
    ],
  };
  const pressData = {
    labels: times,
    datasets: [
      {
        label: "Pressure",
        data: pressure,
        borderColor: "#011638",
        backgroundColor: "#558be3",
      },
    ],
  };
  const humData = {
    labels: times,
    datasets: [
      {
        label: "Humidity",
        data: humidity,
        borderColor: "#011638",
        backgroundColor: "#558be3",
      },
    ],
  };

  return { tempData, pressData, humData, stateData };
}
