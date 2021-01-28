import { useEffect } from 'react'

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
      <div className='game__list'>
        
        {games.all && games.all.map(game => (
          <Game 
            key={game.id}
            id={game.id}
            name={game.name} 
            released={game.released}
            image={game.background_image}
          />
        ))}
      </div>
    </div>
  )
}

export default Home