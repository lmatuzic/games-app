import axios from "axios";
import { allGamesURL, upcomingGamesURL, popularGamesURL, newGamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  const allGamesData = await axios.get(allGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      all: allGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results
    },
  });
};

