import React from "react";

export default function Recommended({ dataVideos }) {
  return (
    <section id="recommended">
      <h1>Recommended for you</h1>
      <div className="grid_container__videos">
        {dataVideos.map((x) => {
          return (
            <div className="content_video">
              <img className="img_video" src={x.thumbnail.regular.small} alt="" />
              <div className="bookmark">
                <img src="../../../assets/icon-bookmark-empty.svg" alt="" />
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
