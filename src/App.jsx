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
import DataDefaultImgAccount from "./data/DataDefaultImgAccount.json";
import Account from "./page/Account";
import PresentationFilmSerie from "./page/PresentationFilmSerie";
import NavBar from "./components/template/NavBar";
import "./index.css";

function App() {
  const [dataVideos, setDataVideos] = useState([]);
  const [dataDefaultImgAccount, setDataDefaultImgAccount] = useState([]);
  const [searchMoviesSeries, setSearchMoviesSeries] = useState("");
  const [dataUsers, setDataUsers] = useLocalStorage("dataUsers", []);
  const [userBookmarksVideos, setUserBookmarksVideos] = useLocalStorage(
    "userBookmarksVideos",
    []
  );

  const [userConnected, setUserConnected] = useLocalStorage(
    "userIsConnected",
    false
  );
  const [numberResults, setNumberResults] = useState("");
  const [messageNotLogin, setMessageNotLogIn] = useState(false);

  useEffect(() => {
    setDataVideos(Data);
    setDataDefaultImgAccount(DataDefaultImgAccount);
  }, []);

  return (
    <BrowserRouter>
      <NavBar
        userConnected={userConnected}
        setUserConnected={setUserConnected}
      />
      {messageNotLogin ? (
        <div className="message_not_login">
          You have to be login to bookmark films or series
        </div>
      ) : null}

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
              setMessageNotLogIn={setMessageNotLogIn}
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
              setMessageNotLogIn={setMessageNotLogIn}
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
              setMessageNotLogIn={setMessageNotLogIn}
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
              setMessageNotLogIn={setMessageNotLogIn}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <PresentationFilmSerie
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
              messageNotLogin={messageNotLogin}
              setMessageNotLogIn={setMessageNotLogIn}
            />
          }
        />
        {/* <Route
          path="/account"
          element={
            <Account
              userConnected={userConnected}
              setUserConnected={setUserConnected}
              dataUsers={dataUsers}
              setDataUsers={setDataUsers}
              dataDefaultImgAccount={dataDefaultImgAccount}
            />
          }
        /> */}
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
