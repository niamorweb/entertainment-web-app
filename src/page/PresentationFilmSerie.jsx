import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import NavBar from "../components/template/NavBar";

export default function PresentationFilmSerie({
  setDataVideos,
  setMessageNotLogIn,
  dataVideos,
  setUserConnected,
  userConnected,
}) {
  const { id } = useParams();
  const updateId = parseInt(id);

  const handleBookmarkVideo = (e) => {
    console.log("dd");
    if (userConnected === true) {
      const copyDataVideos = [...dataVideos];
      const title = e.title;
      var foundIndex = dataVideos.findIndex((e) => e.title == title);
      if (copyDataVideos[foundIndex].isBookmarked === true) {
        copyDataVideos[foundIndex].isBookmarked = false;
      } else copyDataVideos[foundIndex].isBookmarked = true;
      setDataVideos(copyDataVideos);
    }
  };
  return (
    <div className="app_container">
      <NavLink to="/">
        <button className="bg-slate-300 text-black font-semibold text-sm  px-4 py-1 rounded-md  ">
          Back
        </button>
      </NavLink>

      <div className="mt-8">
        {dataVideos
          .filter((x) => x.id === updateId)
          .map((x) => (
            <div className="md:flex gap-[5rem]">
              <div className="md:w-1/2 gap-8 justify-evenly ">
                <div className="overflow-hidden">
                  <div className="flex gap-6 items-center">
                    <span className="text-xl ">{x.title}</span>
                    <span className="text-sm border-[1px] border-red-500 rounded-md px-3 py-1  text-red-500 ">
                      {x.category}
                    </span>
                    <span className="text-sm border-[1px] border-red-500 rounded-md px-3 py-1  text-red-500 ">
                      {x.rating}
                    </span>
                  </div>
                  <img
                    className="md:hidden my-5 w-full mx-auto h-full"
                    src={x.thumbnail.regular.small}
                    alt=""
                  />
                  <img
                    className="hidden md:block lg:hidden my-5 w-full mx-auto h-full"
                    src={x.thumbnail.regular.medium}
                    alt=""
                  />
                  <img
                    className="hidden lg:block my-5 w-full mx-auto h-full"
                    src={x.thumbnail.regular.large}
                    alt=""
                  />
                </div>
                <div className="flex items-center md:flex-col md:justify-start md:items-start">
                  <div className="flex items-center gap-6  md:justify-start md:items-start h-full">
                    {x.isBookmarked ? (
                      <button
                        onClick={() => handleBookmarkVideo(x)}
                        className="bg-slate-700 text-slate-200 font-semibold px-4 py-2 rounded-md md:px-8 "
                      >
                        Remove of bookmarks
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBookmarkVideo(x)}
                        className="bg-slate-700 text-slate-200 font-semibold px-4 py-2 rounded-md md:px-8 "
                      >
                        Add to bookmarks
                      </button>
                    )}
                    <button className="bg-red-500 text-gray-800   font-semibold px-4 py-2 rounded-md md:px-8 ">
                      Watch
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 lg:pt-5">
                <div className="flex  gap-3 mt-9">
                  <span className="font-semibold uppercase">Date :</span>
                  <span>{x.year}</span>
                </div>
                <div className="flex flex-col gap-3 mt-9">
                  <span className="font-semibold uppercase">Description :</span>
                  <span>{x.description}</span>
                </div>
                <div className="mt-12 flex flex-col gap-3 ">
                  <span className="font-semibold uppercase">Actors :</span>
                  <div className="flex flex-col gap-3">
                    <ul className="flex flex-col gap-1 ">
                      {x.actors.map((nameActor) => (
                        <li>· {nameActor.nom}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
