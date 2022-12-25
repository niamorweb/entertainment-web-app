import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import "./style/styles.css";
import Data from "./data/Data.json";
import { useEffect, useState } from "react";
import Movies from "./page/Movies";
import Series from "./page/Series";
import Auth from "./page/Auth";
import SignUp from "./page/SignUp";
import useLocalStorage from "./hooks/UseLocalStorage";
import Bookmarks from "./page/Bookmarks";

function App() {
  const [dataVideos, setDataVideos] = useState([]);
  const [searchMoviesSeries, setSearchMoviesSeries] = useState("");
  const [dataUsers, setDataUsers] = useLocalStorage("dataUsers", []);
  const [userBookmarksVideos, setUserBookmarksVideos] = useLocalStorage(
    "userBookmarksVideos",
    []
  );

  const [userConnected, setUserConnected] = useLocalStorage("userIsConnected", false);
  const [numberResults, setNumberResults] = useState("");

  useEffect(() => {
    setDataVideos(Data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              setDataVideos={setDataVideos}
              setUserBookmarksVideos={setUserBookmarksVideos}
              userConnected={userConnected}
              searchMoviesSeries={searchMoviesSeries}
              setSearchMoviesSeries={setSearchMoviesSeries}
              dataVideos={dataVideos}
              numberResults={numberResults}
              setNumberResults={setNumberResults}
              setUserConnected={setUserConnected}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              setDataVideos={setDataVideos}
              setUserBookmarksVideos={setUserBookmarksVideos}
              userConnected={userConnected}
              searchMoviesSeries={searchMoviesSeries}
              setSearchMoviesSeries={setSearchMoviesSeries}
              dataVideos={dataVideos}
              numberResults={numberResults}
              setNumberResults={setNumberResults}
              setUserConnected={setUserConnected}
            />
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              setDataVideos={setDataVideos}
              setUserBookmarksVideos={setUserBookmarksVideos}
              userBookmarksVideos={userBookmarksVideos}
              searchMoviesSeries={searchMoviesSeries}
              setSearchMoviesSeries={setSearchMoviesSeries}
              userConnected={userConnected}
              dataVideos={dataVideos}
              numberResults={numberResults}
              setNumberResults={setNumberResults}
              setUserConnected={setUserConnected}
            />
          }
        />
        <Route
          path="/series"
          element={
            <Series
              setDataVideos={setDataVideos}
              setUserBookmarksVideos={setUserBookmarksVideos}
              userConnected={userConnected}
              searchMoviesSeries={searchMoviesSeries}
              setSearchMoviesSeries={setSearchMoviesSeries}
              dataVideos={dataVideos}
              numberResults={numberResults}
              setNumberResults={setNumberResults}
              setUserConnected={setUserConnected}
            />
          }
        />
        <Route
          path="/auth"
          element={
            <Auth
              userConnected={userConnected}
              setUserConnected={setUserConnected}
              dataUsers={dataUsers}
              setDataUsers={setDataUsers}
            />
          }
        />
        <Route
          path="/sign-up"
          element={
            <SignUp
              userConnected={userConnected}
              setUserConnected={setUserConnected}
              dataUsers={dataUsers}
              setDataUsers={setDataUsers}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
