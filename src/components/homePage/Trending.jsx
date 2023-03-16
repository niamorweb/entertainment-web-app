import React from "react";
import { useNavigate } from "react-router-dom";

export default function Trending({
  dataVideos,
  setDataVideos,
  userConnected,
  setMessageNotLogIn,
}) {
  const navigate = useNavigate();

  const handleSeeContent = (x) => {
    navigate("/details/" + x.id);
  };

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
    <section id="trending">
      <span className="font-semibold text-lg lg:text-xl">Trending</span>

      <div id="slideshow">
        {dataVideos.map((x) => {
          if (x.isTrending === true)
            return (
              <div className="content__trending__video">
                <img
                  onClick={() => handleSeeContent(x)}
                  className="img_content img_small cursor-pointer"
                  src={x.thumbnail.regular.small}
                  alt=""
                />
                <img
                  onClick={() => handleSeeContent(x)}
                  className="img_content img_medium cursor-pointer"
                  src={x.thumbnail.regular.medium}
                  alt=""
                />
                <img
                  onClick={() => handleSeeContent(x)}
                  className="img_content img_large cursor-pointer"
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
                <div
                  onClick={() => handleBookmarkVideo(x)}
                  className="bookmark cursor-pointer"
                >
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
