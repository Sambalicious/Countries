import { useState } from "react";
import Link from "next/link";
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
        <div className={styles.heading_flag}></div>
        <button
          onClick={() => setValueAndDirection("name")}
          className={styles.headings_name}
        >
          <div>Name</div>
          {value === "name" && <SortArrow direction={direction} />}
        </button>
        <button
          onClick={() => setValueAndDirection("population")}
          className={styles.headings_population}
        >
          <div>Population</div>

          {value === "population" && <SortArrow direction={direction} />}
        </button>
        <button
          onClick={() => setValueAndDirection("area")}
          className={styles.headings_area}
        >
          <div>
            Area (km <sup style={{ fontSize: "0.5rem" }}> 2</sup>)
          </div>

          {value === "area" && <SortArrow direction={direction} />}
        </button>
        <button
          onClick={() => setValueAndDirection("gini")}
          className={styles.headings_gini}
        >
          <div>Average Income</div>
          {value === "gini" && <SortArrow direction={direction} />}
        </button>
      </div>
      {orderedCountries &&
        orderedCountries.map((country) => (
          <Link
            key={country.alpha3Code}
            href={`/country/${country.alpha3Code}`}
          >
            <div key={country.alpha3Code} className={styles.row}>
              <div className={styles.flag}>
                <img src={country.flag} alt={country.name} />
              </div>
              <div className={styles.name}>{country.name}</div>
              <div className={styles.population}>{country.population}</div>
              <div className={styles.area}>{country.area || 0}</div>
              <div className={styles.gini}>{country.gini || 0}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CountriesTable;
