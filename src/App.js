import { React, useEffect, useState,  useReducer } from "react";

import reducer from "./reducer"

import spotfyWebApi from "spotify-web-api-js";

import "./styles/app-style.css";

import Login from "./componnets/Login";

import Player from "./componnets/Player";

import { getTokenFromUrl } from "./services/spotify";
import SpotifyWebApi from "spotify-web-api-js";

import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); // connect the react app with Spotify API

// SpotifyWebApi documentation https://jmperezperez.com/spotify-web-api-js/#src-spotify-web-api.js-constr.prototype.getme

function App() {

  // const [ {token, user}, dispatch] = useReducer(reducer, {user:{}});

  const [ {token, user}, dispatch] = useDataLayerValue();

  // const [ {user}, dispatch] = useDataLayerValue();

  // const [ token , dispatch ] = useDataLayerValue();  // vídeo em 3:53:49

  // TypeError: Object(...)()[Symbol.iterator]().next().value is undefined
  

  useEffect(() => {

    // every time the app runs, this useEffect runs and get the token from the Url

    const hash = getTokenFromUrl();
    window.location.hash = ""; // hidden the token from url for security

    const _token = hash.access_token;

    if (_token) {  

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      

      spotify.setAccessToken(_token); // pass the token tho the spotify Api

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    return () => {};
  }, []);

  console.log("token: ", token)
  console.log("user: ", user)

  return (
    <div className="App">
      {token ? ( // if has a token (login in spotfy) render player, else render login page
        <Player />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
