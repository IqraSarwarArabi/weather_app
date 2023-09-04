import styles from "./Footer.module.css";
import React from "react";

function Footer({ currentDateTime }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);

  return (
    <div className={styles.footer}>
      Data fetched at {formattedDateTime} from openweather API.
    </div>
  );
}
export default Footer;
