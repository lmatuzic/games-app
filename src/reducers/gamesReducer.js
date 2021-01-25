const initialState = {
  all: [],
  popular: [],
  new: [],
  upcoming: [],
  searched: []
}

const gamesReducer = (state = {initialState}, action) => {
  switch(action.type) {
    case "FETCH_GAMES":
      return {
        ...state, 
        all: action.payload.all.data.results.map(game => game.name)
      }
    default: 
      return {...state}
  }
}

export default gamesReducer