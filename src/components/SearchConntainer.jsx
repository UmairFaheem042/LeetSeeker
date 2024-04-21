import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchConntainer = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/${username}`);
    setUsername("");
  }

  return (
    <>
      <form onSubmit={handleSearch} className="searchContainer">
        <input
          type="text"
          placeholder="Search with Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button>Search User</button>
      </form>
    </>
  );
};

export default SearchConntainer;
