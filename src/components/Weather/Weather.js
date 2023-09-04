import React from "react";
import styles from "./Weather.module.css";
import StateData from "../StateData/StateData";
import { AreaChart } from "../AreaChart/AreaChart";

function Weather({ temprature, pressure, humidity, selectedState, state }) {
  return (
    <div className={styles.chartsContainer}>
      <div className={styles.charts}>
        <AreaChart data={temprature} />
        <AreaChart data={pressure} />
        <AreaChart data={humidity} />
      </div>
      <div className={styles.stateData}>
        {state !== null && <StateData state={selectedState} data={state} />}
      </div>
    </div>
  );
}

export default Weather;
