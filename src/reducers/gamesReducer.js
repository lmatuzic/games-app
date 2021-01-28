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
    default: 
      return {...state}
  }
}

export default gamesReducer