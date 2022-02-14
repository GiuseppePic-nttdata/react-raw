import React, { useRef } from "react";

const SearchBox = ({ onSubmit }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      onSubmit(inputRef.current.value);
    }
  };

  const onKeyUp = (e) => {
    e.preventDefault();
    if (inputRef.current.value && e.key === "Enter") {
      onSubmit(inputRef.current.value);
    }
  };

  const inputRef = useRef(null);

  return (
    <form
      className="u-padding-top-large u-padding-bottom-large"
      onSubmit={onFormSubmit}
      onKeyUp={onKeyUp}
    >
      <input ref={inputRef} type="text" />
      <button type="submit" className="c-btn c-btn--primary u-margin-left">
        Execute query
      </button>
    </form>
  );
};

export default SearchBox;
