import React, { useState } from "react";
import ResultItem from "../ResultItem/ResultItem";

const List = ({ dataRetrieved, searchQuery }) => {
  const ELEMENTS_TO_SHOW = 10;
  const MAX_NUMBER_OF_PAGE =
    dataRetrieved.length < 10
      ? 1
      : Math.floor(dataRetrieved.length / ELEMENTS_TO_SHOW);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickNextItemsButton = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const onClickPreviousItemsButton = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const showPreviousButton = () => {
    if (currentPage !== 1) {
      return (
        <button
          className="c-btn c-btn--primary u-margin-right"
          onClick={onClickPreviousItemsButton}
        >
          Show previous items
        </button>
      );
    }
    return <></>;
  };

  const showNextButton = () => {
    if (currentPage !== MAX_NUMBER_OF_PAGE) {
      return (
        <button
          className="c-btn c-btn--primary"
          onClick={onClickNextItemsButton}
        >
          Show next items
        </button>
      );
    }
  };

  const getRows = (dataToFormat) => {
    const start = ELEMENTS_TO_SHOW * currentPage - ELEMENTS_TO_SHOW;
    const end = ELEMENTS_TO_SHOW * currentPage;
    const subData = dataToFormat.slice(start, end);

    return subData.map((data, index) => (
      <ResultItem
        key={`result-item-${index}`}
        title={data.title}
        description={data.description}
        url={data.url}
      />
    ));
  };

  if (dataRetrieved && dataRetrieved.length) {
    return (
      <div className="u-padding-bottom-large">
        <div className="u-padding-bottom-large c-heading-delta">
          Search Result For {searchQuery}
        </div>
        {getRows(dataRetrieved)}
        <p className="number">
          Page {currentPage} of {MAX_NUMBER_OF_PAGE}
        </p>
        <div className="bottom-table">
          {showPreviousButton()}
          {showNextButton()}
        </div>
      </div>
    );
  }
  return (
    <div className="u-padding-bottom-large">
      <div className="u-padding-bottom-large c-heading-delta">
        No result found for {searchQuery}
      </div>
    </div>
  );
};

export default List;
