import React, { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    list.push(name);
    console.log(list);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="milk"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button type="submit"></button>
    </form>
  );
};

export default Search;
