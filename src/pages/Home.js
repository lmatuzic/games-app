import { useEffect } from 'react'
import defaultGameImg from '../images/default.png'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

// components
import Game from '../components/Game'

function Home() {
  // fetch games
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // get data from store
  const games = useSelector(state => state.games);
  console.log(games.all)

  return (
    <div className="container">
      <h4 className="category__title">All</h4>
      <div className='game__list'>
        {games.all && games.all.map(game => (
          <Game 
            key={game.id}
            id={game.id}
            name={game.name} 
            released={game.released === null ? 'unknown' : game.released}
            image={game.background_image === null ? defaultGameImg : game.background_image }
          />
        ))}
      </div>

      <h4 className="category__title">Popular</h4>
      <div className='game__list'>
        {games.popular && games.popular.map(game => (
          <Game 
            key={game.id}
            id={game.id}
            name={game.name} 
            released={game.released === null ? 'unknown' : game.released}
            image={game.background_image === null ? defaultGameImg : game.background_image }
          />
        ))}
      </div>

      <h4 className="category__title">New</h4>
      <div className='game__list'>
        {games.new && games.new.map(game => (
          <Game 
            key={game.id}
            id={game.id}
            name={game.name} 
            released={game.released === null ? 'unknown' : game.released}
            image={game.background_image === null ? defaultGameImg : game.background_image }
          />
        ))}
      </div>

      <h4 className="category__title">Upcoming</h4>
      <div className='game__list'>
        {games.upcoming && games.upcoming.map(game => (
          <Game 
            key={game.id}
            id={game.id}
            name={game.name} 
            released={game.released === null ? 'unknown' : game.released}
            image={game.background_image === null ? defaultGameImg : game.background_image }
          />
        ))}
      </div>
    </div>
  )
}

export default Home