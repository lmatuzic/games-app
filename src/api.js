// base URL
const base_url = 'https://api.rawg.io/api/'

// month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`
  } else {
    return month;
  }
}

// day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`
  } else {
    return day;
  }
}

// day/month/year
const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentDate = `${currentYear}/${currentMonth}/${currentDay}`;

const lastYear = `${currentYear - 1}/${currentMonth}/${currentDay}`;
//const nextYear = `${currentYear + 1}/${currentMonth}/${currentDay}`;



//popular games
const popular_games = `games?dates=${lastYear}, ${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`
}
