import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Select from "../Select/Select";

function NavBar({ selectedState, setSelectedState }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <img src="../static/images/logo.png" alt="logo" />
        <p>US Sates Weather</p>
      </div>
      <Select
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <div className={styles.nav}>
        <Link to="https://openweathermap.org/">
          <Button val="View API" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
