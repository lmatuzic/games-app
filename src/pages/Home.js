import { useEffect } from 'react'
import defaultGameImg from '../images/default.png'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

// components
import Game from '../components/Game'
import Navbar from '../components/Navbar'


function Home() {
  // fetch games
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // get data from store
  const games = useSelector(state => state.games);

  return (
    <>
      <Navbar />
      <div className="container">
        {games.searched.length === 0 ? '' : (
          <div className="search__results">
            <h4 className="category__title searched__title">Search results</h4>

            <div className='game__list'>
              {games.searched && games.searched.map(game => (
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
        )}

      {/*     
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
      */} 

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
          {games.newGames && games.newGames.map(game => (
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
    </>
  )
}

export default Home