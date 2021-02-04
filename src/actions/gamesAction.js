import axios from "axios";
import { allGamesURL, upcomingGamesURL, popularGamesURL, newGamesURL, searchedGamesURL } from "../api";

//Action Creator
export const loadGames = () => async(dispatch) => {
  const allGamesData = await axios.get(allGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const searched = await axios.get(searchedGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      all: allGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      searched: searched.data.results
    },
  });
};

export const fetchSearch = (game_name) => async(dispatch) => {
  const searched = await axios.get(searchedGamesURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED_GAMES",
    payload: {
      searched: searched.data.results
    }
  })
}