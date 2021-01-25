import axios from "axios";
import { allGamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  const allGamesData = await axios.get(allGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      all: allGamesData
    },
  });
};

