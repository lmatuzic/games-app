import React from 'react'
import { Link } from 'react-router-dom'

//redux
import { useDispatch } from 'react-redux'
import { loadDetails } from '../actions/detailsAction'

const Game = ({name, released, image, id}) => {
  // load details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <div className='game' onClick={loadDetailsHandler}>
      <Link to={`/game/${name}`}>
        <img src={image} alt={name} className='game__img'/>

        <div className='game__body'>
          <h4 className='game__title'>{name}</h4>
          <div className='game__release'>
            <span>Release date: {released}</span> 
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Game