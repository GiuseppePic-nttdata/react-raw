import React from "react";

const ResultItem = ({ title, url, description }) => {
  return (
    <div className="u-padding-bottom">
      <div className="u-text-bold">{title}</div>
      <div>{description}</div>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
    </div>
  );
};

export default ResultItem;
