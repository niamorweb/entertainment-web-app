import React, { useEffect, useState } from "react";
import ContainerResultsSearch from "../components/containerResultsSearch/ContainerResultsSearch";
import ContainerVideos from "../components/containerVideos/ContainerVideos";
import SearchBar from "../components/searchBar/SearchBar";
import ContainerSeries from "../components/seriesPage/ContainerSeries";
import NavBar from "../components/template/NavBar";

export default function Series({
  dataVideos,
  searchMoviesSeries,
  setSearchMoviesSeries,
  userConnected,
  setDataVideos,
  numberResults,
  setNumberResults,
  setUserConnected,
  setUserBookmarksVideos,
}) {
  useEffect(() => {
    setSearchMoviesSeries("");
  }, []);
  return (
    <div id="app_container">
      <NavBar userConnected={userConnected} setUserConnected={setUserConnected}/>
      <main>
        <SearchBar
          dataVideos={dataVideos}
          setNumberResults={setNumberResults}
          setSearchMoviesSeries={setSearchMoviesSeries}
        />
        {searchMoviesSeries === "" ? (
          <ContainerVideos
            setDataVideos={setDataVideos}
            dataVideos={dataVideos}
            setUserBookmarksVideos={setUserBookmarksVideos}
          />
        ) : (
          <ContainerResultsSearch
            setDataVideos={setDataVideos}
            searchMoviesSeries={searchMoviesSeries}
            dataVideos={dataVideos}
            numberResults={numberResults}
            setUserBookmarksVideos={setUserBookmarksVideos}
          />
        )}
      </main>
    </div>
  );
}
