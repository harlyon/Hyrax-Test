import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ countriesData, loading, country }) => {
  console.log("", country, countriesData);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="country-card-container">
      {countriesData &&
        countriesData.map((country) => (
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
  );
};

export default Countries;
