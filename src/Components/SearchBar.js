import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = (props) => {
  const [searchTerm, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchTerm);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onFormSubmit}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        margin="normal"
        type="search"
        fullWidth
        value={searchTerm}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
