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
        all: action.payload.all.map(game => game.name),
        upcoming: action.payload.upcoming.map(game => game.name),
        popular: action.payload.popular.map(game => game.name),
        new: action.payload.new.map(game => game.name)
      }
    default: 
      return {...state}
  }
}

export default gamesReducer