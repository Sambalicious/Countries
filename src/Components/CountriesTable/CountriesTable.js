import { useState } from "react";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import styles from "./CountriesTable.module.css";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  } else {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        {" "}
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        {" "}
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();

  const [value, setValue] = useState("");

  const orderedCountries = orderBy(countries, value, direction);
  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  console.log(direction);
  return (
    <div>
      <div className={styles.heading}>
        <button
          onClick={() => setValueAndDirection("name")}
          className={styles.headings_name}
        >
          <div>Name</div>
          <SortArrow direction={direction} />
        </button>
        <button
          onClick={() => setValueAndDirection("population")}
          className={styles.headings_population}
        >
          <div>Population</div>

          <sortArrow direction={direction} />
        </button>
      </div>
      {orderedCountries &&
        orderedCountries.map((country, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
          </div>
        ))}
    </div>
  );
};

export default CountriesTable;
