import { useEffect, useState } from "react";
import axios from "axios";
import { COUNTRIES_API } from "../../services/api";
import Search from "../../component/Search/search";
import Pagination from "../../component/Pagination/pagination";
import Countries from "./countries";

const Home = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const getData = async () => {
    try {
      const response = await axios.get(COUNTRIES_API);
      setCountriesData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries =
    countriesData.data &&
    countriesData.data.slice(indexOfFirstCountry, indexOfLastCountry);
  console.log("diff", currentCountries);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(countriesData);

  return (
    <div>
      <div>
        <Countries countriesData={currentCountries} loading={loading} />
      </div>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={
          countriesData && countriesData.data && countriesData.data.length
        }
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
