import React from "react";

export default function ContainerResultsSearch({
  dataVideos,
  searchMoviesSeries,
  numberResults,
  setDataVideos,
  setMessageNotLogIn,
  userConnected,
  setUserBookmarksVideos,
}) {
  let varPathname = window.location.pathname;
  let isBookmarked = null;
  let category;

  if (varPathname === "/") {
    category = "";
    isBookmarked = null;
  }
  if (varPathname === "/bookmarks") {
    category = "";
    isBookmarked = true;
  }
  if (varPathname === "/movies") {
    category = "Movie";
    isBookmarked = null;
  }
  if (varPathname === "/series") {
    category = "TV Series";
    isBookmarked = null;
  }

  const handleBookmarkVideo = (e) => {
    if (userConnected === true) {
      const copyDataVideos = [...dataVideos];
      const title = e.title;
      var foundIndex = dataVideos.findIndex((e) => e.title == title);
      if (copyDataVideos[foundIndex].isBookmarked === true) {
        copyDataVideos[foundIndex].isBookmarked = false;
      } else copyDataVideos[foundIndex].isBookmarked = true;
      setDataVideos(copyDataVideos);
    } else {
      setMessageNotLogIn(true);
      setTimeout(() => {
        setMessageNotLogIn(false);
      }, 5000);
    }
  };

  return (
    <section id="containerResultsSearch">
      <div className="results">
        <h1>
          FOUND {numberResults} RESULTS FOR '{searchMoviesSeries}'{" "}
        </h1>
        <div className="grid_container__videos">
          {dataVideos
            .filter((x) =>
              x.title.toLowerCase().includes(searchMoviesSeries.toLowerCase())
            )

            .map((x) => {
              if (x.title.includes(searchMoviesSeries)) {
                if (x.category === category || category === "") {
                  if (
                    x.isBookmarked === isBookmarked ||
                    isBookmarked === null
                  ) {
                    return (
                      <div className="content_video">
                        <img
                          className="img_video"
                          src={x.thumbnail.regular.small}
                          alt=""
                        />
                        <div
                          onClick={() => handleBookmarkVideo(x)}
                          className="bookmark"
                        >
                          {x.isBookmarked ? (
                            <img
                              src="../../../assets/icon-bookmark-full.svg"
                              alt=""
                            />
                          ) : (
                            <img
                              src="../../../assets/icon-bookmark-empty.svg"
                              alt=""
                            />
                          )}
                        </div>
                        <div className="infos-and-title">
                          <div className="infos">
                            <span>{x.year}</span>
                            <div className="separator_point"></div>
                            <span className="category">
                              {" "}
                              <img
                                src={
                                  x.category === "Movie"
                                    ? "../../assets/icon-category-movie.svg"
                                    : "../../assets/icon-category-tv.svg"
                                }
                                alt=""
                              />
                              {x.category}
                            </span>
                            <div className="separator_point"></div>
                            <span>{x.rating}</span>
                          </div>
                          <span className="title">{x.title}</span>
                        </div>
                      </div>
                    );
                  }
                }
              }
            })}
        </div>
      </div>
    </section>
  );
}
