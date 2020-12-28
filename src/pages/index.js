import Head from "next/head";
import Layout from "../Components/Layout/Layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../Components/SearchInput/SearchInput";
import CountriesTable from "../Components/CountriesTable/CountriesTable";

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput placeholder={"Filter by Name, Continents and Sub Region"} />

      <CountriesTable countries={countries} />
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
