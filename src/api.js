// base URL
const base_url = 'https://api.rawg.io/api/'

//all games
const all_games = `games`
export const allGamesURL = () => `${base_url}${all_games}`;

//upcoming games
const upcoming_games = `games?&ordering=added&page_size=10`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

//popular games
const popular_games = `games?ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
