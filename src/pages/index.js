import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../Components/SearchInput/SearchInput";
import CountriesTable from "../Components/CountriesTable/CountriesTable";

export default function Home({ countries }) {
  console.log(countries);
  const [searchValue, setSearchValue] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchValue)
  );

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        placeholder={"Filter by Name, Continents and Sub Region"}
      />

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await response.json();
  return {
    props: {
      countries,
    },
  };
};
