import React from "react";

export default function Trending({ dataVideos, setDataVideos }) {
  const handleBookmark = (e) => {
    const copyDataVideos = [...dataVideos];
    const title = e.title;
    var foundIndex = dataVideos.findIndex((e) => e.title == title);
    if (copyDataVideos[foundIndex].isBookmarked === true) {
      copyDataVideos[foundIndex].isBookmarked = false;
    } else copyDataVideos[foundIndex].isBookmarked = true;
    setDataVideos(copyDataVideos);
  };

  return (
    <section id="trending">
      <span className="font-semibold text-lg lg:text-xl">Trending</span>

      <div id="slideshow">
        {dataVideos.map((x) => {
          if (x.isTrending === true)
            return (
              <div className="content__trending__video">
                <img
                  className="img_content img_small"
                  src={x.thumbnail.regular.small}
                  alt=""
                />
                <img
                  className="img_content img_medium"
                  src={x.thumbnail.regular.medium}
                  alt=""
                />
                <img
                  className="img_content img_large"
                  src={x.thumbnail.regular.large}
                  alt=""
                />
                <div className="infos-and-title">
                  <div className="infos">
                    <span className="date">{x.year}</span>
                    <div className="separator_point"></div>
                    <span className="category">
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
                    <span className="rating">{x.rating}</span>
                  </div>
                  <span className="title">{x.title}</span>
                </div>
                <div onClick={() => handleBookmark(x)} className="bookmark">
                  {x.isBookmarked ? (
                    <img src="../../../assets/icon-bookmark-full.svg" alt="" />
                  ) : (
                    <img src="../../../assets/icon-bookmark-empty.svg" alt="" />
                  )}
                </div>
              </div>
            );
        })}
      </div>
    </section>
  );
}
