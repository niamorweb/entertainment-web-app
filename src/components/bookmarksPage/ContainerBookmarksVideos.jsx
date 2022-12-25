import React from "react";
import ContainerVideos from "../containerVideos/ContainerVideos";

export default function ContainerBookmarksVideos({ dataVideos }) {
  return (
    <>
      <div>containerBookmarksVideos</div>
      <ContainerVideos dataVideos={dataVideos} />
    </>
  );
}
