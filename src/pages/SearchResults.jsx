import React from "react";
import Row from "../components/Row";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const searchterm = useParams();
  console.log(searchterm);
  return (
    <>
      <div className="py-20">
        <Row
          rowID="1"
          title={`Showing Results for: ${searchterm.searchTerm}`}
          fetchURL={`https://api.themoviedb.org/3/search/movie?api_key=2974558603f942cd73ecb0ba9db30e40&query=${searchterm.searchTerm}&page=1`}
        />
      </div>
    </>
  );
};

export default SearchResults;
