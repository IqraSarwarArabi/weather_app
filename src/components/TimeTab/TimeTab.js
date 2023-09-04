import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "../StateData/StateData.module.css";
import "./TimeTab.css";

const TabContentItem = ({ iconSrc, label, value }) => (
  <div className={styles.location}>
    <img alt="" src={iconSrc} />
    <div>
      <strong>{label}</strong>
      <p>{value}</p>
    </div>
  </div>
);

const TimeTab = ({ data }) => {
  const times = Object.keys(data);

  return (
    <Tabs>
      <TabList>
        {times.map((time, index) => (
          <Tab key={index}>{formatTimeToAMPM(time)}</Tab>
        ))}
      </TabList>
      {times.map((time) => (
        <TabPanel key={time}>
          <div className={styles.sunTime}>
            <TabContentItem
              iconSrc="../static/images/cloud.png"
              label="Cloudiness"
              value={`${data[time][0].cloudiness.all} %`}
            />
            <TabContentItem
              iconSrc="../static/images/weather.png"
              label="Weather"
              value={data[time][0].weather[0].main}
            />
            <TabContentItem
              iconSrc="../static/images/wind.png"
              label="Wind"
              value={`${data[time][0].wind} m/sec`}
            />
            <TabContentItem
              iconSrc="../static/images/temp.png"
              label="Temperature"
              value={`${data[time][0].temp} K`}
            />
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TimeTab;

function formatTimeToAMPM(time) {
  const [hour, minute, second] = time.split(":");
  const date = new Date(0, 0, 0, hour, minute, second);
  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  return date.toLocaleTimeString([], options);
}
