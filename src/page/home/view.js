import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Map } from "../../component/Map/map";
import { COUNTRIES_API } from "../../services/api";

const HomePageView = (props) => {
  const { id } = useParams();
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios.get(`${COUNTRIES_API}/${id}`).then((result) => {
      setCountry(result.data);
    });
  }, [id]);
  console.log("country", country);

  const goBack = () => {
    props.history.push("/");
  };

  return (
    <div>
      <div className="back-button-container">
        <button className="back-button" onClick={goBack}>
          ← Back
        </button>
      </div>

      <div className="container">
        <picture className="country-image">
          <img
            alt=""
            src={
              "https://images-na.ssl-images-amazon.com/images/I/41i86enckuL._SS400_.jpg"
            }
          />
        </picture>
        <div className="country-details">
          <h1>{country && country.data.attributes.name}</h1>
          <div>
            <div className="country-info">
              <p>
                <b>Native Name: </b>
                {country && country.data.attributes.name}
              </p>
              <p>
                <b>Population: </b>
                {country && country.data.attributes.population}
              </p>
              <p>
                <b>Region: </b>
                {country && country.data.attributes.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {country && country.data.attributes.region}
              </p>
              <p>
                <b>Capital: </b>
                {country && country.data.attributes.capital}
              </p>
            </div>
            <div className="country-info">
              <p>
                <b>GDP: </b>
                {country && country.data.attributes.gdp}
              </p>
              <p>
                <b>Death Rate: </b>
                {country && country.data.attributes.deathrate}{" "}
              </p>
              <p>
                <b>Literacy: </b> {country && country.data.attributes.literacy}{" "}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p>
              <b>Population Density: </b>
              {country && country.data.attributes.population_density}
            </p>
            <p>
              <b>Infant Mortality: </b>
              {country && country.data.attributes.infant_mortality}{" "}
            </p>
            <p>
              <b>Climate: </b> {country && country.data.attributes.climate}{" "}
            </p>
          </div>
        </div>
      </div>
      <Map
        lat={country && country.data.attributes.latitude}
        long={country && country.data.attributes.longitude}
        name={country && country.data.attributes.name}
      />
    </div>
  );
};

export default HomePageView;
