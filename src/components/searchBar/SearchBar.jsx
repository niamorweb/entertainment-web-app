import React, { useState } from "react";
import { Router } from "react-router-dom";

export default function SearchBar({
  setSearchMoviesSeries,
  searchMoviesSeries,
  setNumberResults,
  dataVideos,
}) {
  const [currentSearch, setCurrentSearch] = useState("");
  let varPathname = window.location.pathname;
  let placeholder = "Search for movies or TV series";
  let category = "";
  let isBookmarked = null;

  if (varPathname === "/movies") {
    placeholder = "Search for movies";
    category = "Movie";
    isBookmarked = null;
  }
  if (varPathname === "/series") {
    placeholder = "Search for TV series";
    category = "TV Series";
    isBookmarked = null;
  }

  if (varPathname === "/bookmarks") {
    placeholder = "Search for movies or TV series";
    category = "";
    isBookmarked = true;
  }

  const handleCurrentSearch = (e) => {
    setCurrentSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchMoviesSeries(currentSearch);
    handleCounter();
  };

  const handleCounter = () => {
    let counter = 0;
    dataVideos.map((x) => {
      if (varPathname === "/movies") {
        if (x.title.includes(currentSearch) && x.category === "Movie") {
          console.log(x.title);
          counter++;
        }
      } else if (varPathname === "/series") {
        if (x.title.includes(currentSearch) && x.category === "TV Series**") {
          console.log(x.title);
          counter++;
        }
      } else if (varPathname === "/bookmarks") {
        if (x.title.includes(currentSearch) && x.isBookmarked === true) {
          console.log(x.title);
          counter++;
        }
      } else {
        if (x.title.includes(currentSearch)) {
          console.log(x.title);
          counter++;
        }
      }
    });
    setNumberResults(counter);
    console.log("counter = = ", counter);
  };

  return (
    <section id="searchBar">
      <form onSubmit={(e) => handleSubmit(e)} id="search">
        <button>
          <img src="../../../assets/icon-search.svg" alt="" />
        </button>
        <input
          onChange={handleCurrentSearch}
          value={currentSearch}
          type="search"
          placeholder={placeholder}
        />
      </form>
    </section>
  );
}
