import React from "react";
import styles from "./ContentFilter.module.css";

const ContentFilter = ({ filterFunction, type }) => {
  return (
    <input
      className={styles.input}
      placeholder={`Search by ${type}`}
      onChange={e => {
        filterFunction(e.target.value.toLowerCase().trim());//to trim any whitespace
      }}
    />
  );
};
export default ContentFilter;
