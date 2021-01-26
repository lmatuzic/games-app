import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'

// css
import './stylesheet/application.scss'

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Yo</h1>
    </div>
  );
}

export default App;
