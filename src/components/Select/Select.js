import React from "react";
import { stateOptions } from "../../utils/states";
import styles from "./Select.module.css";
import Select from "react-select";

const SelectCustom = ({ setSelectedState }) => {
  const handleStateChange = (e) => {
    setSelectedState(e.value);
  };

  return (
    <div className={styles.select}>
      <Select
        defaultValue={stateOptions[0]}
        className={styles.custom}
        isSearchable={true}
        options={stateOptions}
        onChange={handleStateChange}
        placeholder="Select State"
      />
    </div>
  );
};

export default SelectCustom;
