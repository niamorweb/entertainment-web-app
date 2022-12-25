import React from "react";

export default function ContainerVideos({
  dataVideos,
  setDataVideos,
  setUserBookmarksVideos,
}) {
  let varPathname = window.location.pathname;
  let category = "";
  let isBookmarked = null;
  let titlePage = "Recommended for you";

  if (varPathname === "/movies") {
    category = "Movie";
    titlePage = "Movies";
    isBookmarked = null;
  }
  if (varPathname === "/series") {
    category = "TV Series";
    titlePage = "TV Series";
    isBookmarked = null;
  }
  if (varPathname === "/bookmarks") {
    category = "";
    titlePage = "Your favorites Movies and TV series";
    isBookmarked = true;
  }

  const handleTest = (e) => {
    const copyDataVideos = [...dataVideos];
    const title = e.title;
    var foundIndex = dataVideos.findIndex((e) => e.title == title);
    if (copyDataVideos[foundIndex].isBookmarked === true) {
      copyDataVideos[foundIndex].isBookmarked = false;
    } else copyDataVideos[foundIndex].isBookmarked = true;
    setDataVideos(copyDataVideos);
  };
  return (
    <section id="containerMovies">
      <h1>{titlePage}</h1>
      <div className="grid_container__videos">
        {dataVideos.map((x) => {
          if (x.category === category || category === "")
          if (x.isBookmarked === isBookmarked || isBookmarked === null)

            return (
              <div className="content_video">
                <img
                  className="img_video"
                  src={x.thumbnail.regular.small}
                  alt=""
                />
                <div onClick={() => handleTest(x)} className="bookmark">
                  {x.isBookmarked ? (
                    <img src="../../../assets/icon-bookmark-full.svg" alt="" />
                  ) : (
                    <img src="../../../assets/icon-bookmark-empty.svg" alt="" />
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
        })}
      </div>
    </section>
  );
}
