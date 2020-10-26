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
  const [postsPerPage] = useState(10);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCountries =
    countriesData.data &&
    countriesData.data.slice(indexOfFirstPost, indexOfLastPost);
  console.log("diff", currentCountries);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(countriesData);

  return (
    <div>
      <div className="filter-container">
        <Search />
      </div>

      <div className="home-page-main">
        <div>
          <Countries countriesData={currentCountries} loading={loading} />
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={
            countriesData && countriesData.data && countriesData.data.length
          }
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;
