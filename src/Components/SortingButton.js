import React from "react";

const SortingButton = (props) => {
  const styles = {
    backgroundColor: "#424242",
    borderRadius: 4,
    color: "#fff",
    border: 0,
    margin: "5px 10px",
    padding: "6px 16px",
    fontSize: "0.875rem",
    minWidth: "64px",
    boxSizing: "border-box",
    transition:
      "backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontFamily: "sans-serif",
    fontWeight: 500,
    lineHeight: 1.75,

    letterSpacing: "0.02857em",
    textTransform: "uppercase",

    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  };
  return (
    <button
      id="btn"
      style={styles}
      onClick={(e) => props.handleSorting(e.target.value)}
      value={props.value}
    >
      {props.sortBy}
    </button>
  );
};

export default SortingButton;
