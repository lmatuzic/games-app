const initialState = {
  all: [],
  popular: [],
  newGames: [],
  upcoming: [],
  searched: []
}

const gamesReducer = (state = {initialState}, action) => {
  switch(action.type) {
    case "FETCH_GAMES":
      return {
        ...state, 
        all: action.payload.all,
        upcoming: action.payload.upcoming,
        popular: action.payload.popular,
        newGames: action.payload.newGames
      }
    case "FETCH_SEARCHED_GAMES":
      return {
        ...state,
        searched: action.payload.searched
      }
    case "CLEAR_SEARCHED_GAMES":
      return {
        ...state, 
        searched: []
      }
    default: 
      return {...state}
  }
}

export default gamesReducer
