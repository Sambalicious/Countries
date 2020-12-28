import styles from "./CountriesTable.module.css";
const CountriesTable = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>Headings</div>
      <button className={styles.headings_name}>
        <div>Name</div>
      </button>
      <button className={styles.headings_population}>
        <div>Population</div>
      </button>

      {countries &&
        countries.map((country, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
          </div>
        ))}
    </div>
  );
};

export default CountriesTable;
