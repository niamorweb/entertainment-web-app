import React, { useEffect } from "react";
import ContainerResultsSearch from "../components/containerResultsSearch/ContainerResultsSearch";
import ContainerVideos from "../components/containerVideos/ContainerVideos";
import ContainerMovies from "../components/moviesPage/ContainerMovies";
import SearchBar from "../components/searchBar/SearchBar";
import NavBar from "../components/template/NavBar";

export default function Movies({
  dataVideos,
  searchMoviesSeries,
  setSearchMoviesSeries,
  userConnected,
  setDataVideos,
  numberResults,
  setNumberResults,
  setUserConnected,
  setUserBookmarksVideos,
  setMessageNotLogIn,
}) {
  useEffect(() => {
    setSearchMoviesSeries("");
  }, []);

  return (
    <div className="app_container">
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
            setMessageNotLogIn={setMessageNotLogIn}
          />
        ) : (
          <ContainerResultsSearch
            setDataVideos={setDataVideos}
            searchMoviesSeries={searchMoviesSeries}
            dataVideos={dataVideos}
            numberResults={numberResults}
            setUserBookmarksVideos={setUserBookmarksVideos}
            setMessageNotLogIn={setMessageNotLogIn}
            userConnected={userConnected}
          />
        )}
      </main>
    </div>
  );
}
