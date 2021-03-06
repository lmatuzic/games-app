// base URL
const base_url = 'https://api.rawg.io/api/'

// all games
const all_games = `games`
export const allGamesURL = () => `${base_url}${all_games}`;

// upcoming games
const upcoming_games = `games?&ordering=-released&page_size=10`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

// popular games
const popular_games = `games?ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;

// new games
const new_games = `games?ordering=added&page_size=10`;
export const newGamesURL = () => `${base_url}${new_games}`;

// game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`

// game screenshots
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots`

// searched games
export const searchedGamesURL = (game_name) => `${base_url}games?search=${game_name}`

