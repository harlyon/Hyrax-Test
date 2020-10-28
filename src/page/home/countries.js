import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import listReactFiles from 'list-react-files';

const Countries = ({ countriesData, loading, country }) => {
  const [search, setSearch] = useState("");
  const [filteredState, setFilteredState] = useState([]);

  // listReactFiles().then(files => console.log(files))

  const filteredCountries =
    countriesData &&
    countriesData.filter((country) => {
      return country.attributes.name
        .toLowerCase()
        .includes(search.toLowerCase());
    });

  useEffect(() => {
    setFilteredState(filteredCountries);
  }, [search, countriesData]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div
        className="filter-container"
        style={{ paddingBottom: "20px", paddingTop: "0px" }}
      >
        <form className="search-field">
          <span role="img" aria-label="search-icon">
            🔍
          </span>
          <input onChange={(e) => setSearch(e.target.value)} type="text" />
        </form>
      </div>
      <div className="country-card-container home-page-main">
        {filteredCountries &&
          filteredCountries.map((country) => (
            <div className="country-card" key={country.id}>
              <Link to={`/details/${country.id}`}>
                <picture
                  className="country-card-picture"
                  style={{
                    backgroundImage: `url(${"https://images-na.ssl-images-amazon.com/images/I/41i86enckuL._SS400_.jpg"})`,
                  }}
                ></picture>
              </Link>
              <div className="country-card-info">
                <h3 className="country-card-info-name">
                  {country.attributes.name}
                </h3>
                <p className="country-card-info-population">
                  <b>Population</b>: {country.attributes.population}{" "}
                </p>
                <p className="country-card-info-region">
                  <b>Region</b>: {country.attributes.region}
                </p>
                <p className="country-card-info-capital">
                  <b>Capital</b>: {country.attributes.capital}{" "}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Countries;
