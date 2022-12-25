import React, { useEffect } from "react";
import ContainerResultsSearch from "../components/containerResultsSearch/ContainerResultsSearch";
import ContainerVideos from "../components/containerVideos/ContainerVideos";
import SearchBar from "../components/searchBar/SearchBar";
import ContainerSeries from "../components/seriesPage/ContainerSeries";
import NavBar from "../components/template/NavBar";

export default function Bookmarks({
  dataVideos,
  searchMoviesSeries,
  setSearchMoviesSeries,
  userConnected,
  setDataVideos,
  numberResults,
  setNumberResults,
  setUserBookmarksVideos,
  setUserConnected
}) {
  const countBookmarkedVideos = dataVideos.filter(
    (object) => object.isBookmarked === true
  ).length;

  useEffect(() => {
    setSearchMoviesSeries("");
  }, []);
  return (
    <div id="app_container">
      <NavBar userConnected={userConnected} setUserConnected={setUserConnected} />
      <main>
        <SearchBar
          dataVideos={dataVideos}
          setSearchMoviesSeries={setSearchMoviesSeries}
          setNumberResults={setNumberResults}
        />
        {searchMoviesSeries === "" ? (
          countBookmarkedVideos === 0 ? (
            <span className="no_videos_bookmarked">
              {" "}
              <h1 style={{ textAlign: 'center'}}> You have no bookmark, nothing to show</h1>
            </span>
          ) : (
            <ContainerVideos
              setDataVideos={setDataVideos}
              dataVideos={dataVideos}
              setUserBookmarksVideos={setUserBookmarksVideos}
            />
          )
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
