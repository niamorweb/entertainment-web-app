import React, { useEffect, useState } from "react";
import Recommended from "../components/homePage/Recommended";
import Trending from "../components/homePage/Trending";
import NavBar from "../components/template/NavBar";
import ContainerResultsSearch from "../components/containerResultsSearch/ContainerResultsSearch";
import SearchBar from "../components/searchBar/SearchBar";
import ContainerVideos from "../components/containerVideos/ContainerVideos";

export default function Home({
  dataVideos,
  searchMoviesSeries,
  setSearchMoviesSeries,
  userConnected,
  setUserBookmarksVideos,
  setDataVideos,
  numberResults,
  setNumberResults,
  setUserConnected,
  setMessageNotLogIn,
}) {
  useEffect(() => {
    setSearchMoviesSeries("");
  }, []);

  return (
    <div className="app_container lg:pl-[9rem]">
      <NavBar
        userConnected={userConnected}
        setUserConnected={setUserConnected}
      />

      <main id="home">
        <SearchBar
          dataVideos={dataVideos}
          setNumberResults={setNumberResults}
          searchMoviesSeries={searchMoviesSeries}
          setSearchMoviesSeries={setSearchMoviesSeries}
        />

        {searchMoviesSeries === "" ? (
          <>
            <Trending
              setDataVideos={setDataVideos}
              dataVideos={dataVideos}
              setMessageNotLogIn={setMessageNotLogIn}
            />
            <ContainerVideos
              userConnected={userConnected}
              setDataVideos={setDataVideos}
              dataVideos={dataVideos}
              setUserBookmarksVideos={setUserBookmarksVideos}
              setMessageNotLogIn={setMessageNotLogIn}
            />
          </>
        ) : (
          <ContainerResultsSearch
            setDataVideos={setDataVideos}
            searchMoviesSeries={searchMoviesSeries}
            dataVideos={dataVideos}
            numberResults={numberResults}
            setUserBookmarksVideos={setUserBookmarksVideos}
            userConnected={userConnected}
            setMessageNotLogIn={setMessageNotLogIn}
          />
        )}
      </main>
    </div>
  );
}
