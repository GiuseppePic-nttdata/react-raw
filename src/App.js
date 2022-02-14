import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import axios from "axios";
import List from "./components/List/List";
import Error from "./components/Error/Error";
import { useSearchParams } from "react-router-dom";

function App() {
  const [dataRetrieved, setDataRetrieved] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`https://help-search-api-prod.herokuapp.com/search`, {
          params: {
            query: searchQuery,
          },
        })
        .then((data) => {
          setDataRetrieved(data.data.results);
          setError(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [searchQuery]);

  const onSubmit = (inputEntered) => {
    if (inputEntered) {
      setSearchParams({
        query: inputEntered,
      });
    }
  };

  if (!error) {
    return (
      <div className="o-container">
        <SearchBox onSubmit={onSubmit} />
        <List dataRetrieved={dataRetrieved} searchQuery={searchQuery} />
      </div>
    );
  }
  return <Error />;
}

export default App;
