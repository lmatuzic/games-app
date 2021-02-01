import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import GameDetails from './components/GameDetails'
import './stylesheet/application.scss'

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className='content'>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/game/:id" component={GameDetails}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
