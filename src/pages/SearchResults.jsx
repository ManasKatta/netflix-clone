import React from "react";
import Row from "../components/Row";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const searchterm = useParams();
  console.log(searchterm);
  return (
    <>
      <Row
        rowID="1"
        title={`Showing Results for: ${searchterm.searchTerm}`}
        fetchURL={`https://api.themoviedb.org/3/search/${searchterm.searchTerm}?api_key=2974558603f942cd73ecb0ba9db30e40&page=1`}
      />
    </>
  );
};

export default SearchResults;
