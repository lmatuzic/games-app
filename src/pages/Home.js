import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/gamesAction'

function Home() {
  // fetch games
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
