import React from "react";
import styles from "./StateData.module.css";
import { states } from "../../utils/states";
import TimeTab from "../TimeTab/TimeTab";

function StateData({ state, data }) {
  const locationInfo = [
    {
      label: "Sunrise",
      value: formatTime(data.sunrise),
      imgSrc: "../static/images/moon.png",
    },
    {
      label: "Sunset",
      value: formatTime(data.sunset),
      imgSrc: "../static/images/sun.png",
    },
    {
      label: "Longitude",
      value: data.coord.lon,
      imgSrc: "../static/images/longitude.png",
    },
    {
      label: "Latitude",
      value: data.coord.lat,
      imgSrc: "../static/images/latitude.png",
    },
  ];

  return (
    <div>
      <div className={styles.sunTime}>
        <div className={styles.location}>
          <img alt="" src="../static/images/locationIcon.png" />
          <div>
            <div className={styles.name}>{states[state].name}</div>
            <div>
              {data.name}, {data.country}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sunTime}>
        {locationInfo.map((info, index) => (
          <div className={styles.location} key={index}>
            <img alt="" src={info.imgSrc} />
            <div>
              <strong>{info.label}</strong>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      <TimeTab data={data.tabData} />
    </div>
  );
}

export default StateData;

function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
