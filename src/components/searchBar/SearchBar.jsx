import React, { useState } from "react";
import { Router } from "react-router-dom";

export default function SearchBar({
  setSearchMoviesSeries,
  searchMoviesSeries,
  setNumberResults,
  dataVideos,
}) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchMoviesSeries(e.target[1].value);
    console.log("sssssssss =  =  ", e.target[1].value);

    handleCounter(e);
  };

  const handleCounter = (e) => {
    let counter = 0;
    for (const obj of dataVideos) {
      if (obj.category === category || category === "") {
        if (obj.isBookmarked === isBookmarked || isBookmarked === null) {
          if (obj.title.includes(e.target[1].value)) {
            counter++;
          }
        }
      }
    }
    setNumberResults(counter);
    console.log(counter);
  };

  return (
    <section id="searchBar">
      <form onSubmit={(e) => handleSubmit(e)} id="search">
        <button>
          <img src="../../../assets/icon-search.svg" alt="" />
        </button>
        <input type="search" placeholder={placeholder} />
      </form>
    </section>
  );
}
