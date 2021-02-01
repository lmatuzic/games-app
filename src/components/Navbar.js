import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { fetchSearch } from '../actions/gamesAction'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  }

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  }

  const clearSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED_GAMES"
    })
  }

  return (
    <nav className="navbar">
      <a href="/" onClick={clearSearched}><AiOutlineHome /></a> 

      <form className="search">
        <input type="text" onChange={inputHandler} value={textInput} />
        <button type="submit" onClick={submitSearch}>Search</button>
      </form>
    </nav>
  )
}

export default Navbar
